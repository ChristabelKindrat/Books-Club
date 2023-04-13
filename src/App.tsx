import React, {FC} from 'react';

import './App.css';
import {DashboardRoutes} from "./routes";

const App: FC = () => {
    return (
        <div className="App">
            <DashboardRoutes/>
        </div>
    );
}
export default App;
