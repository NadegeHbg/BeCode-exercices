import client from "../../db/client.mjs";

// Un utilisateur peut créer un lobby
// Il doit lui donner un nom
// l'id du lobby est enregistré dans le lobby_per_user
// l'id du profile qui crée le lobby est enregistré dans le lobby per user

// app.post('/lobby/:id', getLobbies)

const createLobby = async (req, res) => {
    const { tokito } = req.headers;
    const token = "";
    console.log(req.headers.authorization)
    console.log(req.headers)
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }

    // const lobby = await client.query(
    //     "INSERT INTO lobby (title, profile_id) VALUES ( $1, $2 ) RETURNING *;",
    //     [email, /*on pourra mettre le token qui proviendra de jwt*/]);

    client.query()
}

export default createLobby;