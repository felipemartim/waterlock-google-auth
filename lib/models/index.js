'use strict';

var _ = require('lodash');

module.exports = function(){

  return {
    auth:{
      attributes: function(attr){
        var template = {
          email: {
            type: 'string',
            unique: true
          },
          name:{
            type: 'string'
          }
        };

        _.merge(template, attr);
        _.merge(attr, template); 
      }
    }
  };
};
