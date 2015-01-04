/*global Service, Backbone, JST*/

Service.Views = Service.Views || {};

(function () {
    'use strict';

    Service.Views.AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/appView.ejs'],

        el: $('#main'),

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.total = $('#total span');
            this.list = $('#services');
            this.listenTo(this.model, 'change', this.render);
            services.each(function (service) {
                var view = new Service.Views.ServiceView({model: service});
                this.list.append(view.render().el);
            }, this)
        },

        render: function () {
            var total = 0;
            _.each(services.getChecked(), function(elem){
                total += elem.get('price');
            });
            this.total.text('$'+total);
            return this;
        }

    });

})();
