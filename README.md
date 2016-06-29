# Server Template engine for meteor

Simple API to use the meteor blaze engine on the server side.

## Usage

First import the ServerTemplate module. Then you can use its render method and pass the template as a string together
with the data as arguments.

---js
import { ServerTemplate } from 'meteor/felixble:server-templates'

let renderedHtml = ServerTemplate.render("Hallo {{name}}", {name: "felix"});
---