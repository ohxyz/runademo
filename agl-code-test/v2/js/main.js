( function () {
    
    var handleSuccess = function ( people ) {
        
        UI.buildCatLists( people );
    };
    
    var handleFailure = function ( message, error ) {
        
        console.error( message, error );
        
    };
    
    AJAX.fetchPeople( handleSuccess, handleFailure );
    
} )();

