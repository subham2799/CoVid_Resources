import React from 'react';

function ResourceView(props){
    if(props.selected.toUpperCase() === props.district.toUpperCase()){
        return(
            <tr>
                <td>{props.district}</td>
                <td>{props.area}</td>
                <td>{props.name_of_organisation}</td>
                <td>{props.contact}</td>
                <td>{props.verified}</td>
                <td>{props.verificationTime}</td>
                <td>{props.remarks}</td>
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