import Ember from 'ember';

RefillsDropdownItemComponent = Ember.Component.extend({
  tagName: "li",
  didInsertElement: function() {
    component = this;
    component.$().click(function() {
      component.get("parentView").$(".dropdown-button").html(component.get("display_name"));
      component.get("parentView").$(".dropdown-menu").removeClass("show-menu");
    });
  }
});

export default RefillsDropdownItemComponent;
