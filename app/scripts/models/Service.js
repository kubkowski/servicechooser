/*global Service, Backbone*/

Service.Models = Service.Models || {};

(function () {
    'use strict';

    Service.Models.Service = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
