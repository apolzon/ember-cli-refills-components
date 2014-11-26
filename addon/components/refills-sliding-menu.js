/* globals jQuery */
import Ember from 'ember';

var RefillsSlidingMenuComponent = Ember.Component.extend({
  didInsertElement: function() {
    var component = this;
    component.$(".js-menu-trigger").on("click touchstart", function() {
      component.$(".js-menu").toggleClass("is-visible");
      component.$(".js-menu-screen").toggleClass("is-visible");
    });

    jQuery(".js-menu-screen").on("click touchstart", function() {
      component.$(".js-menu").toggleClass("is-visible");
      component.$(".js-menu-screen").toggleClass("is-visible");
    });
  }
});

export default RefillsSlidingMenuComponent;
