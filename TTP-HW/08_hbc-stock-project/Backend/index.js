const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./queries')
const port = 3007;

const auth = require('./middleware/auth')

// Body parser
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
// Cross-origin
app.use(cors())

app.get('/', (__, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
//Creates a user
app.post('/signup/', db.createUser);
//Login to existing account 
app.post('/login/', db.Login);
// Retrieve user's information
app.get('/user/', auth, db.getUser);
//Gets all stocks (dummy data for now)
app.get('/stocks', db.getStocks);
//Buy stock
app.post('/stocks/buy/:stockid/:amount', auth, db.buyStocks);

console.log("I am the REAL HBC")


app.listen(port, () => console.log(`Server WORKS on ${port}!`));


