const mongoose = require('mongoose');
const uri = "mongodb+srv://dnduser:spitfire7*@cluster0.esyu5.mongodb.net/dndsheet?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const DB = mongoose.connection

export default DB