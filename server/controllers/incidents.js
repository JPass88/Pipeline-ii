import incident from '../models/incidentData.js';
import fs from 'fs';

export const getIncidents = (req, res) => {

    try {         
        
        try {
            let data = JSON.stringify(incident, null, 2);
            fs.writeFileSync('../client/src/api/incidents.json', data);           
        }
        catch (error) {
            console.log(error);
        }
        res.json(incident);
    }

    catch (error) {
        console.log(error);
    }
}

