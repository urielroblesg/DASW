/* global db, use */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('taskflow-db');

db.users.insertMany([
  {
    name: 'Luis',
    email: 'luis@email.com',
    createdAt: new Date(),
    isActive: true,
  },
  {
    name: 'Eva',
    email: 'eva@email.com',
    createdAt: new Date(),
    isActive: false,
  },
]);
