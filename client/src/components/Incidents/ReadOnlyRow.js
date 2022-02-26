import React from 'react'

const ReadOnlyRow = ( { incident, handleEditClick, handleDeleteClick} ) => {
    return (
        <tr>
            <td>{incident.incidentNumber}</td>
            <td>{incident.incidentType}</td>
            <td>{incident.significant}</td>
            <td>
                <button 
                    type="button" 
                    onClick={(event) => handleEditClick(event, incident)}
                    > Edit
                </button>
                <button 
                    type="button" 
                    onClick={()=> handleDeleteClick(incident.id)} 
                    > Delete
                </button></td>
        </tr>
    )
}

export default ReadOnlyRow