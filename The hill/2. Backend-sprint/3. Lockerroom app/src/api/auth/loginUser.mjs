import client from "../../db/client.mjs";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'

dotenv.config();

const loginUser = async (req, res) => {
    try {
        const user = await client.query(`SELECT * FROM users WHERE email = $1`, [req.body.email]);
        // console.log(req.body.email, user.rows)
        // console.log(req.body.password, user.rows[0].password)
        if (user.rows.length === 0) {
            res.send(`Incorrect email`)
            return
        }

        const match = await bcrypt.compare(req.body.password, user.rows[0].password);

        if (!match) {
            res.send(`Incorrect password`)
            return
        }

        // console.log(typeof user.rows[0].id)

        // res.send(`You're now connected`)
        console.log(req.headers)
        // user.rows[0].id is a Number
        const token = jwt.sign({ userd_id: user.rows[0].id }, process.env.privateKeyAuten);
        const tokito = {
            tokenKey: token
        }
        res.json(tokito);

    } catch (err) {
        console.log(`The login failed : ${err}`)
    }
}

export default loginUser;