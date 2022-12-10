import client from "../../db/client.mjs";
import bcrypt from "bcrypt";

const saltRounds = 10;

const registerUser = async (req, res) => {
    const { email, first_name, last_name, password } = req.body;

    if (!email || !first_name || !last_name || !password) {
        return res.status(400).send({ error: 'Missing informations' })
    }

    const emailsFromDB = await client.query(`SELECT email FROM users WHERE email = $1`, [email]);

    if (emailsFromDB.rows.length === 1) {
        return res.send({ error: 'This email adress already exist' })
    }

    const hashPassword = await bcrypt.hash(password, saltRounds).then(function (hash) {
        // Store hash in your password DB.
        return hash
    });

    try {
        const addUser = await client.query(
            "INSERT INTO users (email, password) VALUES ( $1, $2 ) RETURNING *;",
            [email, hashPassword]);
        // console.log(hashPassword)

        const addProfile = await client.query(
            "INSERT INTO profile (first_name, last_name, user_id) VALUES ( $1, $2, $3 ) RETURNING *;",
            [first_name, last_name, addUser.rows[0].id]
        )
        res.status(201).send(`User added with user_id: ${addUser.rows[0].id} and profile_id ${addProfile.rows[0].id}`)
    } catch (err) {
        console.log(`Connection error ${err}`)
    }
}

export default registerUser