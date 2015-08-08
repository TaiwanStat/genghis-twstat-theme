var fs = require("fs");

module.exports= function (hbs) {
  var index = fs.readFileSync('./partials_tmp/index.html', 'utf8');
  hbs.registerPartial('index', index);
}
