$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B00784S5D0',
        'B00PFRMBK0',
        'B002JOYTNY',
        'B002ZCS698',
        'B00HLK6IUI',
        'B002Q6H2LQ',
        'B0054RYI7K',
        'B0034K4DBK',
        'B00E1RR312'
    ];

    _.each(requestList,function(asin, index, list){
        $.getJSON('./api/amazon/lookup/' + asin)
            .success(function (data) {

                var theSaleDisplay = $('.sale-items article').eq(index);

                theSaleDisplay.find('h2').text(data.Items.Item.ItemAttributes.Title);
                theSaleDisplay.find('description').text(data.Items.Item.ItemAttributes.Title);
                theSaleDisplay.find('img').attr( 'src', data.Items.Item.LargeImage.URL );

                $('.sale-items article').eq(index).click(function(){
                    window.location = data.Items.Item.DetailPageURL;
                });
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            });
    });
});