import React from 'react';

import { Header } from './Header/index.jsx';
import { Sidebar } from './Sidebar/index.jsx';
import { Main } from './Main/index.jsx';

import 'tailwindcss/tailwind.css';
import '../style/main.css';

export const App = () => (
  <div className="page-container">
    <div className="page-content h-screen grid grid-cols-12" id="page-content">
      <Sidebar/>
      <div className="container-fluid col-start-2 col-span-12 ">
        <Header />
        <Main/>
      </div>
    </div>
  </div>
);
