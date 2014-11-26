import Ember from 'ember';

RefillsVerticalTabsComponent = Ember.Component.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce("afterRender", this, function() {
      component = this;

      this.get("childViews.firstObject").$(".js-vertical-tab-content").show();
      this.$(".vertical-tabs a[rel='" + this.get("childViews.firstObject.elementId") + "']").addClass("is-active");

      # if in tab mode (normal screens)
      this.$(".js-vertical-tab").click(function() {
        component.$(".js-vertical-tab-content").hide();
        activeTab = $(this).attr("rel");
        component.$("#" + activeTab + ".js-vertical-tab-content").show();

        component.$(".js-vertical-tab").removeClass("is-active");
        $(this).addClass("is-active");

        component.$(".js-vertical-tab-accordion-heading").removeClass("is-active");
        component.$(".js-vertical-tab-accordion-heading[rel^='" + activeTab + "']").addClass("is-active");
      });
    });
  }
});

export default RefillsVerticalTabsComponent;
