var UI = ( function () {

    var $buildList = function( listArray, heading ) {
        
        if ( _.isArray( listArray ) === false
                || listArray.length === 0 ) {
            
            return null;
        }
        
        var $heading = $( '<h2>' ).text( heading );
        var $ul = $( '<ul>' );
        var $container = $( '<div>' ).append( $heading, $ul );
        
        listArray.forEach( function( item ) {
            
            var $li = $( '<li>' ).text( item );
        
            $ul.append( $li );
        } );
        
        return $container;
        
    };
    
    var $container = $( '#cat-lists' );
    
    var buildCatLists = function ( people ) {
        
        var maleOwners = _.filter( people, { 'gender': 'Male' } );
        var femaleOwners = _.filter( people, { 'gender': 'Female'} );
        
        var catsOfMale = MODEL.getCats( maleOwners );
        var catsOfFemale = MODEL.getCats( femaleOwners );
        
        $container.append( $buildList( catsOfMale, 'Male' ), 
                           $buildList( catsOfFemale, 'Female' ) );
    }

    var my = {
        
        $buildList: $buildList,
        buildCatLists: buildCatLists
    };
    
    return my;
    
} )();