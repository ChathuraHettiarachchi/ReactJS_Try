import React, {Component} from "react"

class App extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: true,
            gender: '',
            favColor: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this is to avoid a bug that can occur when direct targeting event.target

        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First name"
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last name"
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="checkbox"
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                /> is friendly?
                <br/>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === 'male'}
                    onChange={this.handleChange}
                />Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === 'female'}
                    onChange={this.handleChange}
                />Female
                <br/>
                <p>Select your favourite color</p>
                <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="Yellow">Yellow</option>
                </select>
                <h2>Your favourite color is {this.state.favColor}</h2>
                <button>Submit</button>
            </form>
        )
    }
}

export default App