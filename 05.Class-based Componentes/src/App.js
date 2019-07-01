import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'

class App extends React.Component {

    yourMethod() {

    }

    render() {
        return (
            <div>
                <Header/>
                <MainContent/>
                <Footer/>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default App