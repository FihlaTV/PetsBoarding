Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('Home', {data: {title: 'My Title'}});
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/client/client.js');

// when you navigate to "/two" automatically render the template named "Two".
Router.route('/server/server.js');
