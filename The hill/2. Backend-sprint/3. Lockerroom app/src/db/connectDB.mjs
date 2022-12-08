import client from "./client.mjs";

const connectDB = async () => {
    try {
        await client.connect();
        console.log('connexion successful')
    } catch (err) {
        console.log(`connexion failed ${err}`)
    }
}

export default connectDB;