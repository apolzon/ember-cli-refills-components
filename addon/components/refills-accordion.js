import Ember from 'ember';

RefillsAccordionComponent = Ember.Component.extend({
  didInsertElement: function() {
    this.$(".js-accordion-trigger").on("click", function() {
      $(this).parent().find('.submenu').slideToggle('fast');
      $(this).parent().toggleClass('is-expanded');
    });
  }
});

export default RefillsAccordionComponent;
