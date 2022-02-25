import express from 'express';
import { getIncidents } from '../controllers/incidents.js'

const router = express.Router();


// GET request for list of all incidents
    // One route, **Note ':5000/' becomes ':5000/incidents'**
router.get('/', getIncidents);


export default router;