artApp.factory('globals', function() {

    var itemsService = {};
    itemsService.items = [];
    itemsService.getItemsFromAmazon = function( products ){
        itemsService.items = [];
        $.when(function(){
            _.each(products,function(asin, index, list){
                $.getJSON('../api/amazon/lookup/' + asin)
                    .success(function (data) {
                        itemsService.items.push( data );
                    })
                    .error(function (error) {
                        console.log('error:');
                        console.log(error);
                    })
            });
        })
        .then(function(){
            console.log(itemsService.items);
            return itemsService.items;
        });
    };

    return itemsService;

});
