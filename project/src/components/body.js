import React, { Component } from 'react'
import AllResources from './allResources'
class Body extends Component{
    constructor() {
        super()
        this.state = {
            district: "Kolkata",
            commodity: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    render(){
        return(
            <center>
                <div className = "selection">
                    <form>
                    <label><strong>District:&nbsp;&nbsp;&nbsp;</strong></label>
                        <select 
                            value={this.state.district}
                            onChange={this.handleChange}
                            name="district"
                        >
                            <option value="">Select an option</option>
                            <option value="malda">Malda</option>
                            <option value="hooghly">Hooghly</option>
                            <option value="darjeeling">Darjeeling</option>
                            <option value="24 parganas (north)">24 Parganas (North)</option>
                            <option value="kolkata">Kolkata</option>
                        </select> 

                        <label className = "label-text"><strong>Search for:&nbsp;&nbsp;&nbsp;</strong></label>
                        <select 
                            value={this.state.commodity}
                            onChange={this.handleChange}
                            name="commodity"
                        >
                            <option value="">Select an option</option>
                            <option value="oxygen">Oxygen</option>
                            <option value="ambulance">Ambulance</option>
                            <option value="cylinder">Cylinder</option>
                            <option value="volunteers">Volunteers</option>
                            <option value="home_care_packages">Home Care Packages</option>
                            <option value="food">Food</option>
                        </select>  

                    </form>
                </div>
                
                <AllResources district = {this.state.district} commodity = {this.state.commodity}/>
            </center>
        )
    }
}

export default Body