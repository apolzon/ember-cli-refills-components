`import Ember from 'ember'`

RefillsCenteredNavigationComponent = Ember.Component.extend
  didInsertElement: ->
    menu = @$(".centered-navigation-menu")
    menuToggle = @$(".centered-navigation-menu-button")

    menuToggle.on "click", ->
      menu.slideToggle ->
        if menu.is(':hidden')
          menu.removeAttr('style')

`export default RefillsCenteredNavigationComponent`
