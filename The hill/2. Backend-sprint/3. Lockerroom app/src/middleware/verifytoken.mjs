import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'

dotenv.config();
// console.log(process.env.privateKeyAuten)

const token = jwt.sign({ userd_id: 10 }, process.env.privateKeyAuten);
console.log(token);