/* Fill out these functions using Mongoose queries*/

// setup variables
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config'),
  listings = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);
 /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
var findLibraryWest = function() {
 
  Listing.findOne({ name: 'Library West' }, function(err, listing) {
    if (err == null && listing != null) {
      console.log(listing);
    }
  });
}; 
 /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

var removeCable = function() {
  Listing.findOne({ code: 'CABL' }, function(err, listing) {
    if (err == null && listing != null) {
      console.log(listing)
      listing.remove(function(err) { });
    }
  });
};
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
var updatePhelpsLab = function() {
  var newAddress = "new address for Phelps Laboratory"
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: newAddress }, function(err, listing) {
    if (err != null || listing == null) { return; }
  });
  Listing.findOne({ name: 'Phelps Laboratory' }, function(err, listing) {
    if (err == null && listing != null) {
      console.log(listing);
    }
  });
};
 /* 
    Retrieve all listings in the database, and log them to the console. 
   */
var retrieveAllListings = function() {
  Listing.find({}, function(err, listings) {
    if (err == null && listings != null) {
      console.log(listings);
    }
  }); 
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
