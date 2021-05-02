import React from 'react'
import ResourceView from './resourceView'

class Home_care_packages extends React.Component{
    constructor(){
        super();
        this.state = {
            resourceData : []
        }
    }
    componentDidMount(){
        fetch("https://sheetdb.io/api/v1/cdea2ba4h0tfe/?sheet=home_care_packages")
        .then(res => res.json())
        .then(result => {
            this.setState({resourceData : result});
        })
        .catch(error => {console.log(error)});
    }
    render(){
        const allDataArray = this.state.resourceData.map(item => <ResourceView selected = {this.props.district} district = {item.District} area={item.Area} name_of_organisation = {item["Name of organisation"]} contact = {item.Contact} verified = {item["Verified (Y/N)"]} verificationTime = {item["Verification Time"]} remarks = {item.Remark} />);
        return(
            <div class="table-responsive container content">
                <table class="table table-bordered table-hover">
                    <thead style = {{backgroundColor:"#1f1c1c",color:"white"}}>
                        <tr>
                            <th scope="col">DISTRICT</th>
                            <th scope="col">AREA</th>
                            <th scope="col">NAME OF ORGANISATION</th>
                            <th scope="col">CONTACT</th>
                            <th scope="col">VERIFIED</th>
                            <th scope="col">VERIFICATION TIME</th>
                            <th scope="col">REMARK</th>
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

export default Home_care_packages;