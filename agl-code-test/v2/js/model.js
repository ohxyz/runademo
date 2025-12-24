var MODEL = ( function() {
    
    var getCats = function ( owners ) {
        
        if ( _.isArray( owners ) === false
                || owners.length === 0 ) {
            
            return [];
        }
        
        var gender = owners[0].gender;

        var cats = [];
        
        owners.forEach( function ( owner ) {

            var pets = owner.pets;
            
            if ( _.isArray( pets ) === false
                    || pets.length === 0 ) {
                
                return;
            }
            
            pets.forEach( function ( pet ) { 
                
                if ( pet.type === 'Cat' ) {
                    
                    cats.push( pet.name );
                }
            
            } );
            
        } );

        cats.sort( function (a, b) {
            
            return a.localeCompare( b );
            
        } );
        
        return cats;
    };
    
    var my = {
        
        getCats: getCats
    };
    
    return my;
    
} )();