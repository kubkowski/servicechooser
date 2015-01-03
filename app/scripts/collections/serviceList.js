/*global Service, Backbone*/

Service.Collections = Service.Collections || {};

(function () {
    'use strict';

    Service.Collections.ServiceList = Backbone.Collection.extend({

        model: Service.Models.Service

        getChecked: function() {
            return this.where({'checked': true});
        }

    });

})();

var services = new ServiceList([
    new Service({ title: 'web development', price: 200}),
    new Service({ title: 'web design', price: 250}),
    new Service({ title: 'photography', price: 100}),
    new Service({ title: 'coffee drinking', price: 10})
]);
