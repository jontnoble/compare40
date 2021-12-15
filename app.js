const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 5000;

app.use(cookieParser());

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/php', express.static(__dirname + 'public/php'));

//Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/mainlay')
app.set('view engine', 'ejs')

// Navigation
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/dicesim', (req, res) => {
    const { theme = 'Default' } = req.cookies;
    console.log(`Theme: ${theme}`);
    res.render('dicesim')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.get('/rawpoints', (req, res) => {
    res.render('rawpoints')
});

//cookies
app.get('/themeultra', (req, res) => {
    res.cookie('theme', 'Ultra')
})

app.get('/thememachine', (req, res) => {
    res.cookie('theme', 'Machine God')
})

// Listen on Port 5000
app.listen(port, () => {
    console.log('Listening on port 5000!')
});
