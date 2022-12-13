// on a lobby you're in, you should be able to send a message
// the message has to be link to the profile_id and the lobby_id
//  -> select id from profile & lobby
// requete : message + date d'envoie du message

import client from "../../db/client.mjs";
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const verify = promisify(jwt.verify)

const sendMessage = async (req, res) => {
    // token needed to link the id of the profile to the message
    const token = req.headers.authorization.split(' ')[1];
    const { message, lobby_id } = req.body;

    if (!message) {
        console.log(`Faut dire à Marafal que c'est son anniversaire`)
        return res.status(400).send({
            error: 'Need a message to be sent'
        })
    }

    try {
        const decoded = await verify(token, process.env.privateKeyAuten);
        const date = Date.now();
        console.log(date)

        const newMessage = await client.query(
            "INSERT INTO post (profile_id, lobby_id, message) VALUES ( $1, $2, $3) RETURNING *;",
            [decoded.profile_id, lobby_id, message]
        );

    } catch (err) {
        res.status(418).send(`${err.message}`)
        console.log(`Could not send the message${err}`)
    }
}

export default sendMessage;