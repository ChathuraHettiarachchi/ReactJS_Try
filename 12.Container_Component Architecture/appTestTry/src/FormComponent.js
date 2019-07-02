import React from "react";

function FormComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                value={props.firstName}
                name="firstName"
                placeholder="First name"
                onChange={props.handleChange}
            />
            <br/>
            <input
                type="text"
                value={props.lastName}
                name="lastName"
                placeholder="Last name"
                onChange={props.handleChange}
            />
            <br/>
            <input
                type="checkbox"
                name="isFriendly"
                checked={props.isFriendly}
                onChange={props.handleChange}
            /> is friendly?
            <br/>
            <input
                type="radio"
                name="gender"
                value="male"
                checked={props.gender === 'male'}
                onChange={props.handleChange}
            />Male
            <input
                type="radio"
                name="gender"
                value="female"
                checked={props.gender === 'female'}
                onChange={props.handleChange}
            />Female
            <br/>
            <p>Select your favourite color</p>
            <select value={props.favColor} onChange={props.handleChange} name="favColor">
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="Yellow">Yellow</option>
            </select>
            <h2>Your favourite color is {props.favColor}</h2>
            <button>Submit</button>
        </form>
    )
}

export default FormComponent