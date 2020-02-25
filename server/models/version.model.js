const mongoose = require('mongoose');

const VersionSchema = new mongoose.Schema({
    versionA:{
        type:String,
        required:[true,"A Version input is required"]
    },
    versionB:{
        type:String,
        required:[true,"A Version input is required"]
    },
    results:{
        type:String
    }
},{timestamps:true});




const Version = mongoose.model("Version", VersionSchema);

module.exports = Version;