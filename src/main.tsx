import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App.tsx';

import 'tippy.js/dist/tippy.css';
import './assets/scss/tailwind.scss';
import './assets/scss/main.scss';
import './assets/scss/custom.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
