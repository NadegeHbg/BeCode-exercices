import express from "express";
import connectDB from "./src/db/connectDB.mjs";

import user from "./src/models/user.mjs";


const server = express();
const PORT = 3000;

await connectDB();

server.use("/static", express.static("src"));

server.use(express.urlencoded({ extended: true }));

server.post('/', (req, res) => {
    console.log(req.body);
});


server.get('/', (req, res) => {
    res.send({ info: 'Hello World !' })
})

server.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`));