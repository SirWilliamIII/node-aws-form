var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

const bodyParser = require('body-parser')


router.post('/submit', (req, res) => {
    console.log('Username: ' + req.body.username)
    console.log('Password: ' + req.body.password)
    res.redirect('/')
})




module.exports = router;