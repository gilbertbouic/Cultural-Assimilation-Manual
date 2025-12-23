/**
 * Baltics - Cultural Data
 * Quiz questions and cultural guidance for the Baltics (Estonia, Latvia, Lithuania).
 * TODO: Add content for this region
 */
(function() {
    'use strict';

    const balticsData = {
        id: "quiz_baltics",
        title: "Baltics Cultural Quiz",
        region: "baltics",
        category: "general",
        questions: [
            // TODO: Add questions for Baltics
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('baltics', balticsData);
    }

})();
