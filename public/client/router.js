Shortly.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  },

  //LOGIN will create a GET request to authenticate 
  //username and password to database
  
  //SIGNUP will create a POST request to add 
  // username and password to database

  routes: {
    '': 'index',
    'create': 'create',
    // 'login/:id': 'login',
    // 'signup/:id': 'signup'
  },

  swapView: function(view) {
    this.$el.html(view.render().el);
  },

  index: function() {
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });
    this.swapView(linksView);
  },

  create: function() {
    this.swapView(new Shortly.createLinkView());
  },

  // login: function() {
  //   //this.
  // },

  // signup: function() {
  //   //this.
  // }
});
