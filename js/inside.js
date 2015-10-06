$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B00GAI7EO6',
        'B0067YWLL4',
        'B01444MS7U',
        'B000MUXLKE',
        'B00BXN1V9W',
        'B00PKO8HTW',
        'B010NOZMUK',
        'B00WQCRXC8',
        'B00JS54DIS'
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