const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
let handActivate = false;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/hand_move', (req, res) => { //Line 9
  res.send({ express: 'Done!' }); //Line 10
  handActivate = true;
}); //Line 11

// create a GET route
app.post('/hand_move', (req, res) => { //Line 9
  //tell arduino to activate
  console.log(req);
  if (handActivate) {
    res.send({ express: '1' }); //Line 10
    handActivate = false;
  }
  else{
    res.send({ express: '0' });
    handActivate = false;
  }
  
}); //Line 11

