artApp.factory('globals', function() {

    var userId = '';
    var userEmail = '';
    var items = [];
    var itemsService = {};

    itemsService.getItemsFromAmazon = function( products ){

        var items = [];

        _.each(products,function(asin, index, list){
            $.getJSON('../api/amazon/lookup/' + asin)
                .success(function (data) {
                    items.push( data );
                })
                .error(function (error) {
                    console.log('error:');
                    console.log(error);
                });
        });
        console.log(items);
        return items;
    }

    return itemsService;

});
