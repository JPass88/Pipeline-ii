
import fs from 'fs';
// import axios from 'axios';


// const url = 'localhost:5000/incidents';

fetch("http://localhost:5000/incidents") //Consult this url
    .then(response => response.json()) //If object returned, convert to JSON
    .then(data => {
        
      console.log(data);    
      
    });

// export const fetchData = () => axios.get(url);
