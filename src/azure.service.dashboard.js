import React, { Component } from 'react';
import ServiceStatus from './service.status.component';
import IncidentLog from './incident.log.component';

class AzureServiceDashboard extends Component {
    constructor(){
        super();
        this.state = {
            route: 'home',
            isService: false,
            isIncident: false
        }
    }
    serviceClick = () =>{
        this.setState({
            route: 'service',
            isService: !this.state.isService,
        }, ()=>{})
    }

    incidentClick = () =>{
        this.setState({
            route: 'incident',
            isIncident: !this.state.isIncident
        }, ()=>{})
    }

    render(){
        return(
            <div>
                <p><i>(A simple template for developing a dashboard consuming REST data from external systems using React and Redux)</i></p>
                <h1>Azure Service Dashboard</h1>
                <p><i>(Click on the item to expand)</i></p>
                <ul>
                    <li onClick={()=>this.serviceClick()}><h2>Service Status</h2></li>
                    {
                        this.state.route==='service' && this.state.isService && <ServiceStatus/>
                    }
                    <li onClick={()=>this.incidentClick()}><h2>Incident Logs</h2></li>
                    {
                        this.state.route==='incident' && this.state.isIncident && <IncidentLog/>
                    }
                </ul>
            </div>
        )
    }
}

export default AzureServiceDashboard;