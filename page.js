var settings = require('./blog.json')
var lists = settings.posts;

var path = require('path');
var post_arr = [];

lists.forEach(function(p) {
  var date_reg = /(\d{4}\/\d{2}\/\d{2})\s+(\d{2}):(\d{2}):(\d{2})/g;
  var d = date_reg.exec(p.date)[1]
  post_arr.push({
    "item": p,
    "full_path": path.join('./opendata/post/', d, p.url_name + '.html')
  })
})


var posts = [{
  "layout": "./layouts/page.html",
  "filename": "./_web/about.html",
  "partials": ["./partials/head.js", "./partials/footer.js", "./partials/header.js", "./partials/javascripts.js"],
  "data": {
    "title": "關於我們",
    "content": "./about.md",
    "site": {
      "title": "用數據看台灣",
      "description": "生長在台灣的我們，很少從一個宏觀的角度看整個台灣的經濟、法律、交通、教育... ，而我們相信數據可以幫我們更了解我們身長在的這片土地上的一切。讓我們來用數據看台灣！",
      "email": "contact@taiwanstat.com",
      "logo": "/assets/images/taiwanstat_thumb.png",
      "cover": "/assets/images/taiwanstat_cover1.png",
      "name": "用數據看台灣團隊",
      "author": "用數據看台灣團隊",
      "author_image": "/assets/images/taiwanstat_thumb.png",
      "url": "http://taiwanstat.com",
      "facebook": {
        "url": "https://facebook.com/taiwanstat",
        "desc": "追蹤 Facebook 粉絲專業"
      }
    }
  }
},{
  "layout": "./layouts/page.html",
  "filename": "./_web/archive.html",
  "partials": ["./partials/head.js", "./partials/footer.js", "./partials/header.js", "./partials/javascripts.js"],
  "data": {
    "title": "所有專案",
    "content": "./archive.md",
    "site": {
      "title": "用數據看台灣",
      "description": "生長在台灣的我們，很少從一個宏觀的角度看整個台灣的經濟、法律、交通、教育... ，而我們相信數據可以幫我們更了解我們身長在的這片土地上的一切。讓我們來用數據看台灣！",
      "email": "contact@taiwanstat.com",
      "logo": "/assets/images/taiwanstat_thumb.png",
      "cover": "/assets/images/taiwanstat_cover1.png",
      "name": "用數據看台灣團隊",
      "author": "用數據看台灣團隊",
      "author_image": "/assets/images/taiwanstat_thumb.png",
      "url": "http://taiwanstat.com",
      "facebook": {
        "url": "https://facebook.com/taiwanstat",
        "desc": "追蹤 Facebook 粉絲專業"
      }
    }
  }
},{
  "layout": "./layouts/default.html",
  "filename": "./_web/index.html",
  "partials": ["./partials/head.js", "./partials/footer.js", "./partials/header.js", "./partials/javascripts.js", "./partials/index.js"],
  "data": {
    "title": "用數據看台灣首頁",
    "site": {
      "title": "用數據看台灣",
      "description": "生長在台灣的我們，很少從一個宏觀的角度看整個台灣的經濟、法律、交通、教育... ，而我們相信數據可以幫我們更了解我們身長在的這片土地上的一切。讓我們來用數據看台灣！",
      "email": "contact@taiwanstat.com",
      "logo": "/assets/images/taiwanstat_thumb.png",
      "cover": "/assets/images/taiwanstat_cover1.png",
      "name": "用數據看台灣團隊",
      "author": "用數據看台灣團隊",
      "author_image": "/assets/images/taiwanstat_thumb.png",
      "url": "http://taiwanstat.com",
      "facebook": {
        "url": "https://facebook.com/taiwanstat",
        "desc": "追蹤 Facebook 粉絲專業"
      }
    },
    "posts": post_arr
  }
}]

module.exports = posts;
