import Ember from 'ember';

var RefillsDropdownComponent = Ember.Component.extend({
  didInsertElement: function() {
    var component = this;
    component.$(".dropdown-button").click(function() {
      component.$(".dropdown-menu").toggleClass("show-menu");
    });
  }
});

export default RefillsDropdownComponent;
