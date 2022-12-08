import client from "../../db/client.mjs";

const getLobbies = async (req, res) => {
    try {
        const lobbies = await client.query('SELECT * FROM lobby');
        res.send(lobbies.rows);
    } catch (err) {
        console.log(`There's a problem to get the lobbies : ${err}`)
    }
}

export default getLobbies;