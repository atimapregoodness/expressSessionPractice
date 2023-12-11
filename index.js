const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const session = require('express-session')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
app.use(session({ secret: 'thisisasecret', resave: false, saveUninitialized: false}));

app.get('/view-counts', (req, res) => {
    if (req.session.count) {
        req.session.count += 1 
    } else {
        req.session.count = 1
    }
    res.send(`You have viewed this page ${req.session.count} time(s)`)
})



app.listen(3000, (req, res) => {
    console.log('LISTENING TO PORT: 3000')
});