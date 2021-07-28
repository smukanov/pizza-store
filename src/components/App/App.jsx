import React, { useEffect } from 'react';
import "./App.css";
import {
    Header, InteractiveBar, FilterValue, List
} from '../index';

const App = () => {

    return (
        <div>
            <div className="container">
                <Header/>
                <InteractiveBar/>
                <FilterValue/>
                <List/>
            </div>
        </div>
    )
}

export default App;