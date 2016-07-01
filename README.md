[![Build Status](https://travis-ci.org/felixble/meteor-server-templates.svg?branch=master)](https://travis-ci.org/felixble/meteor-server-templates)

# Server Template engine for meteor

Simple API to use the meteor blaze engine server side.

## Usage

First import the ServerTemplate module. Then you can use its render function by passing the template as a string together with with the data as parameters for this function. You can also pass helper functions as a third parameter.

~~~js
import { ServerTemplate } from 'meteor/felixble:server-templates'

let renderedHtml = ServerTemplate.render(
    "Hallo {{name}}, sum: {{add 3 5}}",                 /* Template */
    {name: "felix"},                                    /* data object */
    {add: function(val1, val2) { return val1 + val2 }}  /* object with helper functions */
);

console.log(renderedHtml); /* Output: Hello felix, sum 8 */
~~~

### Loading the template from a file

Meteor provides the global function Assets.getText(path) which loads a text file from the private folder and returns its content as a string. So you can store your templates under the private folder as simple html files and load them with the Assets.getText() function.
