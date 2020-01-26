const pg = require('pg');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('./middleware/auth')

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'stocks',
    password: 'password',
    port: 5432
});
db.connect();

//Creates a user account
const createUser = (request, response) => {
    const {username, password} = request.body;
    //Hashing the password
    const hashPassword = bcrypt.hashSync(password, 10)
    //Creating a new record in useres table
    db.query(`INSERT INTO users (username, password) VALUES ($1, $2)`, [username, hashPassword], (error, results) => {
        if(error) {
            return response.status(400).json({message: 'Sorry,  username already exists.'})
        }
        //Find the user row based from username and get the userid from it
        db.query(`SELECT userid FROM users WHERE username = $1`, [username], (error, results) => {
            if(error) {
                return response.status(500).json({message: 'There was an error with databse.'})
            }

            const {userid} = results.rows[0]

            //insert the userid into user's portfolio
            db.query(`INSERT INTO portfolio_stocks (user_id) VALUES ($1)`, [userid], (error, _) => {
                if(error) {
                    console.log(error);
                    return response.status(500).json({message: 'There was an error with databse.'})
                }
            })

            // generating token
            const token = jwt.sign({userid}, 'test', {
                expiresIn: 3600
            })

            response.json({
                user: {
                    userid,
                    username
                },
                token
            })
        })
    })

}
//Returns the user name ID and password
const Login = (request, response) => {
    const{username} = request.body;

    db.query(`SELECT * FROM users WHERE username = $1`, [username], (error, results) => {
        if(error || results.rows.length === 0) {
            return response.status(400).json({message: 'Sorry this user does not exist.'})
        }

        const {userid, username, balance, password} = results.rows[0]

        // validate the hash password
        const isPasswordValid = bcrypt.compareSync(request.body.password, password)

        // if password is invalid return 401: unauthorized
        if (!isPasswordValid) return response.status(401).json({message: 'Invalid credentials.'})

        // generating token
        const token = jwt.sign({userid}, 'test', {
            expiresIn: 3600
        })


        response.json({
            token,
            user: {
                username,
                balance
            }
        })
    })   
}

// Get user data
const getUser = (request, response) => {
    const {userid} = request

    db.query('SELECT balance FROM users WHERE userid = $1', [userid], (error, results) => {
        if(error) {
            return response.status(400).json({message: 'The user does not exists'});
        }
        const {balance} = results.rows[0]

        db.query('SELECT stockid, amount FROM portfolio_stocks WHERE userid = $1', [userid], async (error, results) => {
            
            if(error) {
                return response.status(500).json({message: 'There were database errors'});
            }
            if(results.rows.length === 0 ){
                return response.status(400).json({balance, stocks: []});
            }

            const stocks = await Promise.all(
                results.rows.map(async result => {
                    const {stockid, amount} = result
                    try {
                        const row = await db.query('SELECT name, price FROM stocks WHERE stockid = $1', [stockid])
                        return {...row.rows[0], amount}
                    } catch(error) {
                        return response.status(500).json({message: 'DB error'})
                    }
                    
                })
            )
            response.json({
                balance,
                stocks
            })
        })
    })
    
}

//GRAB AND DISPLAY ALL STOCKS ON STOCK PAGE
const getStocks = (request, response) => {
    db.query('SELECT * FROM stocks' , (error, results) => {
        if(error) {
            // throw error
            return response.status(400).json({error})
         }
        response.status(200).json(results.rows)
    })
}

//Buy a stock
const buyStocks = (request, response) => {
    const {userid} = request;
    const {stockid, amount} = request.params

    db.query('SELECT balance from users where userid=$1', [userid], (error, results) => {
        if (error) {
            return response.status(500).json({message: 'Error in DB 1.'})
        }
        const {balance} = results.rows[0]
        db.query('SELECT name, price from stocks where stockid=$1', [stockid], (error, results) => {
            if(error){
                return response.status(500).json({message: 'Error in DB 2'})
            }
            const {name, price} = results.rows[0]
            const total = parseInt(amount) * price
            if(total > balance) {
                return response.status(400).json({message: 'Insufficient balance.'})
            }
            const newBalance = (balance - total).toFixed(2)
            db.query('UPDATE users SET balance=$1 WHERE userid=$2', [newBalance, userid], (error, results) => {
                if(error){
                    return response.status(500).json({message: 'Error in DB 3'})
                }
                db.query('INSERT INTO portfolio_stocks(userid, stockid, amount) VALUES($1,$2,$3)', [userid,stockid,amount], (error, results) => {
                    if(error){
                        return response.status(500).json({message: 'Error in DB 4'});
                    }
                    response.json({message: `Succefully bought ${amount} of ${name} stocks.`})
                })
            })
            
        })
    })

    // db.query(``)

}
const stocksByUsers = (request, response) => {
    const userid = parseInt(request.params.uid);
    db.query(`SELECT u.userid, s.stockid, s.name, SUM(us.amount) AS amount, s.price FROM users u INNER JOIN user_STOCKS us ON u.userid = us.user_id
		INNER JOIN stocks s ON us.stock_id = s.stockid WHERE u.userid = $1 GROUP BY u.userid, us.user_id, s.stockid ORDER BY name ASC`, [userid], (error, results) => {
            if(error) {
                response.send({message: 'Sorry you not bought any stocks yet'})
            }
            response.status(200).json(results.rows)
        })
}

module.exports = {
    createUser,
    Login,
    getStocks,
    getUser,
    buyStocks,
    stocksByUsers
}