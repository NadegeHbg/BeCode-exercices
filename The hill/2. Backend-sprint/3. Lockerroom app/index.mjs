/* Les bases de données sont créées et maintenant ? 

1. connecter la database => V
2. get / => X
3. get /users => X 
3. get /lobbies => X
Il faut pouvoir s'inscrire sur l'application : 
* post new user ? 
* recevoir un rôle

Si admin : 
* créer un lobby
* ajouter des utilisateurs dans un lobby

Utilisateurs (teamMember et coach) : 
* peuvent poster des messages dans 
*/

import express from "express";
import connectDB from "./db/connectDB.mjs";
import getUsers from "./queries/getUsers.mjs";
import addUser from "./queries/registerUser.mjs";
import getLobbies from "./queries/getLobbies.mjs";
import loginUser from "./queries/loginUser.mjs";
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