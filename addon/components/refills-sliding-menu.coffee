`import Ember from 'ember'`

RefillsSlidingMenuComponent = Ember.Component.extend
  didInsertElement: ->
    component = @
    @$(".js-menu-trigger").on "click touchstart", ->
      component.$(".js-menu").toggleClass("is-visible")
      component.$(".js-menu-screen").toggleClass("is-visible")

    $(".js-menu-screen").on "click touchstart", ->
      component.$(".js-menu").toggleClass("is-visible")
      component.$(".js-menu-screen").toggleClass("is-visible")


`export default RefillsSlidingMenuComponent`
