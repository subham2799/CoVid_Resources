import React from 'react'
import Oxygen from './resources/oxygen/oxygen'

function AllResources(props) {
    if(props.commodity === "oxygen")
    {
        if(props.district === "")
        {
            return(
                <div>Hello</div>
            )
        }
        else{
            return(
                <Oxygen district = {props.district}/>
            )
        }
    }
    else if(props.commodity === "ambulance")
    {
        return(
            <Oxygen district = {props.district}/>
        )
    } 
    else{
        return(
            <div></div>
        )
    }
}

export default AllResources;