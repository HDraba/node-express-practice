const fs = require('fs');
const path = require('path');

module.exports = class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  save() {
    const dataPath = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'users.json'
    );
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
};
