
## Instalación

1. Clonar repositorio.
2. Instalar modulos con "npm i" 
3. Iniciar API con "npm start"

## Deploy Productivo: DigitalOcean & MongoDB Atlas

El deploy a producción se realizo en un Droplet en la nube de Digital Ocean, la base de datos esta alojada en Mongo Atlas. (Solo por razones de testing rápido se incluye el archivo ".env" en el repositorio GIT, se que no es una practica aconsejable ya que se exponen secrets, api keys, etc.)

El API corre bajo el servidor Caddy, configurado como proxy reverso. Se uso PM2 para la ejecución persistente de la API.

## URL Base Productivo
http://137.184.205.241/api/v1/

## Documentación API
https://documenter.getpostman.com/view/14221286/2s93Xwyizg

## Sobre la solución

La solucion se base en una colección llamada Locale, con el siguiente Schema:

<code>
    {
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
    }
</code>

## Otras Consideraciones

- Validaciones de Request con Joi