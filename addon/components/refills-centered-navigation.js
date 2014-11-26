import Ember from 'ember';

var RefillsCenteredNavigationComponent = Ember.Component.extend({
  didInsertElement: function() {
    var menu = this.$(".centered-navigation-menu");
    var menuToggle = this.$(".centered-navigation-menu-button");

    menuToggle.on("click", function() {
      menu.slideToggle(function() {
        if (menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });
  }
});

export default RefillsCenteredNavigationComponent;
