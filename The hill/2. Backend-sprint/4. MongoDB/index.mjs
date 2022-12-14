import express from "express";
import connectDB from "./src/db/connectDB.mjs";
import registerUser from "./src/api/auth/register.mjs";


import Profile from "./src/models/profile.mjs";
import loginUser from "./src/api/auth/login.mjs";

const server = express();
const PORT = 3000;

connectDB();

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