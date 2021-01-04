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


// CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain);

router.post('/register', function(req, res) {
    // let errorsToSend = [];
    // db.selectByEmail(req.body.email, (err, user) => {
    //     errorsToSend.push('You cannot use this email');
                
    //     console.log(user);
    //     if(user) {
    //         console.log('Existing user ...');
    //         return res.status(400).json({errors: errorsToSend})
    //     } 

    // })

    console.log("New user registered.");
    db.insert([
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8)
    ],
    function (err) {
        if (err) return res.status(500).send({ errors: ["There was a problem registering the user."] })
        db.selectByEmail(req.body.email, (err,user) => {
            if (err) return res.status(500).send({errors: ["There was a problem getting user"]})
            let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: user });
        });
    });

});

router.post('/register-admin', function(req, res) {
    let errorsToSend = [];
    // check if email already exists
    db.selectByEmail(req.body.email, (err, user) => {
        errorsToSend.push('You cannot use this email');
        if(user) res.status(400).send({errors: errorsToSend})
    })
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
        
        // if (!user) return res.status(404).send('No user found.');
        
        if (!user) {            
            return res.status(401).json({ error: 'Unauthorized', message: 'Not Authorized - Invalid login details.' });
        }
        
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.user_pass);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null, error: 'Invalid username or password!' });
        if(passwordIsValid) {
            db.updateLogin(user.email, 1, function(err){
                console.log(err)
                // deal with any fallout here    
                // if (err) return res.status(500).send({message: 'Something bad happened and I cannot log you in'});
            } )
        }
        
        let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, user: user });
    });
})

router.post('/logout', (req, res) => {
    
    db.updateLogin(req.body.email, 0, function(err){
        console.log("Do logout")
        console.log(err)
        // deal with fallout here
        //if (err) return res.status(500).send({message: 'Something bad happened and I cannot log you out'});
    })
    res.status(200).send({ auth: false, token: null, user: null, success: true, message: 'You have been logged out' });
})
router.get('/dashboard', verifyToken, (req, res) => {
    jwt.verify(req.token, config.secret, err => {
        if(err) {
            res.sendStatus(401)
        } else {
        res.json({
            sections: sections
        })
    }
    })
})
router.get('/proposals', verifyToken, (req, res) => {
    jwt.verify(req.token, config.secret, err => {
        
        if(err) {
            res.sendStatus(401)
        } else {
        res.json(
             [
                  {
                    "id": 5928101,
                    "user": {
                      "id": "abc123",
                      "name": "Adam"
                    },
                    "category": "animal welfare",
                    "organizer": "Adam",
                    "title": "Cat Cabaret",
                    "description": "Yay felines!",
                    "location": "Meow Town",
                    "date": "2019-01-03T21:54:00.000Z",
                    "time": "2:00",
                    "attendees": [],
                    "body": "",
                    "createdAt": "2020-03-27T18:25:43.511Z",
                    "createdBy": "Ahmid Oluwa",
                    "archived": false,
                    "status": "active",
                    "read": true,
                    "checked": true
                  },
                  {
                    "id": 8419988,
                    "user": {
                      "id": "abc123",
                      "name": "Adam"
                    },
                    "category": "animal welfare",
                    "organizer": "Adam",
                    "title": "Kitty Cluster",
                    "description": "Yay cats!",
                    "location": "Catlandia",
                    "date": "2019-01-31T22:09:00.000Z",
                    "time": "7:00",
                    "attendees": [],
                    "body": "",
                    "createdAt": "2020-03-27T18:25:43.511Z",
                    "createdBy": "Ahmid Oluwa",
                    "archived": true,
                    "status": "active",
                    "read": true
                  },
                  {
                    "id": 4582797,
                    "user": {
                      "id": "abc123",
                      "name": "Adam"
                    },
                    "category": "animal welfare",
                    "organizer": "Adam",
                    "title": "Puppy Parade",
                    "description": "Yay pups!",
                    "location": "Puptown ",
                    "date": "2019-02-02T23:27:00.000Z",
                    "time": "1:00",
                    "attendees": [],
                    "body": "",
                    "createdAt": "2020-03-27T18:25:43.511Z",
                    "createdBy": "Ahmid Oluwa",
                    "archived": true,
                    "status": "active",
                    "read": true
                  }
            ]
        )
    }
    })
})
app.use(router)

let port = process.env.PORT || 3030;

// MIDDLEWARE
function verifyToken (req, res, next) {
    const bearerHeader = req.headers['authorization']
  
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ')
      const bearerToken = bearer[1]
      req.token = bearerToken
      next()
    } else {
      res.sendStatus(401)
    }
  }
let server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});
