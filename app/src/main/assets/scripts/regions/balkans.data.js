/**
 * Balkans - Cultural Data
 * Quiz questions and cultural guidance for the Balkans (Serbia, Croatia, Bosnia, Montenegro, etc.).
 * TODO: Add content for this region
 */
(function() {
    'use strict';

    const balkansData = {
        id: "quiz_balkans",
        title: "Balkans Cultural Quiz",
        region: "balkans",
        category: "general",
        questions: [
            // TODO: Add questions for Balkans
        ]
    };

    // Register this region's data
    if (window.CAM_DATA && window.CAM_DATA.registerRegion) {
        window.CAM_DATA.registerRegion('balkans', balkansData);
    }

})();
