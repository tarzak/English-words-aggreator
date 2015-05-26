Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('greetings', {
    data: function () {
      var data = {}
        ;
        
      data.title = "greetings";
      
      return data;
    }
  });
});