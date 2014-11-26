/* globals jQuery */
import Ember from 'ember';

var RefillsAccordionTabsComponent = Ember.Component.extend({
  didInsertElement: function() {
    var tabSelector;
    if (this.get("minimal")) {
      tabSelector = ".accordion-tabs-minimal";
    }
    else {
      tabSelector = ".accordion-tabs";
    }
    this.$(tabSelector).each(function() {
      jQuery(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show();
    });

    this.$(tabSelector).on("click", "li > a", function() {
      if (!jQuery(this).hasClass('is-active')) {
        var accordionTabs = jQuery(this).closest(tabSelector);
        accordionTabs.find(".is-open").removeClass("is-open").hide();

        jQuery(this).next().toggleClass("is-open").toggle();
        accordionTabs.find(".is-active").removeClass("is-active");
        jQuery(this).addClass("is-active");
      }
    });
  }
});

export default RefillsAccordionTabsComponent;
