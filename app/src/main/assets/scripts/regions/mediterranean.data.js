/**
 * Mediterranean - Cultural Data
 * Quiz questions and cultural guidance for the Mediterranean (Italy, France, Spain, Portugal).
 * TODO: Add content for this region
 */
(function() {
    'use strict';

    const mediterraneanData = {
        id: "quiz_mediterranean",
        title: "Mediterranean Cultural Quiz",
        region: "mediterranean",
        category: "general",
        questions: [
            // TODO: Add questions for Mediterranean
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('mediterranean', mediterraneanData);
    }

})();
