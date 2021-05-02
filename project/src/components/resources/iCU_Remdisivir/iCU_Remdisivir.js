import React from 'react'
import ResourceView from './resourceView'

class ICURemdisivir extends React.Component{
    constructor(){
        super();
        this.state = {
            resourceData : []
        }
    }
    componentDidMount(){
        fetch("https://sheetdb.io/api/v1/cdea2ba4h0tfe/?sheet=ICU_Remdisivir")
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
                nameOfCovidHospital = {item["Name of CoVid Hospital"]} 
                contactDetails = {item["Contact Details"]} 
                iCUFacility = {item["ICU facility"]}  
                icuBedsAvailable = {item["ICU beds available"]} 
                icuVerificationDateTime = {item["ICU Verification Date & Time"]} 
                remdesivir = {item.Remdesivir} 
                remdesivirVerificationDateTime = {item["Remdesivir Verification Date & Time"]} 
            />
        );
        let flag = false;
        for(let i = 0;i < allDataArray.length; i = i + 1){
            if(allDataArray.length>0 && (this.props.district.toUpperCase() === allDataArray[i].props.district.toUpperCase()))
                flag = true;
        }
        
        if(flag === true)
        {
            return(
                <div className="table-responsive container content">
                    <table className="table table-bordered table-hover">
                        <thead style = {{backgroundColor:"#1f1c1c",color:"white"}}>
                            <tr>
                                <th scope="col">DISTRICT</th>
                                <th scope="col">NAME OF COVID HOSPITAL</th>
                                <th scope="col">CONTACT DETAILS</th>
                                <th scope="col">ICU FACILITY</th>
                                <th scope="col">ICU BEDS AVAILABLE</th>
                                <th scope="col">ICU VERIFICATION DATE & TIME</th>
                                <th scope="col">REMDESIVIR</th>
                                <th scope="col">REMDESIVIR VERIFICATION DATE & TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDataArray}
                        </tbody>
                    </table>
                </div>
            
            );
        }
        else{
            return(<strong style={{fontSize:"25px"}}>No Available Data.</strong> );
        }
    }
}

export default ICURemdisivir;