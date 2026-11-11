/* global db, ObjectId, use */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('taskflow-db');

// db.users.find({});

db.users.find({ isActive: false }, { name: 1, email: 1, _id: 0 });

const eva = db.users.findOne({ email: 'eva@email.com' });

// const idEva = eva._id;

console.log(eva);

// const evaPorID = db.users.findOne({ _id: idEva });

db.users.updateOne({
  _id: ObjectId('6aebd6beb285d36624cafc1b'),
}, {
  $set: {
    name: 'Luis Ramirez',
    isActive: false,
  },
});

db.users.deleteOne({ email: 'eva@email.com' });
