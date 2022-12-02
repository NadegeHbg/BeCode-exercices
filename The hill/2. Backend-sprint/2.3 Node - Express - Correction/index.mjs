import express from "express";
import connectDB from "./db/connectDB.mjs";
import getUsers from "./queries/getUsers.mjs";
import getUserById from "./queries/getUserByID.mjs";
import addUser from "./queries/addUser.mjs";
import editUser from "./queries/editUser.mjs";
// import initDB from "./db/initDB.mjs";

const app = express();
const PORT = 3000;

// connecter la database
connectDB

// créer DB
// initDB()

app.use(express.json());
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, express, and Postgres API' })
});

// récupérer les informations à l'intérieur de la database et les afficher
app.get('/users', getUsers);

// get a specific user
// :id nécessaire pour identifer l'utilisateur à afficher
app.get("/users/:id", getUserById);

// add a new user
app.post("/users", addUser);

// edit a new user
// :id nécessaire pour identifier l'utilisateur à modifier
app.patch("/users/:id", editUser);

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))