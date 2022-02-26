import React, { useState, Fragment } from 'react';
import './App.css';
import data from './api/incidents.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from "./components/Incidents/ReadOnlyRow"
import EditableRow from "./components/Incidents/EditableRow"

const App = () => {

  const [incidents, setIncidents] = useState(data); 

  const [addIncidentData, setAddIncidentData] = useState({
    incidentNumber: '',
    incidentType: '', //Fields: values
    significant: ''
  });

  const [editIncidentData, setEditIncidentData] = useState({
    incidentNumber: '',
    incidentType: '', //Fields: values
    significant: ''
  })
 
  const [editIncidentId, setEditIncidentId] = useState(null); //If null, not editing

  const handleAddIncidentChange = (event) => {
    event.preventDefault();
    
    //Get user entered attribute and set
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newIncidentData = { ...addIncidentData}; //Spread operator that copies og data
    newIncidentData[fieldName] = fieldValue; //Object[key] = value

    setAddIncidentData(newIncidentData);
  }
  
  const handleEditIncidentChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newIncidentData = { ...editIncidentData };
    newIncidentData[fieldName] = fieldValue;

    setEditIncidentData(newIncidentData);
  }

  const handleAddIncidentSubmit = (event) => {
    event.preventDefault(); //prevent POST request

    const newIncident = {
      id: nanoid(),
      incidentNumber: addIncidentData.incidentNumber,
      incidentType: addIncidentData.incidentType,
      significant: addIncidentData.significant,
    };

    const newIncidents = [...incidents, newIncident]; //New incident added to end of array
    setIncidents(newIncidents);
  }

  const handleEditIncidentSubmit = (event) => {
    event.preventDefault();

    const editedIncident = {
      id: editIncidentId,
      incidentNumber: editIncidentData.incidentNumber,
      incidentType: editIncidentData.incidentType,
      significant: editIncidentData.significant
    };

    const newIncidents = [...incidents];

    const index = incidents.findIndex((incident) => incident.id === editIncidentId);

    newIncidents[index] = editedIncident;

    setIncidents(newIncidents);
    setEditIncidentId(null);
  }

  const handleEditClick = (event, incident) => {
    event.preventDefault();
    setEditIncidentId(incident.id);

    const incidentValues = {
      incidentNumber: incident.incidentNumber,
      incidentType: incident.incidentType,
      significant: incident.significant
    }

    setEditIncidentData(incidentValues);
  };

  const handleCancelClick = () => {
    setEditIncidentId(null);
  }

  const handleDeleteClick = (incidentId) => {
    const newIncidents = [...incidents];

    const index = incidents.findIndex((incident)=> incident.id === incidentId);

    newIncidents.splice(index, 1);

    setIncidents(newIncidents);
  }

  return (    
    <div>

      <h1>Incident Report</h1>      
          
      <div className="app-container">
        <form onSubmit={handleEditIncidentSubmit}>
          <table>
            <thead>
              <tr>
                <th>incNo</th>
                <th>incType</th>
                <th>significant</th>                    
                <th>Actions</th>   
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => ( //Outputs each row using the mapped values
                <Fragment> 
                  {
                    editIncidentId === incident.id ? (
                    <EditableRow 
                      editIncidentData={editIncidentData} 
                      handleEditIncidentChange={handleEditIncidentChange}
                      handleCancelClick={handleCancelClick}
                      /> ) : ( 
                    <ReadOnlyRow 
                      incident={incident} 
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />               
                    )
                  }   
                </Fragment>              
              ))}                  
            </tbody>
          </table> 
        </form>          

        <h2>Add an Incident</h2>    
        
        <form onSubmit={handleAddIncidentSubmit}>
          <table className='data'>
            <tr>
              <td>
                <input 
                  type="text" 
                  name="incidentNumber" 
                  required="required" 
                  placeholder="Enter an inc. no."
                  onChange={handleAddIncidentChange}
                />
              </td>
              <td>
              <input 
                type="text" 
                name="incidentType" 
                required="required" 
                placeholder="Enter an inc. type."
                onChange={handleAddIncidentChange}
              />
              </td>
              <td>
               <input 
                type="text" 
                name="significant" 
                required="required" 
                placeholder="Significant incident?"
                onChange={handleAddIncidentChange}                
              />
              </td>
              <td>
              <button type="submit">Add</button>
              </td>
              </tr>
              </table>
        </form> 

        <br></br>

        <form>
          <table id='saveResetCSV'>
            <tr>
              <td>
                <h4>Save current report to new CSV</h4>
              </td>
              <td id="extraSave">
                <button id="saveButton" type="submit">Save</button>
              </td>
            </tr>
              
            <tr>
              <td>
                <h4>Reset to original data:</h4>
              </td>

              <td id="extraReset">
                <button id="resetButton" type="submit">Reset</button>
              </td>
            </tr>
          </table>
        </form>

      </div>
      <h3>Author: Jordan Passant</h3>
    </div>    
  );
};

export default App;
