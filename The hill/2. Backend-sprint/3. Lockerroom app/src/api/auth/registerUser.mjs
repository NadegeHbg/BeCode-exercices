import client from "../../db/client.mjs";
import bcrypt from "bcrypt";

const saltRounds = 10;

// const hashPassword = async () => {
//     try{
//       const createHash = await bcrypt.hash(req.body.password, saltRounds)
//         .then(function(hash){});
//     } catch(err){

//     }
// }

const addUser = async (req, res) => {
    const { email, first_name, last_name } = req.body;

    const hashPassword = await bcrypt.hash(req.body.password, saltRounds).then(function (hash) {
        // Store hash in your password DB.
        return hash
    });

    const addUser = await client.query(
        "INSERT INTO users (email, password) VALUES ( $1, $2 ) RETURNING *;",
        [email, hashPassword]);
    // console.log(hashPassword)

    const addProfile = await client.query(
        "INSERT INTO profile (first_name, last_name, user_id) VALUES ( $1, $2, $3 ) RETURNING *;",
        [first_name, last_name, addUser.rows[0].id]
    )
    res.status(201).send(`User added with user_id: ${addUser.rows[0].id} and profile_id ${addProfile.rows[0].id}`)
}

export default addUser