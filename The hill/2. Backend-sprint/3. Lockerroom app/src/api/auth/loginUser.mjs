import client from "../../db/client.mjs";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { cp } from "fs";


const sign = promisify(jwt.sign)

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const user = await client.query(`SELECT email, password, id FROM users WHERE email = $1`, [email]);

    // console.log(req.body.email, user.rows)
    // console.log(req.body.password, user.rows[0].password)
    if (user.rows.length === 0) {
        return res.status(404).send({ error: 'This user does not exist' })
    }

    const match = await bcrypt.compare(password, user.rows[0].password);

    if (!match) {
        return res.status(403).send({ error: 'Wrong password' })
    }

    const profile = await client.query(`SELECT id FROM profile WHERE user_id = $1`, [user.rows[0].id]);

    // console.log(profile.rows[0].id)
    // SELECT * FROM users JOIN profile ON users.id = profile.user_id;
    // /!\ revoir les JOIN après /!\

    try {
        // res.send(`You're now connected`)
        const token = await sign(
            { profile_id: profile.rows[0].id },
            process.env.privateKeyAuten,
            {
                algorithm: 'HS512',
                expiresIn: '1h',
            }
        );
        const tokito = {
            tokenKey: token
        }
        res.json(tokito);

    } catch (err) {
        console.log(`The login failed : ${err}`)
        return res.status(500).send({ error: 'Cannot generate token' })
    }
}

export default loginUser;

/* token link au user ou au profile ? */