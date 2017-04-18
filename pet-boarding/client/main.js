import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Hosts } from '../imports/api/task.js'
import { Session } from 'meteor/session'
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
        var info = $('[name=info]').val();
        var name = $('[name=name]').val();
        var phone = $('[name=phone]').val();
        var city = $('[name=location]').val();
        var type = $('[name=type]').val();
        var price = $('[name=price]').val();
        Hosts.insert({
                    name: name,
                    phone: phone,
                    city: city,
                    location: city,
                    types: type,
                    price: price,
                    info: info
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
  }
});

Template.mainpage.events({
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
      Session.set('city',city);
      console.log(Session.get('type'));
      type = Session.get('type');
      console.log('city has '+Hosts.find({city:city, types:type}).count());
      return Hosts.find({city: city,types:type});
  },
  "change #category-select": function (event, template) {
       var category = $(event.currentTarget).val();
       Session.set('type',category);
       console.log("animal: "+Session.get('type'));
   }
});

Template.navigation.helpers({
    categories: function(){
        return ["Dog", "Cat", "Rabbit", "Caged Critter"]
     },
     item: function(){
       return Hosts.find({city: Session.get('city'),types: Session.get('type')});
     }
});
