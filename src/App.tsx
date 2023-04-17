import React, {FC} from 'react';

import './App.styles.scss';
import {DashboardRoutes} from "./routes";

const App: FC = () => {
    return (
        <div className="App">
            <DashboardRoutes/>
        </div>
    );
}
export default App;
