import express from "express";
import connectDB from "./db/connectDB.mjs";
import getUsers from "./api/queries/getUsers.mjs";
import addUser from "./api/auth/registerUser.mjs";
import getLobbies from "./api/queries/getLobbies.mjs";
import loginUser from "./api/auth/loginUser.mjs";
// import createLobby from "./queries/createLobby.mjs";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.get('/', (req, resp) => {
    resp.send({ info: 'Speak with your team' })
})

app.get('/users', getUsers);

app.post('/api/register', addUser);

app.post('/api/login/', loginUser);

app.get('/lobbies', getLobbies)

// app.post('/lobby', createLobby)

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))