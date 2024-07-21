const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// create express app
const app = express();

//connect to mongodb
const uri = "mongodb+srv://<Your Username>:<Your Password>@blog.mqvh3ft.mongodb.net/Blog-Store?retryWrites=true&w=majority&appName=Blog";
mongoose.connect(uri)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//blog routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

app.use('/blogs', blogRoutes);

//404 page 
app.use((req, res) => {
    res.status(404).render('404-error', { title: '404 Error' });
});

