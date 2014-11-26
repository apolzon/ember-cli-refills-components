`import Ember from 'ember'`

RefillsAccordionTabsComponent = Ember.Component.extend
  didInsertElement: ->
    if @get("minimal")
      tabSelector = ".accordion-tabs-minimal"
    else
      tabSelector = ".accordion-tabs"
    @$(tabSelector).each (index) ->
      $(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show()

    @$(tabSelector).on "click", "li > a", ->
      if !$(this).hasClass('is-active')
        accordionTabs = $(this).closest(tabSelector)
        accordionTabs.find(".is-open").removeClass("is-open").hide()

        $(this).next().toggleClass("is-open").toggle()
        accordionTabs.find(".is-active").removeClass("is-active")
        $(this).addClass("is-active")

`export default RefillsAccordionTabsComponent`
