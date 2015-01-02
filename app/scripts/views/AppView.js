/*global Service, Backbone, JST*/

Service.Views = Service.Views || {};

(function () {
    'use strict';

    Service.Views.AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/AppView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
