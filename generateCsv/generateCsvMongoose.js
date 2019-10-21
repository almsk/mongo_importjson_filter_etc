require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/airquality", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const Aqmpoint = require("./Aqmpoint");
(async() => {
    const allpoints = await Aqmpoint.find({'aqm.noxevent': {$gte: 50}});
    console.log("XXX", allpoints);
    let CSVstring = `System Time, Nox\n`;
    allpoints.map(row => {
        CSVstring += `${row.gps.system_time},${row.aqm.noxevent}\n`
        
    })
    const fs = require('fs');

fs.writeFile("export.csv", CSVstring, function(err) {

    if(err) {
        return console.log(err);
    }

    console.log(CSVstring);
}); 
   
})()