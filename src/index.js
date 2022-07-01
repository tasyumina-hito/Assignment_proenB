import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Functions from './pages/Functions/Functions';
import Hosting from './pages/Hosting/Hosting';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Storage from './pages/Storage/Storage';
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './dashboardTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <HashRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route path="authentication" element={<Authentication />} />
            <Route path="database" element={<Database />} />
            <Route path="functions" element={<Functions />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="machine-learning" element={<MachineLearning />} />
            <Route path="storage" element={<Storage />} />
          <Route element={<Authentication />} />
          </Route>
      </Routes>

    </HashRouter>
  </ThemeProvider>
);
