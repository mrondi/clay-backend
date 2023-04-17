const mongoose = require('mongoose');
const { model, Schema} = mongoose;

const localeSchema = new mongoose.Schema({
    module: {
        required: true,
        type: String
    },
    key: {
        required: true,
        type: String,        
    },
    lang: {
        es: { required: true, type: String},        
        en: { required: false, type: String},
        pt: { required: false, type: String},           
    }
})

localeSchema.index({ "module": 1, "key": 1 }, { "unique": true })

const Locale = model('Locale', localeSchema);
module.exports = Locale;