import Ember from 'ember';

RefillsCenteredNavigationComponent = Ember.Component.extend({
  didInsertElement: function() {
    menu = @$(".centered-navigation-menu");
    menuToggle = @$(".centered-navigation-menu-button");

    menuToggle.on("click", function() {
      menu.slideToggle(function() {
        if (menu.is(':hidden')) {
          menu.removeAttr('style')
        }
      });
    }
  }
});

export default RefillsCenteredNavigationComponent;
