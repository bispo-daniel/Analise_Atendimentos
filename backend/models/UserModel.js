const mongoose = require('mongoose');

let UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

let UserModel = mongoose.model("User", UserSchema);
// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural, lowercased version of your model name. 
// Thus, for example, the model "Tank" is for the "tanks" collection in the database.
// Source: Mongoose documentation

module.exports = UserModel;