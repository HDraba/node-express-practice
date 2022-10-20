const fs = require('fs');
const path = require('path');

const dataPath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'users.json'
);

const getUsersFromFile = (cb) => {
  fs.readFile(dataPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  save() {
    this.id = Math.random().toString();
    getUsersFromFile((users) => {
      users.push(this);
      fs.writeFile(dataPath, JSON.stringify(users), (err) => {
        console.log('Error: ', err);
      });
    });
  }

  static fetchAll(cb) {
    getUsersFromFile(cb);
  }

  static findById(id, cb) {
    getUsersFromFile(users => {
      console.log();
      const user = users.find(u => u.id === id);  
      cb(user);
    });
  }
};
