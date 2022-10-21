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
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  save() {
    getUsersFromFile((users) => {
      if (this.id) {
        const existingUserIndex = users.findIndex(
          (user) => user.id === this.id
        );

        const updatedUsers = [...users];
        updatedUsers[existingUserIndex] = this;
        // console.log(this);
        // console.log(updatedUsers);
        fs.writeFile(dataPath, JSON.stringify(updatedUsers), (err) =>
          console.log(err)
        );
      } else {
        // console.log('here 2');
        this.id = Math.random().toString();
        users.push(this);
        fs.writeFile(dataPath, JSON.stringify(users), (err) => {
          console.log('Error: ', err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getUsersFromFile(cb);
  }

  static findById(id, cb) {
    getUsersFromFile((users) => {
      console.log();
      const user = users.find((u) => u.id === id);
      cb(user);
    });
  }
};
