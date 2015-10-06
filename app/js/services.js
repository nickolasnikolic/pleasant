artApp.factory('globals', function() {

    var itemsService = {};
    itemsService.items = [];
    itemsService.getItemsFromAmazon = function( products ){
        itemsService.items = [];

        _.each(products,function(asin, index, list){
            $.getJSON('../api/amazon/lookup/' + asin)
                .success(function (data) {
                    itemsService.items.push( data );
                })
                .error(function (error) {
                    console.log('error:');
                    console.log(error);
                })
                .done(function(){
                    console.log(items);
                });
        });
    };

    return itemsService;

});
