$(document).ready(function(){

    //set the items for sale
    var requestList = [
        'B0101ZUHAG',
        'B00W4FRMSW',
        'B012IZZKMC',
        'B015D96P3I',
        'B00M3N8BAS',
        'B010N19KC4',
        'B00Y61F2IY',
        'B0115CH1VC',
        'B00NCV6JG8'
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