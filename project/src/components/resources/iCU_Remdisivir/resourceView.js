import React from 'react';

function ResourceView(props){
    if(props.selected.toUpperCase() === props.district.toUpperCase()){
        return(
            <tr>
                <td>{props.district}</td>
                <td>{props.nameOfCovidHospital}</td>
                <td>{props.contactDetails}</td>
                <td>{props.iCUFacility}</td>
                <td>{props.icuBedsAvailable}</td>
                <td>{props.icuVerificationDateTime}</td>
                <td>{props.remdesivir}</td>
                <td>{props.remdesivirVerificationDateTime}</td>
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