require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/airquality", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const Aqmpoint = require("./Aqmpoint");
(async() => {
    const allpoints = await Aqmpoint.find();
    console.log("XXX", allpoints);
})()