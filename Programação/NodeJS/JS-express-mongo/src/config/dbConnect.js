import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.kk5o5.mongodb.net/Livraria?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}

export default conectaNaDatabase