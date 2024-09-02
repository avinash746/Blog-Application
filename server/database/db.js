import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:Avinashkr@9334@cluster0-shard-00-00.0x7yb.mongodb.net:27017,cluster0-shard-00-01.0x7yb.mongodb.net:27017,cluster0-shard-00-02.0x7yb.mongodb.net:27017/?ssl=true&replicaSet=atlas-tnjmgm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;