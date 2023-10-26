const mongoose = require("mongoose");

const arguments = process.argv.length;

if (arguments != 3 && arguments != 5) {
  console.log(
    `Missing argument: Usage -> node mongo.js yourPassword personName personNumber
              or: Usage -> node mongo.js yourPassword`
  );
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://rickeymhrjn:${password}@cluster0.itm2wzk.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (arguments == 3) {
  Person.find({}).then((results) => {
    results.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
} else {
  const person = new Person({
    name,
    number,
  });

  person.save().then((results) => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}
