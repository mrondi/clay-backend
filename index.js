const bodyParser  = require("body-parser");
const cors        = require('cors')
const express     = require('express');
const mongoose    = require('mongoose');

require('dotenv').config();

const mongoString = process.env.MONGO_URI;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log('DB ERROR', error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());    

const routerV1 = express.Router();

routerV1.use('/locales', require('./routes/locale'))

app.use('/api/v1', routerV1)

app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${3000}`)
})