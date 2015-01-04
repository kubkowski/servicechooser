/*global Service, Backbone, JST*/

Service.Views = Service.Views || {};

(function () {
    'use strict';

    Service.Views.ServiceView = Backbone.View.extend({

        template: JST['app/scripts/templates/serviceView.ejs'],

        tagName: 'li',

        id: '',

        className: '',

        events: {
            'click': 'toggleService'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
            this.$('input').prop('checked', this.model.get('checked'));
            return this;
        },

        toggleSevice: function () {
            this.model.toggle();
        }

    });

})();
