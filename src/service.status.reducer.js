/*
const INITIAL_STATE = [
    {
        service: 'virtual-machine',
        zone: 'europe',
        status: 'good'
    },
    {
        service: 'virtual-machine',
        zone: 'us',
        status: 'good'

    }
]
*/

const INITIAL_STATE = [];

const ServiceStatusReducer = (state = INITIAL_STATE, {type, payload}) =>{
    switch(type){
        case 'handle_success':
            return payload;
        default:
            return state
    }
}

export default ServiceStatusReducer;