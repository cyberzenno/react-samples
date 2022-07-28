import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './store/AuthContext';


const environment = "Live";//Live or Local - this will select which API to use

const localBaseName = "";
const liveBaseName = "/app_5/build";

const baseName = environment == "Live" ? liveBaseName : localBaseName;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider baseName={baseName} environment={environment}>
        <BrowserRouter basename={baseName}>
            <App />
        </BrowserRouter>
    </AuthContextProvider>
);
