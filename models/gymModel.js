const mongoose = require('mongoose')


const gymSchema = new mongoose.Schema({
    gymname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
     
    logo:{
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    yearsofexperience: {type: String},
    gender: {type: String},
    mobile: {type: Number},
    location: {type: String},
    openingtime: {type: String},
    closingtime: {type: String},
    about: {type: String},
    subscriptionprice: {type: Number},
    descriptionofservice: {type: String},
    informationaboutgym: {type: String},
    servicesyouprovide: {type: String},
    images: {
        type: Array,
        required: true
    },

    user: { type: mongoose.Types.ObjectId, ref: 'user' }



    
}, {
    timestamps: true
})


module.exports = mongoose.model('gym', gymSchema)