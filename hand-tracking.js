// Hand Tracking for Interactive Star Animation
// Uses TensorFlow.js HandPose model to detect hand movements and scale stars

// Configuration constants
const HAND_SIZE_MIN = 50;
const HAND_SIZE_MAX = 200;
const PINCH_DISTANCE_MIN = 20;
const PINCH_DISTANCE_MAX = 150;
const SCALE_MIN = 0.5;
const SCALE_MAX = 2.0;
const VERTICAL_HAND_OFFSET = -90; // Offset to make vertical hand = 0 degrees

let handPoseModel = null;
let video = null;
let isTracking = false;
let lastHandDistance = 0;
let starScaleFactor = 1;
let lastCircleScale = 1;
let lastRotationAngle = 0;

// Initialize hand tracking
async function initHandTracking() {
    try {
        // Load the HandPose model
        handPoseModel = await handpose.load();
        console.log('HandPose model loaded');
        
        // Setup video element for webcam
        video = document.createElement('video');
        video.width = 640;
        video.height = 480;
        video.style.display = 'none';
        document.body.appendChild(video);
        
        // Request webcam access
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: 640, height: 480 }
        });
        
        video.srcObject = stream;
        video.play();
        
        isTracking = true;
        console.log('Hand tracking initialized');
        
        // Start detection loop
        detectHands();
        
        return true;
    } catch (error) {
        console.error('Failed to initialize hand tracking:', error);
        return false;
    }
}

// Detect hands and update star scale
async function detectHands() {
    if (!isTracking || !handPoseModel || !video) {
        return;
    }
    
    try {
        // Detect hands in the video frame
        const predictions = await handPoseModel.estimateHands(video);
        
        if (predictions.length > 0) {
            // Get the first detected hand
            const hand = predictions[0];
            
            // Calculate hand distance from camera based on hand size
            // Larger bounding box = closer to camera
            const landmarks = hand.landmarks;
            
            // Calculate distance between wrist (0) and middle finger tip (12)
            const wrist = landmarks[0];
            const middleTip = landmarks[12];
            
            const handSize = Math.hypot(
                middleTip[0] - wrist[0],
                middleTip[1] - wrist[1]
            );
            
            // Normalize hand size to scale factor
            // Larger hand size (closer) = larger stars
            const normalizedSize = Math.max(HAND_SIZE_MIN, Math.min(HAND_SIZE_MAX, handSize));
            starScaleFactor = SCALE_MIN + ((normalizedSize - HAND_SIZE_MIN) / (HAND_SIZE_MAX - HAND_SIZE_MIN)) * (SCALE_MAX - SCALE_MIN);
            
            // Smooth the transition
            lastHandDistance = lastHandDistance * 0.8 + starScaleFactor * 0.2;
            
            // Calculate pinch distance for circle expansion/reduction
            // Distance between thumb tip (4) and index finger tip (8)
            const thumbTip = landmarks[4];
            const indexTip = landmarks[8];
            
            const pinchDistance = Math.hypot(
                indexTip[0] - thumbTip[0],
                indexTip[1] - thumbTip[1]
            );
            
            // Normalize pinch distance to circle scale
            const normalizedPinch = Math.max(PINCH_DISTANCE_MIN, Math.min(PINCH_DISTANCE_MAX, pinchDistance));
            const circleScale = SCALE_MIN + ((normalizedPinch - PINCH_DISTANCE_MIN) / (PINCH_DISTANCE_MAX - PINCH_DISTANCE_MIN)) * (SCALE_MAX - SCALE_MIN);
            
            // Smooth the circle scale transition
            lastCircleScale = lastCircleScale * 0.8 + circleScale * 0.2;
            
            // Calculate rotation angle based on hand orientation
            // Use angle between wrist and middle finger tip
            const angle = Math.atan2(middleTip[1] - wrist[1], middleTip[0] - wrist[0]);
            const rotationDegrees = (angle * 180 / Math.PI) + VERTICAL_HAND_OFFSET;
            
            // Smooth the rotation transition
            lastRotationAngle = lastRotationAngle * 0.8 + rotationDegrees * 0.2;
            
            // Update star scales, circle size, and rotation
            updateStarTransforms(lastHandDistance, lastCircleScale, lastRotationAngle);
        } else {
            // Gradually return to normal size when no hand detected
            lastHandDistance = lastHandDistance * 0.95 + 1.0 * 0.05;
            lastCircleScale = lastCircleScale * 0.95 + 1.0 * 0.05;
            lastRotationAngle = lastRotationAngle * 0.95;
            updateStarTransforms(lastHandDistance, lastCircleScale, lastRotationAngle);
        }
    } catch (error) {
        console.error('Hand detection error:', error);
    }
    
    // Continue detection loop
    requestAnimationFrame(detectHands);
}

// Update the scale and rotation of all stars using CSS custom properties
function updateStarTransforms(scale, circleScale, rotation) {
    document.documentElement.style.setProperty('--star-scale', scale);
    document.documentElement.style.setProperty('--circle-scale', circleScale);
    document.documentElement.style.setProperty('--circle-rotation', `${rotation}deg`);
}

// Toggle hand tracking on/off
function toggleHandTracking() {
    if (!isTracking) {
        initHandTracking();
    } else {
        stopHandTracking();
    }
}

// Stop hand tracking
function stopHandTracking() {
    isTracking = false;
    
    if (video && video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }
    
    // Reset star scales
    updateStarTransforms(1, 1, 0);
    
    console.log('Hand tracking stopped');
}

// Auto-initialize when page loads
window.addEventListener('load', () => {
    // Add a small button to toggle hand tracking
    const toggleButton = document.createElement('button');
    toggleButton.id = 'hand-tracking-toggle';
    toggleButton.innerHTML = '📷 Enable Hand Tracking';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #6c63ff 0%, #5a52d4 100%);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    toggleButton.addEventListener('click', async () => {
        if (!isTracking) {
            const success = await initHandTracking();
            if (success) {
                toggleButton.innerHTML = '📷 Disable Hand Tracking';
                toggleButton.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%)';
            }
        } else {
            stopHandTracking();
            toggleButton.innerHTML = '📷 Enable Hand Tracking';
            toggleButton.style.background = 'linear-gradient(135deg, #6c63ff 0%, #5a52d4 100%)';
        }
    });
    
    document.body.appendChild(toggleButton);
});
