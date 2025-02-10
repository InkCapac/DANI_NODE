const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine(
    {
        defaultLayout: 'main',
        extname: ".jj",
        partialsDir: "views/partials"
    }
));
//\\PC18567\handlebars
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render('index',{id:"15€"});
})

app.get("/about-us", (req, res) => {
    res.render('about');
})

app.listen(8080);