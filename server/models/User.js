const { Schema, model, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    info: [
    {
        username:{
            type: String,
            require: true,
            trim: true
        },
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
        shirtSize: {
            type: String,
            required: true,
        },
        shoeSize: {
            type: String,
            required: true,
        },
        pantsSize: {
            type: String,
            required: true,
        },
        favColor: {
            type: String,
            required: true,
        },
        favNameToBeCalled: {
            type: String,
            required: true,
        },
        favNFLTeam: {
            type: String,
            required: true,
        },
        favCollegeTeam: {
            type: String,
            required: true,
        },
        favSoccerTeam: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        }
    }
    ],
    lists: [
        {
            type: Schema.Types.ObjectId,
            ref: "List"
        }
    ]
});

userSchema.pre('save', async function (next){
    if (this.isNew || this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.pre('remove', function(next) {
    const ListMade = mongoose.model('List');;

    ListMade.remove({ _id: { $in: this.lists}}).then(() => next());
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
