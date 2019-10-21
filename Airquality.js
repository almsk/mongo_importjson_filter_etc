require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewurlParser: true,
    useCreateIndex: true,
    useunifiedTopology: true
});
const Airquality = require("./Airquality");
(async() => {
    const allpoints = await Airquality.find();
    console.log("XXX", allpoints);
})()