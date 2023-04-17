const Locale = require('../models/locale');

const getAll = () => {
    return Locale.find();
}

const getById = (_id) => {
    return Locale.findById(_id);
}

const findByQuery = (query) => {
    return Locale.find(query);
}

const updateLocale = (_id, data) => {    
    return Locale.findByIdAndUpdate(_id, data, { new: true});
}

const createLocale = (data) => {      
    return data.save();
}

const deleteLocale = (_id) => { 
    return Locale.findByIdAndDelete(_id);
}

module.exports = { 
    getAll, 
    getById, 
    updateLocale, 
    createLocale, 
    deleteLocale, 
    findByQuery 
}