var request = require('request');
var querystring = require('querystring');

var PlaceFinder = function(appID) {
  this.baseUrl = "http://where.yahooapis.com/geocode?";  
  this.appID = appID;
};

PlaceFinder.prototype._makeRequest = function(params, callback) {
  params.appid = this.appID;
  params.flags = "J";
  var qs = querystring.stringify(params);
  var url = this.baseUrl+qs;
  request(url, function(error, response, body) {
    callback(error, JSON.parse(body));
  });
};

PlaceFinder.prototype.location = function(name, callback) {
  this._makeRequest({ location: name }, callback);
};

PlaceFinder.prototype.placeOfInterest = function(name, callback) {
  this._makeRequest({ name: name }, callback);
};

PlaceFinder.prototype.woeid = function(woeid, callback) {
  this._makeRequest({ woeid: woeid }, callback);
};
module.exports = PlaceFinder;
