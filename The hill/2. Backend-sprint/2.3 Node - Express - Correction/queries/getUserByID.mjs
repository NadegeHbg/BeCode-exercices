import client from "../db/client.mjs";

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    const user = await client.query("SELECT * FROM users WHERE id = $1", [id])
    // console.log(user.rows)

    res.send(user.rows)
}

export default getUserById;