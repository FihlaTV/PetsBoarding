import { Meteor } from 'meteor/meteor';
import { Hosts } from '../imports/api/task.js';
import { Ratings } from '../imports/api/task.js'

Meteor.startup(() => {
  // code to run on server at startup
  //ar Hosts = new Meteor.Collection("Hosts");
  Hosts.remove({});
  if(Hosts.find().count() == 0) {
      console.log("Insert new hosts");
      Hosts.insert( { name: "Atlanta Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "1361 Bells Ferry Rd, Marietta GA 30066", types:"Cat", price:15, phone: "(770)421-9001", info:"http://www.atlantapetresort.com/" } );
      Hosts.insert( { name: "Atlanta Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "1361 Bells Ferry Rd, Marietta GA 30066", types:"Dog", price:20, phone: "(770) 421-9001", info:"http://www.atlantapetresort.com/" } );
      Hosts.insert( { name: "The Rabbit Center", score: 0, rating: 0, count: 0, city: "Atlanta", location: "2280 Shallowford Rd, Marietta, GA 30066", types:"Rabbit", price:17, phone: "(678)653-7175", info:"http://houserabbitga.com/"} );
      Hosts.insert( { name: "The Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "4343 Dunwoody Park, Suite G, Dunwoody, GA 30338", types:"Cat", price:22, phone: "(404)596-4333", info:"http://www.thepetresorts.com/dunwoody/"} );
      Hosts.insert( { name: "The Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "4343 Dunwoody Park, Suite G, Dunwoody, GA 30338", types:"Dog", price:37, phone: "(404)596-4333", info:"http://www.thepetresorts.com/dunwoody/"} );
      Hosts.insert( { name: "Wag Atlanta", score: 0, rating: 0, count: 0, city: "Atlanta", location: "3872 College Street in College Park, Georgia", types:"Cat", price:24,phone: "(404)762-5050", info:"http://www.wagatlanta.com/"} );
      Hosts.insert( { name: "Wag Atlanta", score: 0, rating: 0, count: 0, city: "Atlanta", location: "3872 College Street in College Park, Georgia", types:"Dog", price:35,phone: "(404)762-5050", info:"http://www.wagatlanta.com/"} );
      Hosts.insert( { name: "Animal House", score: 0, rating: 0, count: 0, city: "Atlanta", location: "516 Ponce De Leon Ave NE, Atlanta, GA 30308", types:"Cat", price:29,phone: "(404)879-0910",  info:"http://animalhousepethotel.com/"} );
      Hosts.insert( { name: "Animal House", score: 0, rating: 0, count: 0, city: "Atlanta", location: "516 Ponce De Leon Ave NE, Atlanta, GA 30308", types:"Dog", price:39, phone: "(404)879-0910", info:"http://animalhousepethotel.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Cat", price:15, phone: "(770)486-0209", info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Dog", price:20, phone: "(770)486-0209", info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Rabbit", price:10, phone: "(770)486-0209", info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "The Fur Pet Resort", score: 0, rating: 0, count: 0, city: "Atlanta", location: "203 Fulton Court, Peachtree City, GA 30269", types:"Caged Critter", price:10, phone: "(770)486-0209", info:"http://thefurpetresort.com/"} );
      Hosts.insert( { name: "Town & Country Veterinary Clinic", rating: 0, count: 0, city: "Atlanta", location: "1343 Gresham Road, Marietta, GA 30062", types:"Cat", price:11, phone: "(770)971-1556", info:"https://drgoodvet.com/"} );
      Hosts.insert( { name: "Town & Country Veterinary Clinic", rating: 0, count: 0, city: "Atlanta", location: "1343 Gresham Road, Marietta, GA 30062", types:"Dog", price:9, phone: "(770)971-1556", info:"https://drgoodvet.com/"} );
      Hosts.insert( { name: "Town & Country Veterinary Clinic", rating: 0, count: 0, city: "Atlanta", location: "1343 Gresham Road, Marietta, GA 30062", types:"Caged Critter", price:12, phone: "(770)971-1556", info:"https://drgoodvet.com/"} );
  }

});
Meteor.users.find().fetch();
