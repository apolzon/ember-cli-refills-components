import Ember from 'ember';

RefillsDropdownComponent = Ember.Component.extend({
  didInsertElement: function() {
    component = this;
    component.$(".dropdown-button").click(function() {
      component.$(".dropdown-menu").toggleClass("show-menu");
    });
  }
});

export default RefillsDropdownComponent;
