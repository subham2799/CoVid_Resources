import React from 'react'
import ResourceView from './resourceView'

class Ambulance extends React.Component{
    constructor(){
        super();
        this.state = {
            resourceData : []
        }
    }
    componentDidMount(){
        fetch("https://sheetdb.io/api/v1/cdea2ba4h0tfe/?sheet=Ambulance")
        .then(res => res.json())
        .then(result => {
            this.setState({resourceData : result});
        })
        .catch(error => {console.log(error)});
    }
    render(){
        const allDataArray = this.state.resourceData.map(item => <ResourceView selected = {this.props.district} district = {item.District} area={item.Area} covid = {item["Covid/Non-Covid"]} name = {item.Name} contact = {item.Contact} availability = {item.Availability} verified = {item["Verified (Y/N)"]} verificationTime = {item["Verification Time"]} status = {item.Status}/>);
        return(
            <div class="table-responsive container content">
                <table class="table table-bordered table-hover">
                    <thead style = {{backgroundColor:"#1f1c1c",color:"white"}}>
                        <tr>
                            <th scope="col">DISTRICT</th>
                            <th scope="col">AREA</th>
                            <th scope="col">COVID / NON-COVID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">CONTACT</th>
                            <th scope="col">AVAILABILITY</th>
                            <th scope="col">VERIFIED</th>
                            <th scope="col">VERIFICATION TIME</th>
                            <th scope="col">STATUS</th>
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

export default Ambulance;