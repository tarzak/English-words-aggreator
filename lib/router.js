Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
  if (Meteor.userId()) {
    this.render('test', {
      data: function () {

        return {a: 1};
      }
    });
  }
  else {
    this.render('greetings', {
      data: function () {
        var data = {}
          ;
          
        data.title = "greetings";
        
        return data;
      }
    });
  }
});