const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose} = require('./database');





//Settings
app.set('port', process.env.PORT || 3000);

//Middleswares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/customers',require('./routes/main.routes'));
app.use('/customersName',require('./routes/FirstName.routes'));
app.use('/customersCountry',require('./routes/country.routes'));
app.use('/listenings',require('./routes/listings.routes'));

app.listen(3000, ()=> {
    console.log("Server On Port ", app.get('port'))
});