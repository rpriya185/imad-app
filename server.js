var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'articleOne' : {
        title: 'articleone',
        content: `<h1> Article One </h1>
                    <p> This is Article one </p>`
                 },
    'articleTwo' : {
        title: 'articletwo',
        content: `<h1> Article Two </h1>
                    <p> This is Article two </p>`
                 }
    
};


function createTemplate(data){
    var title=data.title;
    var content=data.content;
    var htmlTemplate= `
    <html>
    <head>
    <title>
    ${title}
    </title>
    </head>
    <body>
    ${content}
    </body>
    </html>
    `;
    
    return htmlTemplate;
    
}

app.get('/:articleName', function (req, res) {
 var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
