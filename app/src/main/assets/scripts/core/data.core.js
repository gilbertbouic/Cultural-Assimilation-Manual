/**
 * Cultural Assimilation Manual - Core Data Module
 * Contains shared data structures, helper functions, and initialization.
 * All region-specific data files will attach to window.CAM_DATA.regions.
 */
(function() {
    'use strict';

    // Initialize global CAM_DATA namespace if it doesn't exist
    if (!window.CAM_DATA) {
        window.CAM_DATA = {
            regions: {},
            culturalData: { quizzes: {} }
        };
    }

    // Initialize global CAM_SCENARIOS namespace if it doesn't exist
    if (!window.CAM_SCENARIOS) {
        window.CAM_SCENARIOS = {
            regions: {},
            scenarios: {}
        };
    }

    /**
     * Helper function to register region data
     * @param {string} regionKey - The region identifier (e.g., 'united_states')
     * @param {Object} data - The region's quiz data
     */
    window.CAM_DATA.registerRegion = function(regionKey, data) {
        this.regions[regionKey] = data;
        // Also maintain backward compatibility with old structure
        this.culturalData.quizzes[regionKey] = data;
    };

    /**
     * Helper function to register region scenarios
     * @param {string} regionKey - The region identifier (e.g., 'united_kingdom')
     * @param {Object} scenarios - The region's scenario data
     */
    window.CAM_SCENARIOS.registerRegion = function(regionKey, scenarios) {
        this.regions[regionKey] = scenarios;
        // Also maintain backward compatibility with old structure
        this.scenarios[regionKey] = scenarios;
    };

    /**
     * Get all available regions
     * @returns {Array<string>} Array of region keys
     */
    window.CAM_DATA.getAvailableRegions = function() {
        return Object.keys(this.regions);
    };

    /**
     * Get data for a specific region
     * @param {string} regionKey - The region identifier
     * @returns {Object|null} The region's data or null if not found
     */
    window.CAM_DATA.getRegionData = function(regionKey) {
        return this.regions[regionKey] || null;
    };

    /**
     * Get scenarios for a specific region
     * @param {string} regionKey - The region identifier
     * @returns {Object|null} The region's scenarios or null if not found
     */
    window.CAM_SCENARIOS.getRegionScenarios = function(regionKey) {
        return this.regions[regionKey] || null;
    };

    // Backward compatibility: expose globally
    window.culturalData = window.CAM_DATA.culturalData;
    window.scenarios = window.CAM_SCENARIOS.scenarios;

})();
