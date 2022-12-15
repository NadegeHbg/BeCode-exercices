import User from "../../models/user.mjs";
import Profile from "../../models/profile.mjs"
import bcrypt from "bcrypt";

const saltRounds = 10;

const registerUser = async (req, res) => {
    const { emailSign, passwordSign, firstName, lastName } = req.body;
    const email = await User.find({ email: emailSign });
    // console.log(email[0].email)

    if (!emailSign || !passwordSign || !firstName || !lastName) {
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

    const profile = new Profile({
        first_name: firstName,
        last_name: lastName,
        id_user: user._id
    })

    // console.log(user_id, user_id.split(' '))

    try {
        await user.save();
        await profile.save();
        res.redirect('/static');
    } catch (err) {
        console.log(`Error while trying to post : ${err}`)
        res.redirect('/static');
    }
}

export default registerUser