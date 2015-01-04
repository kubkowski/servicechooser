/*global Service, Backbone*/

Service.Collections = Service.Collections || {};

(function () {
    'use strict';

    Service.Collections.ServiceList = Backbone.Collection.extend({

        model: Service.Models.Service,

        getChecked: function() {
            return this.where({'checked': true});
        }

    });

})();

var services = new Service.Collections.ServiceList([
    new Service.Models.Service({ title: 'web development', price: 200}),
    new Service.Models.Service({ title: 'web design', price: 250}),
    new Service.Models.Service({ title: 'photography', price: 100}),
    new Service.Models.Service({ title: 'coffee drinking', price: 10})
]);
