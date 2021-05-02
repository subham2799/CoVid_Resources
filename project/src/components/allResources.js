import React from 'react'
import Oxygen from './resources/oxygen/oxygen'
import ICURemdisivir from './resources/iCU_Remdisivir/iCU_Remdisivir'
import NGOs from './resources/nGOs/nGOs'
import PlasmaLeads from './resources/plasma_Leads/plasma_Leads'
function AllResources(props) {
    if(props.commodity === "oxygen")
    {
        if(props.district === "")
        {
            return(
                <div></div>
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
        if(props.district === "")
        {
            return(
                <div></div>
            )
        }
        else{
            return(
                <Oxygen district = {props.district}/>
            )
        }
    }
    else if(props.commodity === "iCU_Remdisivir")
    {
        if(props.district === "")
        {
            return(
                <div></div>
            )
        }
        else{
            return(
                <ICURemdisivir district = {props.district}/>
            )
        }
    } 
    else if(props.commodity === "nGOs")
    {
        if(props.district === "")
        {
            return(
                <div></div>
            )
        }
        else{
            return(
                <NGOs district = {props.district}/>
            )
        }
    } 
    else if(props.commodity === "plasma_Leads")
    {
        if(props.district === "")
        {
            return(
                <div></div>
            )
        }
        else{
            return(
                <PlasmaLeads district = {props.district}/>
            )
        }
    }
    else{
        return(
            <div></div>
        )
    }
}

export default AllResources;