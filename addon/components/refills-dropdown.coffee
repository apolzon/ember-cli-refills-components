`import Ember from 'ember'`

RefillsDropdownComponent = Ember.Component.extend
  didInsertElement: ->
    component = @
    @$(".dropdown-button").click ->
      component.$(".dropdown-menu").toggleClass("show-menu")

`export default RefillsDropdownComponent`
