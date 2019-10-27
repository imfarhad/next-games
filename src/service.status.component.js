import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiRequest } from './service.action'

class ServiceStatus extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: Date.now()
        }
    }
    componentDidMount(){
        this.props.onApiRequest();
        setInterval(
            () => this.props.onApiRequest(), 5000
        )
    }

    componentWillUnmount(){
        clearInterval();
    }

    render(){
        return(
            <div>
                <p><i>(After necessary modification this page will show the status of the azure services. Currently it fetches data from other REST service providers)</i></p>
                <table>
                    <tbody>
                    <tr>
                        <td>Service Name</td><td>Zone</td><td>Status</td>
                    </tr>
                    {
                        this.props.localState.map((data,id)=>{
                            return(
                                <tr key={id}>
                                    <td>{data.userId}</td>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>                                
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>                
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    localState: state.service,
})

const mapDispatchToProps = {
    onApiRequest: apiRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceStatus);