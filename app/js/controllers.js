function getItemsFromAmazon( products ){

  var items = [];

  _.each(products,function(asin, index, list){
    $.getJSON('../api/amazon/lookup/' + asin)
        .success(function (data) {
          items.push( data );
        })
        .error(function (error) {
          console.log('error:');
          console.log(error);
        });
  });
  console.log(items);
  return items;
}

artApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {
  document.title = 'pleasant.space - home'; //set the page title

}])
artApp.controller('PhotoController', ['$scope', '$state', function($scope, $state) {
  document.title = 'pleasant.space - photo'; //set the page title
  var productList = [
      'B00EO5QY84'
  ];

  $scope.art = getItemsFromAmazon( productList );
}])
artApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {
  document.title = 'pleasant.space - contact'; //set the page title
  //send self email
}])
