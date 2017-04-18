import { Meteor } from 'meteor/meteor';
import { Hosts } from '../imports/api/task.js';

Meteor.startup(() => {
  // code to run on server at startup
  //ar Hosts = new Meteor.Collection("Hosts");
  Hosts.remove({});
  if(Hosts.find().count() == 0) {
      console.log("Insert new hosts");
      Hosts.insert( { name: "Atlanta Pet Resort", city: "Atlanta", location: "1361 Bells Ferry Rd, Marietta GA 30066", types:"Cat", price:15, info:"http://www.atlantapetresort.com/" } );
      Hosts.insert( { name: "Atlanta Pet Resort", city: "Atlanta", location: "1361 Bells Ferry Rd, Marietta GA 30066", types:"Dog", price:20, info:"http://www.atlantapetresort.com/" } );
      Hosts.insert( { name: "The Rabbit Center", city: "Atlanta", location: "2280 Shallowford Rd, Marietta, GA 30066", types:"Rabbit", price:17, info:"http://houserabbitga.com/"} );
      Hosts.insert( { name: "The Pet Resort", city: "Atlanta", location: "4343 Dunwoody Park, Suite G, Dunwoody, GA 30338", types:"Cat", price:22, info:"http://www.thepetresorts.com/dunwoody/"} );
      Hosts.insert( { name: "The Pet Resort", city: "Atlanta", location: "4343 Dunwoody Park, Suite G, Dunwoody, GA 30338", types:"Dog", price:37, info:"http://www.thepetresorts.com/dunwoody/"} );
      Hosts.insert( { name: "Wag Atlanta", city: "Atlanta", location: "3872 College Street in College Park, Georgia", types:"Cat", price:24,info:"http://www.wagatlanta.com/"} );
      Hosts.insert( { name: "Wag Atlanta", city: "Atlanta", location: "3872 College Street in College Park, Georgia", types:"Dog", price:35,info:"http://www.wagatlanta.com/"} );
      Hosts.insert( { name: "Animal House", city: "Atlanta", location: "516 Ponce De Leon Ave NE, Atlanta, GA 30308", types:"Cat", price:29, info:"http://animalhousepethotel.com/"} );
      Hosts.insert( { name: "Animal House", city: "Atlanta", location: "516 Ponce De Leon Ave NE, Atlanta, GA 30308", types:"Dog", price:39, info:"http://animalhousepethotel.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Cat", price:15, info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Dog", price:20, info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Rabbit", price:10, info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Caged Critter", price:10, info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "Town & Country Veterinary Clinic", city: "Atlanta", location: "1343 Gresham Road, Marietta, GA 30062", types:"Cat", price:11, info:"https://drgoodvet.com/"} );
      Hosts.insert( { name: "Town & Country Veterinary Clinic", city: "Atlanta", location: "1343 Gresham Road, Marietta, GA 30062", types:"Dog", price:9, info:"https://drgoodvet.com/"} );
      Hosts.insert( { name: "Town & Country Veterinary Clinic", city: "Atlanta", location: "1343 Gresham Road, Marietta, GA 30062", types:"Caged Critter", price:12, info:"https://drgoodvet.com/"} );
  }

});
Meteor.users.find().fetch();
