import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [results, setResults] = React.useState([]); //Start as empty array
 
  useEffect( () => {    
    fetch("http://localhost:5000/incidents") //Consult this url
    .then(response => response.json()) //If object returned, convert to JSON
    .then(data => {
      console.log(data);    
      setResults(data.incidents) //WORKS      
    });
  }, []) 
  

  return (    
    <div>
      <h1>HEY YOU, PIKACHU</h1>
      {results.map(( result)=>{
          return(
            <div className="app-container">
              <table>
                <thead>
                  <tr>
                    <th>incNo</th>
                    <th>incType</th>
                    <th>significant</th>                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{result.incidentNumber}</td>
                    <td>{result.incidentType}</td>
                    <td>{result.significant}</td>
                  </tr>
                </tbody>
              </table>
              {/* //<h1>{result.name.first}</h1> //WORKS              
              //<h2>hi</h2>
              <h2>{result.company}</h2> */}
            </div>
          )
        })}
    </div>    



  );
};

export default App;