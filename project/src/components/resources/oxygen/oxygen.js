import React from 'react'
import ResourceView from './resourceView'

class Oxygen extends React.Component{
    constructor(){
        super();
        this.state = {
            resourceData : []
        }
    }
    componentDidMount(){
        fetch("https://sheetdb.io/api/v1/cdea2ba4h0tfe/?sheet=Oxygen")
        .then(res => res.json())
        .then(result => {
            this.setState({resourceData : result});
        })
        .catch(error => {console.log(error)});
    }
    render(){
        const allDataArray = this.state.resourceData.map(item => <ResourceView selected = {this.props.district} district = {item.District} area={item.Area} name = {item.Name} product = {item.Product} contact = {item.Contact} status = {item.Status} verificationTime = {item["Verification time"]} availabilityStatus = {item["Availability Status"]} comments = {item.Comments}/>);
        return(
            <div class="table-responsive container content">
                <table class="table table-bordered table-hover">
                    <thead style = {{backgroundColor:"#1f1c1c",color:"white"}}>
                        <tr>
                            <th scope="col">DISTRICT</th>
                            <th scope="col">AREA</th>
                            <th scope="col">NAME</th>
                            <th scope="col">PRODUCT</th>
                            <th scope="col">CONTACT</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">VERIFICATION TIME</th>
                            <th scope="col">AVAILABILITY STATUS</th>
                            <th scope="col">COMMENTS</th>
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

export default Oxygen;