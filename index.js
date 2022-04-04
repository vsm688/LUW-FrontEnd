const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    database: 'LoginSystem',
    user: 'root',
    password: 'S#93Browser',
});

app.post('/register', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO User (name, email, password) VALUES (?,?,?)", 
    [name, email, password], 
    (err, result) => {
        console.log(err);
    }
    );
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM User WHERE email = ? AND password = ?", 
    [email, password], 
    (err, result) => {
        if (err) {
            res.send({err: err});
        }
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "email does not exist" });
        }
    }
    );
});

app.listen(3001, () => {
    console.log("running server");
});