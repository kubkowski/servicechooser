/*global Service, Backbone*/

Service.Models = Service.Models || {};

(function () {
    'use strict';

    Service.Models.Service = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            title: 'My Service',
            price: 100,
            checked: false
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        toggle: function() {
            this.set('checked', !this.get('checked'));
        }
    });

})();
