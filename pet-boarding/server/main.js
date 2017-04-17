import { Meteor } from 'meteor/meteor';
import { Hosts } from '../imports/api/task.js';

Meteor.startup(() => {
  // code to run on server at startup
  //ar Hosts = new Meteor.Collection("Hosts");

  if(Hosts.find().count() == 0) {
      console.log("Insert new hosts");
      Hosts.insert( { name: "Atlanta Pet Resort", city: "Atlanta", location: "1361 Bells Ferry Rd, Marietta GA 30066", types:"Cat, Dog", price: {}, web:"http://www.atlantapetresort.com/" } );
      Hosts.insert( { name: "The Rabbit Center", city: "Atlanta", location: "2280 Shallowford Rd, Marietta, GA 30066", types:"Rabbit", price: [17], web:"http://houserabbitga.com/"} );
      Hosts.insert( { name: "The Pet Resort", city: "Atlanta", location: "4343 Dunwoody Park, Suite G, Dunwoody, GA 30338", types:"Cat, Dog", price:[22, 37], web:"http://www.thepetresorts.com/dunwoody/#"} );
      Hosts.insert( { name: "Wag Atlanta", city: "Atlanta", location: "3872 College Street in College Park, Georgia", types:"Cat, Dog", price: [24, 35],web:"http://www.wagatlanta.com/"} );
      Hosts.insert( { name: "Animal House", city: "Atlanta", location: "516 Ponce De Leon Ave NE, Atlanta, GA 30308", types:"Cat, Dog", price: [29, 39], web:"http://animalhousepethotel.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Cat, Dog, Rabbit, Caged Critter", price: [15,20,10,10], web:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "Town & Country Veterinary Clinic", city: "Atlanta", location: "1343 Gresham Road, Marietta, GA 30062", types:"Cat, Dog, Caged Critter", price: [11, 9, 12], web:"https://drgoodvet.com/"} );
  }

});
Meteor.users.find().fetch();
