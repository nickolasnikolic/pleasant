artApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
  document.title = 'pleasant.space - home'; //set the page title

}])
artApp.controller('PhotoController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
    document.title = 'pleasant.space - photos'; //set the page title
    var productList = [
    'B00I5UJLXO',
    'B00P04L82U',
    'B00P0U53RK'
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
    document.title = 'pleasant.space - painting'; //set the page title
    var productList = [
        'B00MW8LRB4',
        'B00WY666LA',
        'B00MERGUKG'
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
    document.title = 'pleasant.space - prints'; //set the page title
    var productList = [
        'B00E1ODD0A',
        'B00DYC7TDM',
        'B00XLYL0JM'
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
    document.title = 'pleasant.space - drawing'; //set the page title
    var productList = [
        'B00FBP7WV4',
        'B012DYGB9O',
        'B00HGLEXOA'
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
  document.title = 'pleasant.space - contact'; //set the page title
  //send self email
}])
