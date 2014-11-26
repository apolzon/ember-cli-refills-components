/* globals jQuery */
import Ember from 'ember';

var RefillsVerticalTabsComponent = Ember.Component.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce("afterRender", this, function() {
      var component = this;

      this.get("childViews.firstObject").$(".js-vertical-tab-content").show();
      this.$(".vertical-tabs a[rel='" + this.get("childViews.firstObject.elementId") + "']").addClass("is-active");

      // if in tab mode (normal screens)
      this.$(".js-vertical-tab").click(function() {
        component.$(".js-vertical-tab-content").hide();
        var activeTab = jQuery(this).attr("rel");
        component.$("#" + activeTab + ".js-vertical-tab-content").show();

        component.$(".js-vertical-tab").removeClass("is-active");
        jQuery(this).addClass("is-active");

        component.$(".js-vertical-tab-accordion-heading").removeClass("is-active");
        component.$(".js-vertical-tab-accordion-heading[rel^='" + activeTab + "']").addClass("is-active");
      });
    });
  }
});

export default RefillsVerticalTabsComponent;
