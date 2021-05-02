import React, { Component } from 'react'
import AllResources from './allResources'
import ButtonComponent from './buttonComponent'
class Body extends Component{
    constructor() {
        super()
        this.state = {
            district: "Kolkata",
            commodity: "",
            clicked: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value ,clicked: false})
    }
    handleClick(event){
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        if(!this.state.clicked){
            return(
                <center>
                    <div className = "selection container">
                        <div classname = "row">
                            <div className = "col-sm-9" style = {{paddingLeft: 0}}>
                                <form >
                                    <label><strong>District:&nbsp;&nbsp;&nbsp;</strong></label>
                                    <select 
                                        value={this.state.district}
                                        onChange={this.handleChange}
                                        name="district"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="24 Parganas (North)">24 Parganas (North)</option>
                                        <option value="24 Parganas (South)">24 Parganas (South)</option>
                                        <option value="bankura">Bankura</option>
                                        <option value="bardhaman (Paschim)">Bardhaman (Paschim)</option>
                                        <option value="bardhaman (Purba)">Bardhaman (Purba)</option>
                                        <option value="darjeeling">Darjeeling</option>
                                        <option value="hooghly">Hooghly</option>
                                        <option value="howrah">Howrah</option>
                                        <option value="kolkata">Kolkata</option>
                                        <option value="malda">Malda</option>
                                        <option value="medinipore (Purba)">Medinipore (Purba)</option>
                                        <option value="murshidabad">Murshidabad</option>
                                        <option value="nadia">Nadia</option>
                                        <option value="purulia">Purulia</option>
                                        <option value="unspecified">Unspecified</option>

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
                                        <option value="home_Care_Packages">Home_Care_Packages</option>
                                        <option value="food">Food</option>
                                        <option value="iCU_Remdisivir">ICU_Remdisivir</option>
                                        <option value="nGOs">NGOs</option>
                                        <option value="plasma_Leads">Plasma_Leads</option>
                                        
                                    </select>
                                
                                </form>
                            </div>
                            <div className = "col-sm-3" style = {{paddingLeft:"70px",paddingRight: 0}}>
                                <a
                                    onClick={this.handleClick}
                                    href={"#"}
                                >   
                                    Click for more Resources
                                </a>  
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    <AllResources district = {this.state.district} commodity = {this.state.commodity}/>

                </center>
            )
        }
        else{
            return(
                <div>
                    <center style = {{paddingTop:"15px"}}>
                        <button onClick = {this.handleClick} className = "btn btn-primary btn-lg" >Back to Resources</button>
                    </center>
                    <ButtonComponent />
                </div>
                
            )
        }
    }
}

export default Body