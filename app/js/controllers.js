artApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
  document.title = 'pleasant.space - home'; //set the page title

}])
artApp.controller('PhotoController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasant.space - photos'; //set the page title
    var productList = [
        'B00E7SEHFA',
        'B00KQ17XC6',
        'B01B26ZSE8',
        'B0170E1HLO',
        'B015GBXQ5I',
        'B017BUSP30',
        'B016VGD93G',
        'B016VGCLNA',
        'B00YDMQTII'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });
}])

artApp.controller('PaintingController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - painting'; //set the page title
    var productList = [
        'B00FKZ0Z1O',
        'B00FKZ0EF6',
        'B00GTBL6MK',
        'B00V3QTYTS',
        'B01ENWA5PU',
        'B01ECZJHFC',
        'B014JXBCFU',
        'B00ENJV3NM',
        'B00HL149IK'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])
artApp.controller('PrintsController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - prints'; //set the page title
    var productList = [
        'B00E1ODD0A',
        'B00DYC7TDM',
        'B00XLYL0JM',
        'B00ECBQ7NM',
        'B00X0LSYY0',
        'B017QMIOXE',
        'B012BD203S',
        'B00E3H25RC',
        'B010174R0A'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])
artApp.controller('DrawingController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasing.space - drawing'; //set the page title
    var productList = [
        'B00FBP7WV4',
        'B012DYGB9O',
        'B00HGLEXOA',
        'B01434JXAQ',
        'B01MCV6254',
        'B01M65KGPP',
        'B00S99GH9M',
        'B01IMO3ZKW',
        'B017OLWDJ8'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {
  document.title = 'pleasing.space - contact'; //set the page title
  //send self email
}])
