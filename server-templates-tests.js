// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by server-templates.js.
import { ServerTemplate } from "meteor/felixble:server-templates";


Tinytest.add('server-templates - compile and render template strings', function (test) {
  let date = new Date();
  let content = "Hallo {{name}}, time: {{date}}";
  let data = {
    name: "4Minitz",
    date: function() { return date }
  };

  let result = ServerTemplate.render(content, data);

  let expected = "Hallo " + data.name + ", time: " + date;
  test.equal(result, expected);
});

Tinytest.add('server-templates - compile and render template strings with helpers', function (test) {
    let content = "Hallo {{name}}, sum: {{calcSum}}";
    let data = {
        name: "4Minitz",
        value1: 3,
        value2: 5
    };

    let helpers = {
        calcSum: function() {
            return this.value1 + this.value2;
        }
    };

    let result = ServerTemplate.render(content, data, helpers);

    let expected = "Hallo " + data.name + ", sum: " + 8;
    test.equal(result, expected);
});
