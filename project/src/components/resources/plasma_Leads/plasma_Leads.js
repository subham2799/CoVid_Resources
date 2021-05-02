import React from 'react'
import ResourceView from './resourceView'

class PlasmaLeads extends React.Component{
    constructor(){
        super();
        this.state = {
            resourceData : []
        }
    }
    componentDidMount(){
        fetch("https://sheetdb.io/api/v1/cdea2ba4h0tfe/?sheet=Plasma_Leads")
        .then(res => res.json())
        .then(result => {
            this.setState({resourceData : result});
        })
        .catch(error => {console.log(error)});
    }
    render(){
        const allDataArray = this.state.resourceData.map(item => 
            <ResourceView 
                selected = {this.props.district} 
                district = {item.District} 
                area = {item.Area} 
                name = {item.Name}
                contact = {item["Contact information"]}  
                status = {item.Status}
                dateTimeOfVerification = {item["Date and time of verification"]}
            />
        );
        return(
            <div class="table-responsive container content">
                <table class="table table-bordered table-hover">
                    <thead style = {{backgroundColor:"#1f1c1c",color:"white"}}>
                        <tr>
                            <th scope="col">DISTRICT</th>
                            <th scope="col">AREA</th>
                            <th scope="col">NAME</th>
                            <th scope="col">CONTACT INFORMATION</th>                            
                            <th scope="col">STATUS</th>
                            <th scope="col">DATE AND TIME OF VERIFICATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allDataArray}
                    </tbody>
                </table>
            </div>
          
        );
    }
}

export default PlasmaLeads;