const mongoose=require'mongoose';

var mongoUrl='mongodb+srv://ruthwoldesemait:iloveJesus@cluster0.43voo.mongodb.net/';
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});