import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Hosts } from '../imports/api/task.js'
import { Ratings } from '../imports/api/task.js'
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
Router.route('/comment', {
    name: 'comment',
    template: 'comment'
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
        var city = $('[name=city]').val();
        var type = $('[name=type]').val();
        var price = $('[name=price]').val();
        Hosts.insert({
                    name: name,
                    phone: phone,
                    city: city,
                    location: city,
                    score: 0,
                    rating: 0,
                    count: 0,
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
      score = Number(Session.get('score'));
      console.log('city has '+Hosts.find({city:city, types:type, score:score}).count());
      return Hosts.find({city: city,types:type,score:score});
  },
  "change #category-select": function (event, template) {
       var category = $(event.currentTarget).val();
       Session.set('type',category);
       console.log("animal: "+Session.get('type'));
   },
   "change #rating-select": function (event, template) {
        var score = $(event.currentTarget).val();
        Session.set('score',score);
    },
   'click .comment': function(event){
     //event.preventDefault();
     var host = event.currentTarget.getAttribute('value');
     Session.set('host',host);
     console.log('host is :' + host);
   }
});

Template.navigation.helpers({
    categories: function(){
        return ["Dog", "Cat", "Rabbit", "Caged Critter"]
     },
     scores: function(){
         return [0, 1, 2, 3, 4, 5];
      },
     item: function(){
       return Hosts.find({city: Session.get('city'),types: Session.get('type'),score: Number(Session.get('score'))});
     }
});

Template.comment.events({
  'submit form': function(event){
      event.preventDefault();
      var name = Session.get('host');
      console.log('name is : '+Session.get('host'));
      var rate = Session.get('rate');
      var comment = $('[name=textarea]').val();
      console.log('rate is : '+Session.get('rate'));
      if(Ratings.find({name:name}).count() == 0){
        Ratings.insert({
                    name: name,
                    rating: rate,
                    comment: comment
                  });
      }
      //Hosts.update({name : name},{$set:{rating: rate}});
      var id = Hosts.find({name:name}).fetch();
      var index;
      console.log(Ratings.find({name:name}).count()+" "+id.length);
      for(index = 0; index < id.length; index++){
        var temp_r = Number(id[index]['rating']);
        var temp_c = Number(id[index]['count'])+1.0;
        temp_r = Number(Session.get('rate'))+temp_r;
        var temp_s = temp_r/temp_c;
        Hosts.update({_id:id[index]['_id']},{$set:{rating: temp_r}});
        Hosts.update({_id:id[index]['_id']},{$set:{count: temp_c}});
        Hosts.update({_id:id[index]['_id']},{$set:{score: temp_s}});
      }

      console.log(Ratings.find({name:name}).count()+" "+id.length);
      Router.go('mainpage');
    // return Hosts.find({city: city,types:type});
  },
  "change #rating-select": function (event, template) {
       var rate = $(event.currentTarget).val();
       Session.set('rate',rate);
       console.log("animal: "+Session.get('rate'));
   }
});

Template.comment.helpers({
    scores: function(){
        return [1, 2, 3, 4, 5]
     },
     item: function(){
       return Hosts.find({city: Session.get('city'),types: Session.get('type')});
     }
});
