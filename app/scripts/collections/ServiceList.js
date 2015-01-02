/*global Service, Backbone*/

Service.Collections = Service.Collections || {};

(function () {
    'use strict';

    Service.Collections.ServiceList = Backbone.Collection.extend({

        model: Service.Models.ServiceList

    });

})();
