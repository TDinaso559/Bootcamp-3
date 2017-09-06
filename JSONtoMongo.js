'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listings = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 

  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */

// reading from listings.json and put in database
var listEntries = listings["entries"]

for (var key in listEntries) {
  var listingJSON = listEntries[key];
  var dbListing = new Listing({
    name: listingJSON.name,
    code: listingJSON.code,
    address: listingJSON.address,
    coordinates: listingJSON.coordinates
  });

  dbListing.save(function(errSave) {
    if (errSave) { throw errSave; }
  });
} 