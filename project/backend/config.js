const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017")
.then(()=>{
   console.log("connected to mongodb")
})