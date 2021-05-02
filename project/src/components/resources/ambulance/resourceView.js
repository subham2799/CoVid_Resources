import React from 'react';

function ResourceView(props){
    if(props.selected.toUpperCase() === props.district.toUpperCase()){
        return(
            <tr>
                <td>{props.district}</td>
                <td>{props.area}</td>
                <td>{props.covid}</td>
                <td>{props.name}</td>
                <td>{props.contact}</td>
                <td>{props.availability}</td>
                <td>{props.verified}</td>
                <td>{props.verificationTime}</td>
                <td>{props.status}</td>
            </tr>
        );
    }
    else{
        return(
            <div></div>
        )
    }
}
export default ResourceView;