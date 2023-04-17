const router = require('express').Router()
const localeController = require('../controllers/locale')
const localeValidation = require('../validations/locale.validation')
const validate = require('../middlewares/validate')

router
    .get('/', localeController.getAll )
    .get('/module/:module', validate(localeValidation.getByModule), localeController.getByModule )
    .get('/:id', validate(localeValidation.getById), localeController.getById )    
    .post('/', validate(localeValidation.createLocale), localeController.createLocale )
    .patch('/:id', validate(localeValidation.updateLocale), localeController.updateLocale )
    .delete('/:id', validate(localeValidation.deleteLocale), localeController.deleteLocale )

module.exports = router;