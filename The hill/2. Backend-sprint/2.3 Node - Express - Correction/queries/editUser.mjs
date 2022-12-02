import client from "../db/client.mjs";

const editUser = async (req, res) => {

    const id = parseInt(req.params.id);
    const { firstname, lastname, email, ip } = req.body;

    client.query(
        //await not really nécessaire ici ... Mais du coup l'est-il tout court ? 
        "UPDATE users SET firstname = $2, lastname = $3, email = $4, ip = $5 WHERE id = $1", [id, firstname, lastname, email, ip]);
    res.status(201).send(`User edited with ID: ${id}`)
}

export default editUser;