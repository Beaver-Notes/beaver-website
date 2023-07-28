const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
app.post('/signup', (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Make sure fields are filled
  if (!firstName || !lastName || !email) {
    res.redirect('/fail.html');
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const postData = JSON.stringify(data);

  fetch('https://us13.api.mailchimp.com/3.0/lists/a79c522893', {
    method: 'POST',
    headers: {
      Authorization: 'auth 3ed38efe3b6cd4ede1e600fa3502d6d3-us13',
    },
    body: postData,
  })
    .then((response) =>
      response.status === 200 ? res.redirect('/success.html') : res.redirect('/fail.html')
    )
    .catch((err) => console.log(err));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
