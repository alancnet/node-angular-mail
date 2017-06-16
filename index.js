/**
 * Created by Sayed on 15-06-2017.
 * This file will be invoked when someone loads the plugin
 */
var htmlTemplate = require('angular-template');
var juice = require('juice');
var fs = require('fs');

var defTemplate = '<div></div>';
module.exports = {
    html: {
        options: {
            prefix: 'ng',
            //extension: 'html',//not native to angular-template
            includeDirs: [__dirname+'/mails/']
        },
        setOptions: function (options) {
            this.options = options;
        },
        load: function (html, data, options) {
            data = data || {};
            options = options || this.options;
            defTemplate = htmlTemplate(html, data, options);
            return defTemplate;
        }
    },
    //using juice: https://github.com/Automattic/juice
    css: {
        options: {
        },
        config: function (options) {
            this.options = options;
        },
        add: function (css, html) {
            html = html || defTemplate;

            if(css.toString().match(/\.css$/i)) return this.addCssFile(css, html);

            css = css.indexOf('<style>')>=0 ?css :'<style>'+css+'</style>';
            var result = juice(css+''+html);
            defTemplate = result;
            return result;
        },
        addCssFile: function (filePath, html) {
            console.log('adding css from file:', filePath);
            var css = fs.readFileSync(filePath).toString();
            return this.add(css, html);
        },
        document: function (cheerioDoc, options) {
            options = options || this.options;
            defTemplate = juice.juiceResources(cheerioDoc, options);
            return defTemplate;
        }
    }
};