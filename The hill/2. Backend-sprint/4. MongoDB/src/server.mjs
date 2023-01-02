import express from "express";
// database connexion
import connectDB from "./db/connectDB.mjs"
// user auth 
import registerUser from "./api/auth/register.mjs";
import loginUser from "./api/auth/login.mjs";

const server = express();
const PORT = 3000;

connectDB();

// console.log(process.env.mongoDBpsw2)

server.use("/static", express.static("src"));

// extract data from the form by adding them to the body property of the request
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.send({ info: 'Hello World !' })
})

// register new user
server.post('/static/register', registerUser);

server.post('/static/login', loginUser)

server.listen(PORT, () => console.log(`http://localhost:${PORT}/`))