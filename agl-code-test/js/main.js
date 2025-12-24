
( function () {
    
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
    
    var $buildList = function( cats, heading ) {
        
        if ( _.isArray( cats ) === false
                || cats.length === 0 ) {
            
            return null;
        }
        
        var $heading = $( '<h2>' ).text( heading );
        var $ul = $( '<ul>' );
        var $container = $( '<div>' ).append( $heading, $ul );
        
        cats.forEach( function( cat ) {
            
            var $li = $( '<li>' ).text( cat );
        
            $ul.append( $li );
        } );
        
        return $container;
        
    };
    
    var jsonUrl = 'people.json';
    var $container = $( '#cat-lists' );
    
    var jqxhr = $.ajax( {
        
            url: jsonUrl,
            dataType: 'json'
            
        } )
        .done( function( data ) {
            
            if ( _.isArray( data ) === false 
                    || data.length === 0
                    || ( 'gender' in data[0] ) === false ) {
                
                console.error( "An array with gender is expected.", data );
                return;
            }
            
            var people = data;
            
            var maleOwners = _.filter( people, { 'gender': 'Male' } );
            var femaleOwners = _.filter( people, { 'gender': 'Female'} );
            
            var catsOfMale = getCats( maleOwners );
            var catsOfFemale = getCats( femaleOwners );
            
            $container.append( $buildList( catsOfMale, 'Male' ), 
                               $buildList( catsOfFemale, 'Female' ) );
            

        } )
        .fail( function() {
            
            console.error( 'Failed to get JSON resource.' );
        } );

} )();

