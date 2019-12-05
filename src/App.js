import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FilterableGameTable from './Components/FilterableGameTable';


class App extends Component {
    constructor(props){
        super(props);
        
    }

    render() {

        return (
            <div className="App">
            <header className="App-header">
                <FilterableGameTable/>
                
            </header>
        </div>
    );
    }
}

export default App;
