const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://sonny:sonnyjohn63910@cluster0.kcsg7.mongodb.net/twitter?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify:false},)
        .then(() => console.log('co ok'))
        .catch(err => console.log(err));