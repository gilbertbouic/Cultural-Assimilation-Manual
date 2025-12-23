/**
 * Scandinavia - Cultural Data
 * Quiz questions and cultural guidance for Scandinavia (Sweden, Norway, Denmark).
 * TODO: Add content for this region
 */
(function() {
    'use strict';

    const scandinaviaData = {
        id: "quiz_scandinavia",
        title: "Scandinavia Cultural Quiz",
        region: "scandinavia",
        category: "general",
        questions: [
            // TODO: Add questions for Scandinavia
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('scandinavia', scandinaviaData);
    }

})();
