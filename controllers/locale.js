const Locale = require('../models/locale');
const localeService = require('../services/locale')

const getAll = async (req, res)  => {

    try {
        const result = await localeService.getAll()
        res.status(200).json(result)            
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message || error })        
    }

};

const getById = async (req, res) => {

    const _id = req.params.id;    

    try {

        const result = await localeService.getById(_id)
        res.status(200).json(result)    
        
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message || error })        
    }

}

const getByModule = async (req, res) => {    

    const module = req.params.module; 

    try {
        const result = await localeService.findByQuery({ "module": module });
        res.status(200).json(result);
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message || error })        
    }
}


const updateLocale = async (req, res) => {    

    const _id  = req.params.id;
    let data = req.body; 

    try {

        const locale = await localeService.getById(_id);

        if(data.lang) {
            data = Object.assign(data, {
                lang : { 
                    es: data.lang.es ? data.lang.es : locale.lang.es,
                    en: data.lang.en ? data.lang.en : locale.lang.en,
                    pt: data.lang.pt ? data.lang.pt : locale.lang.pt,
                }
            })
        }

        const result = await localeService.updateLocale(_id, data);
        res.status(200).json(result);
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message || error })        
    }
}

const createLocale = async (req, res) => {

    const data = new Locale({
        module: req.body.module,
        key: String(req.body.key),        
        lang: {
            es: req.body.lang.es,
            en: req.body.lang.en ? req.body.lang.en: null,
            pt: req.body.lang.pt ? req.body.lang.pt: null,
        }
    })

    try {
        const result = await localeService.createLocale(data);
        res.status(200).json(result);            
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message || error })        
    }
}

const deleteLocale = async (req, res) => {    

    const _id_locale  = req.params.id;

    try {
        const result = await localeService.deleteLocale(_id_locale)
        res.status(200).json(result)            
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message || error })        
    }
}

module.exports = { 
    getAll, 
    getById, 
    updateLocale, 
    createLocale, 
    deleteLocale, 
    getByModule 
}