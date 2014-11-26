import Ember from 'ember';

RefillsSlidingMenuComponent = Ember.Component.extend({
  didInsertElement: function() {
    component = this;
    component.$(".js-menu-trigger").on("click touchstart", function() {
      component.$(".js-menu").toggleClass("is-visible");
      component.$(".js-menu-screen").toggleClass("is-visible");
    });

    $(".js-menu-screen").on("click touchstart", function() {
      component.$(".js-menu").toggleClass("is-visible");
      component.$(".js-menu-screen").toggleClass("is-visible");
    });
  }
});

export default RefillsSlidingMenuComponent;
