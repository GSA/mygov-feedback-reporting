window.Application =
  Models: {}
  Collections: {}
  Views: {}
  Templates: {}
  backend: "http://staging.discovery.my.usa.gov"

#page
class Application.Models.Page extends Backbone.Model
  url: ->
    Application.backend + "/pages/" + @id
    
class Application.Collections.Pages extends Backbone.Collection
  model: Application.Models.Page
  url: ->
    Application.backend + "/pages"

#domain
class Application.Models.Domain extends Backbone.Model
  url: ->
    Application.backend + "/domains/" + @id

class Application.Collections.Domains extends Backbone.Collection
  model: Application.Models.Domain
  query: "gov."
  
  url: ->
    Application.backend + "/domains" + "?q=" + @query
  
  parse: (data) ->
    return unless data?
    _.map data, (domain) ->
      pages = new Application.Collections.Pages
      _.each domain.pages, (page) ->
        pages.add new Application.Models.Page(page)
      domain.pages = pages
      domain
    data

#views
class Application.Views.Home extends Backbone.View
  
  el: "#content"
  render: ->
    @$el.html JST.home()

class Application.Views.Page extends Backbone.View

class Application.Views.Pages extends Backbone.View

class Application.Views.Domain extends Backbone.View

class Application.Views.Domains extends Backbone.View
  el: "#content"
  render: =>
    @$el.html JST.domains domains: @collection
    
#router
class Router extends Backbone.Router

  routes:
    "": "home"
    "domain/:query": "query"  
    
  home: ->
    view = new Application.Views.Home()
    view.render()
     
  query: (query) ->
    Application.domains = new Application.Collections.Domains()
    Application.domains.query = query
    Application.domains.fetch success: ->
      view = new Application.Views.Domains collection: Application.domains
      view.render()
    
Application.router = new Router()
Backbone.history.start()