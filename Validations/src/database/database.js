const mongoose = require('mongoose');

const mongooseurl = "mongodb://localhost:27017/connect"

const connectDb = async () => {
    await mongoose.connect(mongooseurl)
    .then(() => console.log("connected to database"))
    .catch((err) => console.log("unable to connect to database"+err));
};
module.exports = connectDb;