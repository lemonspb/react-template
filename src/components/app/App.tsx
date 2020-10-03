import React, { Component } from 'react';
import './styles.css';
import Title from './Title/index';
class App extends Component {
    render() {
        const a = '19';
        return (
            <div>
                <Title name="миша" />
            </div>
        );
    }
}

export default App;
