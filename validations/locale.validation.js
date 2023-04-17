const Joi = require('joi');
const { objectId } = require('./customs.validation');

const getById = {
    params: Joi.object().keys({
        id: Joi.required().custom(objectId),
    }),
};

const getByModule =  {    
    params: Joi.object().keys({
        module: Joi.string().required()
    }),
}

const updateLocale =  {    
   
    params: Joi.object().keys({
        id: Joi.required().custom(objectId),
    }),
    body: Joi.object().keys({
        module: Joi.string().optional(),
        key: Joi.string().optional(),
        lang: {
            es: Joi.string().optional(),            
            en: Joi.string().optional(),            
            pt: Joi.string().optional(),            
        }
    })

}

const createLocale =  {    
    
    body: Joi.object().keys({
        module: Joi.string().required(),
        key: Joi.string().required(),
        lang: {
            es: Joi.string().required(),            
            en: Joi.string().optional(),            
            pt: Joi.string().optional(),            
        }
    })
    
}

const deleteLocale =  {    
    params: Joi.object().keys({
        id: Joi.required().custom(objectId),
    }),
}

module.exports = {
  getById, updateLocale, createLocale, deleteLocale, getByModule 
};