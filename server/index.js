//Starting point of our application

import express from 'express';
import cors from 'cors';

import incidentRoutes from './routes/incidents.js';

const app = express();
app.use(cors());

app.use('/incidents', incidentRoutes);

const PORT = process.env.PORT || 5000;

app.get('/data', (req, res) => {   
    res.json(data);
});

app.listen (PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});