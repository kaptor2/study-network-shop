import './index.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './components/App/App';
import { ErrorBoundry } from './components/ErrorBoundry/ErrorBoundry';
import { StoreService } from './services/StoreService';
import { ServiceProvider } from './components/ServiceContext/ServiceContext'

import { store } from './store';

const storeService = new StoreService();

const MainStructure = (
    <Provider store={store}>
        <ErrorBoundry>
            <ServiceProvider value={storeService}>
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>
);

ReactDom.render(MainStructure, document.getElementById('root'));