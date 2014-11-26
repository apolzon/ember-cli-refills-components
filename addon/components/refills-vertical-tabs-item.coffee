`import Ember from 'ember'`

RefillsVerticalTabsItemComponent = Ember.Component.extend
  didInsertElement: ->
    component = @

    tabLink = $("<a>").addClass("js-vertical-tab vertical-tab").html(@get("header")).attr("rel", @get("elementId"))
    @get("parentView").$(".vertical-tabs").append(tabLink)
    @$(".js-vertical-tab-content").hide()

    # if in accordion mode (small screens)
    @$(".js-vertical-tab-accordion-heading").click ->
      component.get("parentView").$(".js-vertical-tab-content").hide()
      component.$(".js-vertical-tab-content").show()

      component.get("parentView").$(".js-vertical-tab-accordion-heading").removeClass("is-active")
      $(this).addClass("is-active")

      component.get("parentView").$(".js-vertical-tab").removeClass("is-active")
      component.get("parentView").$(".js-vertical-tab[rel^='#{accordion_activeTab}']").addClass("is-active")

`export default RefillsVerticalTabsItemComponent`
