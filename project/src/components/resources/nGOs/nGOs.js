import React from 'react'
import ResourceView from './resourceView'

class NGOs extends React.Component{
    constructor(){
        super();
        this.state = {
            resourceData : []
        }
    }
    componentDidMount(){
        fetch("https://sheetdb.io/api/v1/cdea2ba4h0tfe/?sheet=NGOs")
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
                contact = {item["Contact No."]}  
                comments = {item.Comments}
                verificationStatus = {item["Verification Status"]}
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
                            <th scope="col">COMMENTS</th>
                            <th scope="col">VERIFICATION STATUS</th>
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

export default NGOs;