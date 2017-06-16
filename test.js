/**
 * Created by Sayed on 15-06-2017.
 */
var test = require('./index');
test.html.load('welcome.html', {
    user :{
        name: 'Amanda Waller'
    }
});
test.css.add("div{border: 1px solid green;}");
var template = test.css.add('./test/style.css');
var fs = require('fs');
fs.writeFile('./test/mail.html', template, function (err, result) {
    err ?console.log('Could not write template to file') :console.log('Added updated template to file!');
});