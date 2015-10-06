<?php
require 'vendor/autoload.php';

//for amazon
use ApaiIO\ApaiIO;
use ApaiIO\Configuration\GenericConfiguration;
use ApaiIO\Operations\Search;
use ApaiIO\Operations\BrowseNodeLookup;
use ApaiIO\Operations\Lookup;
use ApaiIO\Operations\SimilarityLookup;

error_reporting(-1);//tell me stuff

$app = new \Slim\Slim();

$app->get('/amazon/search/:keywords', function( $keywords ){

  $conf = new GenericConfiguration();

  $conf
      ->setCountry('com')
      ->setAccessKey(getenv('AMAZON_ACCESS'))
      ->setSecretKey(getenv('AMAZON_SECRET'))
      ->setAssociateTag(getenv('AMAZON_ASSOCIATE_TAG'));

  $search = new Search();
    $search->setResponseGroup(array('Large')); // More detailed information
  $search->setKeywords($keywords);

  $apaiIo = new ApaiIO($conf);
  $response = $apaiIo->runOperation($search);

  echo json_encode(simplexml_load_string($response));

});

$app->get('/amazon/node/:browsenode', function( $browsenode ){

    $conf = new GenericConfiguration();

    $conf
        ->setCountry('com')
        ->setAccessKey(getenv('AMAZON_ACCESS'))
        ->setSecretKey(getenv('AMAZON_SECRET'))
        ->setAssociateTag(getenv('AMAZON_ASSOCIATE_TAG'));


    $browseNodeLookup = new BrowseNodeLookup();
    $browseNodeLookup->setNodeId($browsenode);

    $apaiIo = new ApaiIO($conf);
    $response = $apaiIo->runOperation($browseNodeLookup);

    echo json_encode(simplexml_load_string($response));

});

$app->get('/amazon/lookup/:asin', function( $asin ) {

  $conf = new GenericConfiguration();

  $conf
      ->setCountry('com')
      ->setAccessKey(getenv('AMAZON_ACCESS'))
      ->setSecretKey(getenv('AMAZON_SECRET'))
      ->setAssociateTag(getenv('AMAZON_ASSOCIATE_TAG'));

    $apaiIo = new ApaiIO($conf);

  $lookup = new Lookup();
  $lookup->setItemId($asin);
  $lookup->setResponseGroup(array('Large')); // More detailed information

  $response = $apaiIo->runOperation($lookup);

  echo json_encode(simplexml_load_string($response));

});


$app->get('/amazon/similar/:asin', function( $asin ) {

    $conf = new GenericConfiguration();

    $conf
        ->setCountry('com')
        ->setAccessKey(getenv('AMAZON_ACCESS'))
        ->setSecretKey(getenv('AMAZON_SECRET'))
        ->setAssociateTag(getenv('AMAZON_ASSOCIATE_TAG'));

    $apaiIo = new ApaiIO($conf);

    $similaritylookup = new SimilarityLookup();
    $similaritylookup->setItemId($asin);

    $response = $apaiIo->runOperation($similaritylookup);
    echo json_encode(simplexml_load_string($response));

});

$app->run();
