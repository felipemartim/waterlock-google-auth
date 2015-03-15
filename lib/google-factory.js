'use strict';

var GoogleOAuth2 = require('./google-oauth2');
var WaterlockConfig = require('./waterlock-config')()

module.exports = function(){

  var googleOAuth2Url =
    WaterlockConfig.pluralizeEndpoints ? '/auths/google_oauth2' : '/auth/google_oauth2';

  return new GoogleOAuth2(this.config.clientId,
  this.config.clientSecret, this.waterlockConfig.baseUrl + googleOAuth2Url,
  this.googleConfig);
};
;
