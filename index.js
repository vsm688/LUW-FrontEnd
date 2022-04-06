const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["Get", "POST"],
    credentials: true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userID",
    secret: "group3",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 1000,
    }
}));

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

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        }
        db.query(
            "INSERT INTO User (name, email, password) VALUES (?,?,?)", 
        [name, email, hash], 
        (err, result) => {
            console.log(err);
        }
        );

    });

});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM User WHERE email = ? ", 
    email, 
    (err, result) => {
        if (err) {
            res.send({err: err});
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    req.session.user = result;
                    res.send(result)
                } else {
                    res.send({ message: "Wrong email/password combination" });
                }
            });
        } else {
            res.send({ message: "email does not exist" });
        }
    }
    );
});

app.listen(3001, () => {
    console.log("running server");
});