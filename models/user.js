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
  id = Math.random();
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  save() {
    fs.readFile(dataPath, (err, fileContent) => {
      let users = [];
      if (!err) {
        users = JSON.parse(fileContent);
      }
      users.push(this); // pushing this instance of the class
      fs.writeFile(dataPath, JSON.stringify(users), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const dataPath = path.join(
      path.dirname(require.main.filename),
      'data',
      'users.json'
    );
    fs.readFile(dataPath, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }

  static findById(id, cb) {
    getUsersFromFile((users) => {
      const user = users.find((p) => p.id === id);
      console.log(users);
      // cb(user);
    });
  }
};
