
## Instalación

1. Clonar repositorio.
2. Instalar modulos con "npm i". 
3. Iniciar API con "npm start".

## Deploy Productivo: DigitalOcean & MongoDB Atlas

El deploy a producción se realizo en un Droplet de Digital Ocean. El API corre bajo el servidor Caddy, configurado como proxy reverso. 

Se usa PM2 para la ejecución persistente del API. Se usa MongoDB Atlas para alojar el cluster. 

Solo por razones de testing rápido se incluye el archivo ".env" en el repositorio GIT, se que no es una practica aconsejable ya que se exponen secrets, api keys, etc.


## URL Base Productivo
http://137.184.205.241/api/v1/

## Documentación API
https://documenter.getpostman.com/view/14221286/2s93Xwyizg

## Sobre la Solución

La solución se base en una colección llamada Locale, con el siguiente Schema:

```json
    {
        "module": {
            "required": true,
            "type": "String"
        },
        "key": {
            "required": true,
            "type": "String",        
        },
        "lang": {
            "es": { "required": true, "type": "String"},        
            "en": { "required": false, "type": "String"},
            "pt": { "required": false, "type": "String"},           
        }
    }
```

Donde el detalle es...

- **module**: Indica el modulo o componente de donde proviene esa cadena.
- **key**: Es la clave indentificadora de la cadena, ej: 'btn_aceptar' (debe ser clave unica junto a la clave: "module").
- **lang**: Se espera un Object con el set de lenguajes, "lang.es" es requerido al crear un documento.


**Ejemplo**


```json
    {
        "module": "flujo_caja",
        "key": "btn_aceptar",
        "lang": {
            "es": "Aceptar",        
            "en": "Accept",
            "pt": "Aceitar",           
        }
    }
```

## Otras Consideraciones

- Validaciones de Request con Joi.