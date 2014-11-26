import Ember from 'ember';

RefillsExpandableComponent = Ember.Component.extend({
  didInsertElement: function() {
    this.$(".expander-trigger").click(function() {
      $(this).toggleClass("expander-hidden");
    });
  }
});

export default RefillsExpandableComponent;
