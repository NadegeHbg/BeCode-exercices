import User from "../../models/user.mjs";
import bcrypt from "bcrypt";

const saltRounds = 10;

const registerUser = async (req, res) => {
    const { emailSign, passwordSign } = req.body;
    const email = await User.find({ email: emailSign });
    // console.log(email[0].email)

    if (!emailSign || !passwordSign) {
        return res.status(400).send({ error: 'Missing informations' })
    }

    if (email.length === 1) {
        return res.send({ error: 'This email adress already exist' })
    }

    const hashPassword = await bcrypt.hash(passwordSign, saltRounds).then(function (hash) {
        // Store hash in your password DB.
        return hash
    });

    const user = new User({
        email: emailSign,
        password: hashPassword
    })

    try {
        await user.save();
        res.redirect('/static');
    } catch (err) {
        console.log(`Error while trying to post : ${err}`)
        res.redirect('/static');
    }
}

export default registerUser