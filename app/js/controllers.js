artApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
  document.title = 'pleasant.space - home'; //set the page title

}])
artApp.controller('PhotoController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasant.space - photos'; //set the page title
    var productList = [
    'B00EO5QY84',
    'B00EILJKIA',
    'B00ECJYYWA',
    'B00EW4APKU',
    'B00XAQX8O6',
    'B00E83VN9C'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });
}])

artApp.controller('PaintingController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasant.space - painting'; //set the page title
    var productList = [
        'B00YRUB4TA',
        'B00RV5X2MA',
        'B0132X2JQ4',
        'B00A0R6HS2',
        'B011M7FQ0S',
        'B00NCV6JG8'
    ];

    $scope.artworks = globals.getItemsFromAmazon( productList );

}])
artApp.controller('PrintsController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasant.space - prints'; //set the page title
    var productList = [
        'B00YRUB4TA',
        'B00RV5X2MA',
        'B0132X2JQ4',
        'B00A0R6HS2',
        'B011M7FQ0S',
        'B00NCV6JG8'
    ];

    $scope.artworks = globals.getItemsFromAmazon( productList );

}])
artApp.controller('DrawingController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasant.space - drawing'; //set the page title
    var productList = [
        'B00YRUB4TA',
        'B00RV5X2MA',
        'B0132X2JQ4',
        'B00A0R6HS2',
        'B011M7FQ0S',
        'B00NCV6JG8'
    ];

    $scope.artworks = globals.getItemsFromAmazon( productList );

}])

artApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {
  document.title = 'pleasant.space - contact'; //set the page title
  //send self email
}])
