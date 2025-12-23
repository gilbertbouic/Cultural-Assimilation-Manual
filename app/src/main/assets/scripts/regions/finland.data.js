/**
 * Finland - Cultural Data
 * Quiz questions and cultural guidance for Finland.
 * TODO: Add content for this region
 */
(function() {
    'use strict';

    const finlandData = {
        id: "quiz_finland",
        title: "Finland Cultural Quiz",
        region: "finland",
        category: "general",
        questions: [
            // TODO: Add questions for Finland
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('finland', finlandData);
    }

})();
