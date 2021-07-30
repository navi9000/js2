
let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');


const app = express();

// create application/json parser
var jsonParser = bodyParser.json();

app.use(express.static('./dist'));

app.get('/api/goods', (req, res) => {
  fs.readFile('./data/catalogData.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get('/api/cart', (req, res) => {
  fs.readFile('./data/getBasket.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/api/cart', jsonParser, (req, res) => {
  fs.readFile('./data/getBasket.json', 'utf8', (err, data) => {
    const cart = JSON.parse(data);

    const item = req.body;

    cart.push(item);

    fs.writeFile('./data/getBasket.json', JSON.stringify(cart), (err) => {
      console.log('done');
      res.send('ok')
    });
  });
});



app.listen(3000, () => {
  console.log('server is running on port 3000!');
});