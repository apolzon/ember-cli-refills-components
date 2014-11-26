import Ember from 'ember';

RefillsAccordionTabsComponent = Ember.Component.extend({
  didInsertElement: function() {
    if (this.get("minimal")) {
      tabSelector = ".accordion-tabs-minimal";
    }
    else {
      tabSelector = ".accordion-tabs";
    }
    this.$(tabSelector).each(function(index) {
      $(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show();
    });

    this.$(tabSelector).on("click", "li > a", function() {
      if (!$(this).hasClass('is-active')) {
        accordionTabs = $(this).closest(tabSelector);
        accordionTabs.find(".is-open").removeClass("is-open").hide();

        $(this).next().toggleClass("is-open").toggle();
        accordionTabs.find(".is-active").removeClass("is-active");
        $(this).addClass("is-active");
      }
    });
});

export default RefillsAccordionTabsComponent;
