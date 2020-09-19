"use strict";
const express = require('express');
const DB = require('./db');
const config = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const db = new DB("sqlitedb");
const app = express();
const router = express.Router();
let sections = [{title: 'title', text: 'asdfsdfsdf'}]
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

let verifyToken = "";

// CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain);

router.post('/register', function(req, res) {
    db.insert([
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8)
    ],
    function (err) {
        if (err) return res.status(500).send("There was a problem registering the user.")
        db.selectByEmail(req.body.email, (err,user) => {
            if (err) return res.status(500).send("There was a problem getting user")
            let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: user });
        });
    });
});

router.post('/register-admin', function(req, res) {
    db.insertAdmin([
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8),
        1
    ],
    function (err) {
        if (err) return res.status(500).send("There was a problem registering the user.")
        db.selectByEmail(req.body.email, (err,user) => {
            if (err) return res.status(500).send("There was a problem getting user")
            let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: user });
        });
    });
});

router.post('/login', (req, res) => {
    db.selectByEmail(req.body.email, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.user_pass);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        if(passwordIsValid) {
            db.updateLogin(user, 1, function(err){
                // deal with any fallout here    
                if (err) return res.status(500).send({message: 'Something bad happened and I cannot log you in'});
            } )
        }
        
        let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, user: user });
    });
})

router.post('/logout', (req, res) => {
    
    db.updateLogin(req.body.email, 0, function(err){
        // deal with fallout here
        //if (err) return res.status(500).send({message: 'Something bad happened and I cannot log you out'});
    })
    res.status(200).send({ auth: false, token: null, user: null, success: true, message: 'You have been logged out' });
})
// router.get('/dashboard', (req, res) => {
//     jwt.verify(req.token, 'the_secret_key', err => {
//         if(err) {
//             res.sendStatus(401)
//         } else {
//         res.json({
//             sections: sections
//         })
//     }
//     })
// })
app.use(router)

let port = process.env.PORT || 3030;

let server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});
