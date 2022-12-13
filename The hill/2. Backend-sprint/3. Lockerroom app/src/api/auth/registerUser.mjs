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
    // console.log(req.body)

    if (!email || !first_name || !last_name) {
        res.status(404).send(`There's something missing here`)
        return
    }

    const hashPassword = await bcrypt.hash(req.body.password, saltRounds).then(function (hash) {
        // Store hash in your password DB.
        return hash
    });

    const addUser = await client.query(
        "INSERT INTO users (email, password) VALUES ( $1, $2 ) RETURNING *;",
        [email, hashPassword]);
    // console.log(hashPassword)

    const addProfile = await client.query(
        "INSERT INTO profile (first_name, last_name, id_user) VALUES ( $1, $2, $3 ) RETURNING *;",
        [first_name, last_name, addUser.rows[0].id]
    )
    // rajouter une protection : if adduser ou addprofile n'est pas possible -> ne rien rajouter dans la database
    res.status(201).send(`User added with id_user: ${addUser.rows[0].id} and profile_id ${addProfile.rows[0].id}`)
}

export default addUser