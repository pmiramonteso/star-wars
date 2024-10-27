const { model, Schema } = require('moongose');

const userSchema = new Schema ({
    user: Number,
    name: String,
    email: String,
    password: String
});

module.exports = model('user', userSchema);
 
