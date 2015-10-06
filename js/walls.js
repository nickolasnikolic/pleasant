$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B00EA0NSP0',
        'B00O3A6LYW',
        'B00MERFYTY',
        'B00X4K6GME',
        'B00EIPB7P0',
        'B00WY64PXQ',
        'B013IHR5XQ',
        'B00936KSBS',
        'B00YVDKXD6'
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