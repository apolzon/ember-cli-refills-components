/* globals jQuery */
import Ember from 'ember';

var RefillsExpandableComponent = Ember.Component.extend({
  didInsertElement: function() {
    this.$(".expander-trigger").click(function() {
      jQuery(this).toggleClass("expander-hidden");
    });
  }
});

export default RefillsExpandableComponent;
