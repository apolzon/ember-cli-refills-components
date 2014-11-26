`import Ember from 'ember'`

RefillsAccordionComponent = Ember.Component.extend
  didInsertElement: ->
    @$(".js-accordion-trigger").on "click", ->
      $(this).parent().find('.submenu').slideToggle('fast')
      $(this).parent().toggleClass('is-expanded')

`export default RefillsAccordionComponent`
