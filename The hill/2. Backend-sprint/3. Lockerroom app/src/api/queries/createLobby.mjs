import client from "../../db/client.mjs";
import jwt from 'jsonwebtoken';
import { promisify } from 'util';


const verify = promisify(jwt.verify)

// Un utilisateur peut créer un lobby
// Il doit lui donner un nom
// l'id du lobby est enregistré dans le lobby_per_user
// l'id du profile qui crée le lobby est enregistré dans le lobby per user

// app.post('/lobby/:id', getLobbies)

const createLobby = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { title } = req.body;

    if (!title || typeof title != "string") {
        console.log(`Faut dire à Marafal que c'est son anniversaire`)
        return res.status(400).send({
            error: 'Missing titeule comme dirait lotre'
        })
    }

    try {
        const decoded = await verify(token, process.env.privateKeyAuten);

        const lobby = await client.query(
            "INSERT INTO lobby (title, profile_id) VALUES ( $1, $2 ) RETURNING *;",
            [title, decoded.profile_id]
        );

        // console.log(decoded.profile_id)
        res.send(`{Lobby created with title : ${title}}`);
    } catch (err) {
        res.status(418).send(`${err.message}`)
        console.log(`Could not create a lobby ${err}`)
    }

}

export default createLobby;