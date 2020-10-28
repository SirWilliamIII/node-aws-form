var express = require('express');
var router = express.Router();


const db = require("../db/db")


const addEntry = db.addEntry
    // const getByName = db.getEntryByKey
    // const getAll = db.getAllfromTable
    // const createTable = db.createTable


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});



router.post('/submit', (req, res) => {
    addEntry('place', req.body.city, req.body.country, "100.123", "100.123")
    console.log('City: ' + req.body.city)
    console.log('Password: ' + req.body.country)
    res.redirect('/')
})




module.exports = router;