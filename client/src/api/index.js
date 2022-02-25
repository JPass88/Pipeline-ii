import axios from 'axios';

const url = 'localhost:5000/incidents';



export const fetchData = () => axios.get(url);

//https://randomuser.me/api/?results=1


// const data = fetch('http://localhost:5000/incidents')
//     .then(response => {
//         return response.json()}
//     ); //if response (promise) resolves, return the data
    
//export default data; 