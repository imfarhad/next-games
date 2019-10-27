import React from 'react';
import ReactDOM from 'react-dom';
import AzureServiceDashboard from './azure.service.dashboard';
import { Provider } from 'react-redux';
import AppStore from './app.store';

ReactDOM.render(
    <Provider store={AppStore}>
        <AzureServiceDashboard />
    </Provider>, 
    document.getElementById('root'));