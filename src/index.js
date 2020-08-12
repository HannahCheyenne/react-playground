import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RegistrationForm from './RegistrationForm/RegistrationForm';

ReactDOM.render(
    <BrowserRouter>
        <RegistrationForm />
    </BrowserRouter>, 
    document.getElementById('root'));