# node-angular-mail

NodeJS module to create beautiful mail templates using angularJS syntax, using Juice to inject CSS directly inline or from a file.

I needed to send mails via my NodeJS server, but creating static mails for each required case was not the optimal solution. Being a Frontend developer, I really liked the concept of AngularJS templates and hence, I was looking for solutions. Since I couldn't find the exact solution that I was looking for, I figured, I can merge multiple solutions to get what I wanted!
So, here's node-angular-mail module, that requires angular-template module and juice module to create beautiful HTML mails with AngularJS templates, while allowing you to inject CSS, inline or from file.
Right now, it performs following functions:

  - Take a AngularJS HTML string or file path, along with data and return final composed HTML with data injected into the template
  - Inject CSS style into the generated template, through inline CSS passed as string or a CSS file path

### Installation

node-angular-mail requires [Node.js](https://nodejs.org/) v4+ to run. Also check the dependencies below (although, they're installed automatically when you install node-angular-mail)

Installing node-angular-mail should also install the dependencies, but just in case, you can also install dependencies separately as:

```
$ npm install angular-template --save
$ npm install juice --save
```
Then, install the module as
```
$ npm install node-angular-mail
```

### Usage
After having the module installed, you need to generate html template first before you can inject CSS. Alternatively, you can pass on html string while calling up the CSS function to inject style. See below examples:
```
var nodeNgMail = require('node-angular-mail');
//set html template from file mails/welcome.html
var template = nodeNgMail.html.load('welcome.html', {user: {name: 'Amanda Waller'}});

//add CSS into loaded template
template = nodeNgMail.css.add("div{border: 1px solid green;}");

//add CSS from css files into loaded template
template = nodeNgMail.css.add('./test/style.css');
//template has the html template with rendered data and injected styles

//you can write the updated template to a file, or you can just send it in mail
var fs = require('fs');
fs.writeFile('./test/mail.html', template, function (err, result) {
    err ?console.log('Could not write template to file') :console.log('Added updated template to file!');
});
````

### Dependencies

node-angular-mail requires following modules as dependency:
Please note that NONE of the commands of these modules are 

| Module | URL |
| ------ | ------ |
| angular-template | [https://github.com/allenhwkim/angular-template](https://github.com/allenhwkim/angular-template) |
| Juice | [https://github.com/Automattic/juice](https://github.com/Automattic/juice) |
Please note that NONE of the commands/functions of the above modules are supported directly by node-angular-mail module.

### Todos

 - Provide access to parent modules

License
----

MIT


**Free Software, Hell Yeah!**
