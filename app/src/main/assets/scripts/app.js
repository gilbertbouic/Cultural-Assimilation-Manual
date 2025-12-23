/**
 * Cultural Assimilation Manual - Main Application Module
 * Handles service worker registration and region selection.
 */
(function() {
    'use strict';

    // Current selected region
    let currentRegion = null;

    document.addEventListener('DOMContentLoaded', () => {
        console.log('Cultural Assimilation Manual app is running.');

        // Initialize region selector
        initializeRegionSelector();

        // Register service worker for offline support
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed: ', error);
                });
        }

        // Check for saved region preference
        const savedRegion = localStorage.getItem('selectedRegion');
        if (savedRegion && window.CAM_DATA && window.CAM_DATA.regions[savedRegion]) {
            selectRegion(savedRegion);
        }
    });

    /**
     * Initialize region selector UI
     */
    function initializeRegionSelector() {
        const regionButtons = document.querySelectorAll('.region-btn');
        const changeRegionBtn = document.getElementById('change-region');

        regionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const region = btn.getAttribute('data-region');
                selectRegion(region);
            });
        });

        if (changeRegionBtn) {
            changeRegionBtn.addEventListener('click', () => {
                showRegionSelector();
            });
        }
    }

    /**
     * Select a region and update the UI
     */
    function selectRegion(regionKey) {
        currentRegion = regionKey;
        
        // Save preference
        localStorage.setItem('selectedRegion', regionKey);

        // Update UI
        const regionButtons = document.querySelectorAll('.region-btn');
        regionButtons.forEach(btn => {
            if (btn.getAttribute('data-region') === regionKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Show current region display
        const currentRegionDisplay = document.getElementById('current-region-display');
        const currentRegionName = document.getElementById('current-region-name');
        const regionSelector = document.getElementById('region-selector');

        if (currentRegionDisplay && currentRegionName) {
            const regionNames = {
                'united_states': 'United States',
                'united_kingdom': 'United Kingdom',
                'central_europe': 'Central Europe',
                'scandinavia': 'Scandinavia',
                'finland': 'Finland',
                'baltics': 'Baltics',
                'balkans': 'Balkans',
                'greece': 'Greece',
                'mediterranean': 'Mediterranean'
            };
            
            currentRegionName.textContent = regionNames[regionKey] || regionKey;
            currentRegionDisplay.style.display = 'block';
            if (regionSelector) {
                regionSelector.style.display = 'none';
            }
        }

        // Trigger custom event for other modules
        window.dispatchEvent(new CustomEvent('regionSelected', { detail: { region: regionKey } }));
        
        console.log('Selected region:', regionKey);
    }

    /**
     * Show region selector
     */
    function showRegionSelector() {
        const regionSelector = document.getElementById('region-selector');
        const currentRegionDisplay = document.getElementById('current-region-display');
        
        if (regionSelector) {
            regionSelector.style.display = 'grid';
        }
        if (currentRegionDisplay) {
            currentRegionDisplay.style.display = 'block';
        }
        
        // Scroll to region selector
        const regionSection = document.getElementById('region-select');
        if (regionSection) {
            regionSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Expose region functions globally for other modules
    window.CAM_APP = {
        getCurrentRegion: () => currentRegion,
        selectRegion: selectRegion,
        showRegionSelector: showRegionSelector
    };

})();
