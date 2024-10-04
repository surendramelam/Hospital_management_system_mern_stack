import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "WEB_PROJECT2"
    }).then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log(`Some errors occurred while connecting to database: ${err}`);
    });
};
