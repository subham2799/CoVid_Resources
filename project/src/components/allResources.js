import React from 'react'
import Oxygen from './resources/oxygen/oxygen'
import Ambulance from './resources/ambulance/ambulance'
import Cylinder from './resources/cylinder/cylinder'
import Volunteers from './resources/volunteers/volunteers'
import HomeCarePackages from './resources/home_care_packages/homeCarePackages'
import Food from './resources/food/food'

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
        if(props.district === "")
        {
            return(
                <div>Hello</div>
            )
        }
        else{
            return(
                <Ambulance district = {props.district}/>
            )
        }
    }
    else if(props.commodity === "cylinder")
    {
        if(props.district === "")
        {
            return(
                <div>Hello</div>
            )
        }
        else{
            return(
                <Cylinder district = {props.district}/>
            )
        }
    }
    else if(props.commodity === "volunteers")
    {
        if(props.district === "")
        {
            return(
                <div>Hello</div>
            )
        }
        else{
            return(
                <Volunteers district = {props.district}/>
            )
        }
    }
    else if(props.commodity === "home_care_packages")
    {
        if(props.district === "")
        {
            return(
                <div>Hello</div>
            )
        }
        else{
            return(
                <HomeCarePackages district = {props.district}/>
            )
        }
    }
    else if(props.commodity === "food")
    {
        if(props.district === "")
        {
            return(
                <div>Hello</div>
            )
        }
        else{
            return(
                <Food district = {props.district}/>
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