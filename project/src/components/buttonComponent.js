import React from 'react'

function ButtonComponent(){
    return(
            <center>
                    <div className = "selection container" style = {{marginLeft:5}}>
                        <div classname = "row">
                            <div className = "col-sm-7" style = {{paddingLeft: 0}}>
                                <img src = {"https://pbs.twimg.com/media/E0NSNHhVcAE-z0K.jpg"} style = {{width:"100%"}} alt = "Swasthya Bhawan Registration Process Image"className = "img-responsive"/>
                            </div>
                            <div className = "col-sm-5" style = {{paddingLeft: "50px"}}>
                                <span>FOR MORE INFORMATION (for bed availability): <a href = {"https://www.wbhealth.gov.in/pages/corona/bed_availability_pvt"}>https://www.wbhealth.gov.in/pages/corona/bed_availability_pvt </a></span>	
                                <br/>
                                <br/>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <tbody>
                                           <tr>
                                               <td>Swastho Bhawan Helpline: (for bed availability)</td>
                                               <td>1800313444222</td>
                                           </tr>
                                           <tr>
                                               <td>Telemedicine</td>
                                               <td>3323576001</td>
                                           </tr>
                                           <tr>
                                               <td>Ambulance</td>
                                               <td>3340902929</td>
                                           </tr>
                                           <tr>
                                               <td>Covid Query </td>
                                               <td>3340902929</td>
                                           </tr>
                                        </tbody>
                                    </table>
                                    <span>PINT (Plasma In Need for Transfusion)<a href = {"http://pintnetwork.com/"}>http://pintnetwork.com/ </a></span>	
                                </div> 
                            </div>
                            
                        </div>
                    </div>
            </center>
    )
}

export default ButtonComponent