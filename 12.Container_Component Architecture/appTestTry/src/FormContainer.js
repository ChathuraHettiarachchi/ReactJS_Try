import React, {Component} from "react"
import FormComponent from "./FormComponent"

class FormContainer extends Component {
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
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
        )
    }
}

export default FormContainer