import React from 'react';

function ResourceView(props){
    if(props.selected.toUpperCase() === props.district.toUpperCase()){
        return(
            <tr>
                <td>{props.district}</td>
                <td>{props.area}</td>
                <td>{props.name}</td>
                <td>{props.contact}</td>
                <td>{props.comments}</td>
                <td>{props.verificationStatus}</td>
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