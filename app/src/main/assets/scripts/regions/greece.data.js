/**
 * Greece - Cultural Data
 * Quiz questions and cultural guidance for Greece.
 * TODO: Add content for this region
 */
(function() {
    'use strict';

    const greeceData = {
        id: "quiz_greece",
        title: "Greece Cultural Quiz",
        region: "greece",
        category: "general",
        questions: [
            // TODO: Add questions for Greece
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('greece', greeceData);
    }

})();
