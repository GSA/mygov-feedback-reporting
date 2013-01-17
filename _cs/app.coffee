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
  
  initialize: ->
    @set "comments", new Application.Collections.Comments()
    @get("comments").page_id = @id
    
class Application.Collections.Pages extends Backbone.Collection
  model: Application.Models.Page
  url: ->
    Application.backend + "/pages"

#domain
class Application.Models.Domain extends Backbone.Model
  url: ->
    Application.backend + "/domains/" + @id + ".json"

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

#comments

class Application.Models.Comment extends Backbone.Model

class Application.Collections.Comments extends Backbone.Collection
  model: Application.Models.Comment
  page_id: null
  
  url: ->
    Application.backend + "/pages/" + @page_id + "/comments" 

#views
class Application.Views.Home extends Backbone.View
  
  el: "#content"
  render: ->
    @$el.html JST.home()
    
  events:
    "submit form": "query"
    
  query: (e) ->
    e.preventDefault()
    Application.router.navigate "domains/" + $("#query").val(), true
    false
    
class Application.Views.Page extends Backbone.View
  el: "#content"
  
  render: =>
    @$el.html JST.page page: @model.toJSON()
    
  initialize: ->
    @model.on "change", @render
    @model.get("comments").on "reset", @renderComments
    
  renderComments: =>
    jQuery("#commentsDiv").html JST.comments comments: @model.get("comments").toJSON()
    
class Application.Views.Pages extends Backbone.View

class Application.Views.Domain extends Backbone.View

  el: "#content"

  render: =>
    @$el.html JST.domain domain: @model.toJSON()

  initialize: ->
    @model.on "change", @render
    
class Application.Views.Domains extends Backbone.View
  el: "#content"

  render: =>
    @$el.html JST.domains domains: @collection.toJSON(), query: Application.domains.query
    
#router
class Router extends Backbone.Router

  initialize: ->
    this.route(/^domains\/([0-9]+)$/, "domain");

  routes:
    "": "home"
    "domains/:query": "query"
    "pages/:page": "page"
    
  home: ->
    view = new Application.Views.Home()
    view.render()
     
  query: (query) ->
    Application.domains = new Application.Collections.Domains()
    Application.domains.query = query
    Application.domains.fetch success: ->
      view = new Application.Views.Domains collection: Application.domains
      view.render()
  
  page: (id) ->
    page = new Application.Models.Page id: id
    page.fetch success: ->
      page.get("comments").fetch()
    view = new Application.Views.Page model: page
    
  domain: (id) ->
    domain = new Application.Models.Domain id: id
    domain.fetch()
    view = new Application.Views.Domain model: domain
    
    
Application.router = new Router()
Backbone.history.start base: "/mygov-feedback-reporting/"