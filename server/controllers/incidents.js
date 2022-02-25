import incident from '../models/incidentData.js';

export const getIncidents = (req, res) => {
    
    try { 
        res.json(incident);
    }
    catch (error) {
        console.log(error);
    }
}

