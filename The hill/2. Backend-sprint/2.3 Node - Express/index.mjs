import express from 'express'
import { users } from './users.mjs'

const PORT = 3000
const app = express()

app.use(express.json());

app.get('/', (req, res) => res.send({ info: `Hello World!` }))

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user =>
        user.id === id
    );

    res.send(user);
})

app.post('/user', (req, res) => {

    const { id, firstName, lastName, email, ip } = req.body
    const user = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        ip: ip
    }

    users.push(user)

    res.send(users)
})

app.patch('/user/:id', (req, res) => {
    const userID = Number(req.params.id);
    const user = users.find(user =>
        user.id === userID
    );

    const { firstName, lastName, email, ip } = req.body
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.ip = ip;


    users.push(user)

    res.send(users);
})



app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))


