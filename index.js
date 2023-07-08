const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//static folder

app.use(express.static(path.join(__dirname, 'public')));

//Signup Route
app.post('/signup', (req, res) => {
  const { firstName, lastName, email } = req.body;

// Make sure all fields are entered
  if (!firstName ||!lastName ||!email) {
    res.redirect('/fail.html');
    return;
  }

// Construct request data
const data = {
  members: [
    {
        email_address: email,
        status:'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us13.api.mailchimp.com/3.0/lists/a79c522893',
    method: 'POST',
    headers: {
      Authorization: 'auth c7a7cd7284802363d6c52d1750f7d4ea-us13'
    },
    body: postData
    };
  

  request(options, (err, response, body) => {
    if (err) {
      res.redirect('/success.html');
          return;
        } else {
          if(response.statusCode === 200) {
            res.redirect('/success.html');
            return;} else {
              res.redirect('/success.html');
            }
          }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on ${PORT}`));