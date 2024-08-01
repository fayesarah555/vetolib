const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');

const veterinarianRoutes = require('./routes/veterinarians.routes');
const ownerRoutes = require('./routes/owners.routes');
const animalRoutes = require('./routes/animals.routes');
const appointmentRoutes = require('./routes/appointments.routes');


require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

// routes
app.use('/api/user', userRoutes);


app.use('/api/veterinarians', veterinarianRoutes);
app.use('/api/owners', ownerRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/appointments', appointmentRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})
