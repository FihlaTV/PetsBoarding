import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Hosts, CareGiver } from '../imports/api/task.js'
var MongoClient = require('mongodb').MongoClient;
import './main.html';

Router.route('/register',{
  name: 'register',
  template: 'register'
});
Router.route('/login',{
  name: 'login',
  template: 'login'
});
Router.route('/', {
    name: 'mainpage',
    template: 'mainpage'
});
Router.route('/navigation', {
    name: 'navigation',
    template: 'navigation'
});
Router.route('/caregiver', {
    name: 'caregiver',
    template: 'caregiver'
});
Router.route('/result', {
    name: 'result',
    template: 'result'
});

/*MongoClient.connect('mongodb://user:user@ds161960.mlab.com:61960/cosmos', function(err, db) {
  if(err) throw err;

  db = database;

  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");
});*/

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
                    email: email,
                    password: password
                });
        Router.go('mainpage');
    }
});
Template.caregiver.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var name = $('[name=name]').val();
        var phone = $('[name=phone]').val();
        var location = $('[name=location]').val();
        var type = $('[name=type]').val();
        CareGiver.insert({
                    email: email,
                    name: name,
                    phone: phone,
                    location: location,
                    type: type
                });
        Router.go('mainpage');
    }
});
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
          if(error){
            console.log(error.reason);
          } else {
            Router.go("mainpage");
          }
        });
    }
});
Template.mainpage.onCreated(function mainOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.mainpage.helpers({
  find_hosts_num() {
    return Hosts.find().count();
  },
  get_hosts(){
    console.log(Hosts.find());
    return Hosts.find();
  },
});

Template.mainpage.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    console.log(Hosts.find().count());
  },
  'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      Router.go('login');
  }
});
Template.navigation.events({
  'submit form': function(event){
      event.preventDefault();
      var city = $('[name=city]').val();
      var types = $('[name=types]').val();
      Router.go('result');
      console.log("after router");
      return Hosts.find({city: city,types: types});
  }
});
