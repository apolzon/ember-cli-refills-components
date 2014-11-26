/* globals jQuery */
import Ember from 'ember';

var RefillsVerticalTabsItemComponent = Ember.Component.extend({
  didInsertElement: function() {
    var component = this;

    var tabLink = jQuery("<a>").addClass("js-vertical-tab vertical-tab").html(this.get("header")).attr("rel", this.get("elementId"));
    this.get("parentView").$(".vertical-tabs").append(tabLink);
    this.$(".js-vertical-tab-content").hide();

    // if in accordion mode (small screens)
    this.$(".js-vertical-tab-accordion-heading").click(function() {
      component.get("parentView").$(".js-vertical-tab-content").hide();
      component.$(".js-vertical-tab-content").show();

      component.get("parentView").$(".js-vertical-tab-accordion-heading").removeClass("is-active");
      jQuery(this).addClass("is-active");

      component.get("parentView").$(".js-vertical-tab").removeClass("is-active");
      component.get("parentView").$(".js-vertical-tab[rel^='#{accordion_activeTab}']").addClass("is-active");
    });
  }
});

export default RefillsVerticalTabsItemComponent;
