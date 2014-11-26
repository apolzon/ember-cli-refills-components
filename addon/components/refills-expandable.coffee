`import Ember from 'ember'`

RefillsExpandableComponent = Ember.Component.extend
  didInsertElement: ->
    @$(".expander-trigger").click ->
      $(this).toggleClass("expander-hidden")

`export default RefillsExpandableComponent`
