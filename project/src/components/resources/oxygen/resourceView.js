import React from 'react';

function ResourceView(props){
    if(props.selected.toUpperCase() === props.district.toUpperCase()){
        return(
            <tr>
                <td>{props.district}</td>
                <td>{props.area}</td>
                <td>{props.name}</td>
                <td>{props.product}</td>
                <td>{props.contact}</td>
                <td>{props.status}</td>
                <td>{props.verificationTime}</td>
                <td>{props.availabilityStatus}</td>
                <td>{props.comments}</td>
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