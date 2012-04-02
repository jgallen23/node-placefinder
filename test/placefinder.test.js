var PlaceFinder = require('../');
var appID = "dUGYBq5g";

exports.location = function(t) {
  var pf = new PlaceFinder(appID);
  pf.location('Hermosa Beach, CA', function(err, data) {
    t.equal(data.ResultSet.Found, 1);
    t.equal(data.ResultSet.Results[0].city, "Hermosa Beach");
    t.done();
  });
};

exports.placeOfInterest = function(t) {
  var pf = new PlaceFinder(appID);
  pf.placeOfInterest('Yosemite National Park', function(err, data) {
    t.equal(data.ResultSet.Results[0].woeid, 55813396);
    t.done();
  });
};

exports.woeid = function(t) {
  var pf = new PlaceFinder(appID);
  var woeid = 12797150;
  pf.woeid(woeid, function(err, data) {
    t.equal(data.ResultSet.Results[0].woeid, woeid);
    t.done();
  });
};

exports.city = function(t) {
  var pf = new PlaceFinder(appID);
  var city = "Hermosa B";
  pf.city(city, function(err, data) {
    t.equal(data.ResultSet.Found, 1);
    t.equal(data.ResultSet.Results[0].city, "Hermosa Beach");
    t.done();
  });
};

exports.zip = function(t) {
  var pf = new PlaceFinder(appID);
  var zip = "90254";
  pf.zip(zip, function(err, data) {
    t.equal(data.ResultSet.Results[0].city, "Hermosa Beach");
    t.done();
  });
};
