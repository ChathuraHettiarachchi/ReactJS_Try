import React, {Component} from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Loading..."
        };
        this.handleApiCall = this.handleApiCall.bind(this)
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => this.handleApiCall(data))
    }

    handleApiCall(data) {
        this.setState(prevState => {
            return {
                name: data.name
            }
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default App
