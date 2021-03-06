import { SpacebarsCompiler } from 'meteor/spacebars-compiler'
import { Blaze } from 'meteor/blaze'


export class ServerTemplate {

    static render(content, data, helpers) {
        if (!data) {
            data = {};
        }

        var template = new Blaze.Template(Random.id(), function () {
            var view = this;
            return eval(SpacebarsCompiler.compile(content))();
        });

        if (helpers) {
            template.helpers(helpers);
        }

        return Blaze.toHTMLWithData(template, data);
    }

}