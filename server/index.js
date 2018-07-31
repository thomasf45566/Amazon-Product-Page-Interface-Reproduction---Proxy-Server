const express = require('express'); 
const request = require('request'); 
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../newClient')));


app.get('/bundle/:port', function(req, res){ 
  request(`http://localhost:${req.params.port}/bundle.js`, function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      res.status(200).send(body); 
    } 
   });
});

app.use('/api/description', function(req, res){ 
  console.log(req.originalUrl);
  request(`http://localhost:3000${req.originalUrl}`, function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      //console.log(body);
      res.status(200).send(body); 
    }
   });
});

app.use('/image', function(req, res){ 
  // console.log(req.originalUrl);
  request(`http://localhost:4000${req.originalUrl}`, function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      // console.log(body);
      res.status(200).send(body); 
    }
   });
});

app.use('/api/customer-reviews', function(req, res){ 
  // console.log(req.originalUrl);
  request(`http://localhost:5000${req.originalUrl}`, function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      // console.log(body);
      res.status(200).send(body); 
    }
   });
});

app.use('/api/qAndA', function(req, res){ 
  // console.log(req.originalUrl);
  request(`http://localhost:6000${req.originalUrl}`, function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      // console.log(body);
      res.status(200).send(body); 
    }
   });
});

app.listen(3001, () => console.log('Server running on port', 3001));