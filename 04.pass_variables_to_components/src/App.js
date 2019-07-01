import React from 'react';
import ContactCard from "./ContactCard";

function App(props) {
    return (
        <div>
            <ContactCard
                name="01"
                imageUrl="http://placekitten.com/300/200"
                phone="001"
                email="001@gmail.com"
            />
            <ContactCard
                name="02"
                imageUrl="http://placekitten.com/300/200"
                phone="002"
                email="002@gmail.com"/>
            <ContactCard
                name="03"
                imageUrl="http://placekitten.com/300/200"
                phone="003"
                email="003@gmail.com"/>
            <ContactCard
                name="04"
                imageUrl="http://placekitten.com/300/200"
                phone="004"
                email="004@gmail.com"/>
        </div>
    );
}

export default App;