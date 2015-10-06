$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B0055DXL1C',
        'B0051HEDC8',
        'B00CP53EX8',
        'B007IO163Q',
        'B00ETUD9YG',
        'B01444K2N2',
        'B007Z2MKF4',
        'B0067YWSF8',
        'B0144502UO'
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