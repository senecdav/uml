// Module Utilities
var Utilities = (function() {
    // Membres privés
    
    // Membres publics
    return {
        "changePageTitle": function(newTitle) {
            $(document).attr('title', newTitle);
        }
    };
})();