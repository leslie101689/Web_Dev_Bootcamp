// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  // name: "Apple",
  rating: 34,
  review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Decent fruit."
})

mango.save();

Person.updateOne({name:"John"}, {favouriteFruit: mango}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully update the document.");
  }
});

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
//
// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too Sour for me"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfuly saved all the fruits to fruitsDB");
//   }
// });


Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

Fruit.updateOne({_id: "5ff63f76fb9e3722b8bd66a5"}, {name: "Peach"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully update the document.");
  }
});

Person.deleteOne({_id: "5ff63f76fb9e3722b8bd66a2"}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the document.");
  }
});
