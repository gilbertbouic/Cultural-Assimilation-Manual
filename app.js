/**
 * Cultural Assimilation Manual - Main Application Module
 * Handles service worker registration for offline functionality.
 */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        console.log('Cultural Assimilation Manual app is running.');

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
    });

    // Register service worker for PWA functionality
    // Using relative path './sw.js' for GitHub Pages compatibility
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    }
})();
