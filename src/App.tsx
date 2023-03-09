import React from 'react';
import './App.css';

import {Sidebar, Feed, Widgets} from './components';

function App() {
  return (
    <div className="app">
        {/* {sidebar} */}
        <Sidebar />

        {/* {feed} */}
        <Feed />

        {/* {widgets} */}
        <Widgets />
    </div>
  );
}

export default App;
