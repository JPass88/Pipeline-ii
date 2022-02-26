import React from 'react'

const EditableRow = ( { editIncidentData, 
                        handleEditIncidentChange,
                        handleCancelClick} ) => {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a new value." 
                    name="incidentNumber" 
                    value={editIncidentData.incidentNumber}
                    onChange={handleEditIncidentChange}                       
                ></input>
            </td>
            <td>
            <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a new value." 
                    name="incidentType"                    
                    value={editIncidentData.incidentType}    
                    onChange={handleEditIncidentChange}                       
                ></input>
            </td>
            <td>
            <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a new value." 
                    name="significant"                       
                    value={editIncidentData.significant}     
                    onChange={handleEditIncidentChange}                       
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
};

export default EditableRow