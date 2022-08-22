// not being used, to be used edit index.js
// switch to "import App from './Api';""
import React, { Component } from 'react'

class App extends Component {
    state = {
        data: []
    };

    // code used when component is inserted in DOM tree
    // pull in API data
    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1';

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data } = this.state;
        
        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>; 
        });

        return <div className="container"><ul>{result}</ul></div>;
    }
}

export default App;