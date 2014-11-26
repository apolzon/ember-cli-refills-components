import Ember from 'ember';

RefillsVerticalTabsItemComponent = Ember.Component.extend({
  didInsertElement: function() {
    component = this;

    tabLink = $("<a>").addClass("js-vertical-tab vertical-tab").html(this.get("header")).attr("rel", this.get("elementId"));
    this.get("parentView").$(".vertical-tabs").append(tabLink);
    this.$(".js-vertical-tab-content").hide();

    # if in accordion mode (small screens)
    this.$(".js-vertical-tab-accordion-heading").click(function() {
      component.get("parentView").$(".js-vertical-tab-content").hide();
      component.$(".js-vertical-tab-content").show();

      component.get("parentView").$(".js-vertical-tab-accordion-heading").removeClass("is-active");
      $(this).addClass("is-active");

      component.get("parentView").$(".js-vertical-tab").removeClass("is-active");
      component.get("parentView").$(".js-vertical-tab[rel^='#{accordion_activeTab}']").addClass("is-active");
    });
  }
});

export default RefillsVerticalTabsItemComponent;
