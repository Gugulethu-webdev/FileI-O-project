let fs = require("fs");
let http = require("http");
class Visitor {
  constructor(name, age, date, time, comments, assistant) {
    this.name = name;
    this.age = age;
    this.date = date;
    this.time = time;
    this.comments = comments;
    this.assistant = assistant;
  }
  save() {
    let Name = this.name.replace(" ", "_").toLowerCase();
    fs.writeFile(`visitor_${Name}.json`, JSON.stringify(this, null, 4), err => {
      if (err) {
        console.log(err);
      }
    });
  }

  async load(fullName) {
    let mention = fullName.replace(" ", "_").toLowerCase();
    await fs.readFile(`visitor_${mention}.json`, "UTF8", (err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
    });
  }
}

module.exports = { Visitor };
