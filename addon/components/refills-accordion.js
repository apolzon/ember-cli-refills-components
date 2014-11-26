/* globals jQuery */
import Ember from 'ember';

var RefillsAccordionComponent = Ember.Component.extend({
  didInsertElement: function() {
    this.$(".js-accordion-trigger").on("click", function() {
      jQuery(this).parent().find('.submenu').slideToggle('fast');
      jQuery(this).parent().toggleClass('is-expanded');
    });
  }
});

export default RefillsAccordionComponent;
