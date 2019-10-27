import { combineReducers } from 'redux';
import ServiceStatusReducer from './service.status.reducer';
import IncidentLogReducer from './incident.log.reducer';

const allReducer = combineReducers({
    service: ServiceStatusReducer,
    incident: IncidentLogReducer
})

export default allReducer;