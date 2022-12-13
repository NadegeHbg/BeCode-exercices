import express from "express";
import connectDB from "./db/connectDB.mjs";
import getUsers from "./api/queries/getUsers.mjs";
import registerUser from "./api/auth/registerUser.mjs";
import getLobbies from "./api/queries/getLobbies.mjs";
import loginUser from "./api/auth/loginUser.mjs";
import createLobby from "./api/queries/createLobby.mjs";
import * as dotenv from 'dotenv';
import sendMessage from "./api/queries/sendMessage.mjs";

dotenv.config();

const server = express();
const PORT = 3000;

connectDB();

server.use(express.json());

server.get('/', (req, resp) => {
    resp.send({ info: 'Coucou le tchat, toutes mes confuses' })
})

server.post('/api/register', registerUser);

server.post('/api/login/', loginUser);

server.post('/api/lobby', createLobby);

server.post('/api/lobby/message', sendMessage)

server.get('/users', getUsers);

server.get('/lobbies', getLobbies)

app.post('/lobby', createLobby)

server.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))
