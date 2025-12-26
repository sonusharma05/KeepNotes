require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOOSE_URI);

const noteSchema = mongoose.Schema({
    title:String,
    body:String
})



const notes=mongoose.model('notes',noteSchema);
module.exports={
    notes
}
