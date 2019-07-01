import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'

class App extends Component {

    constructor () {
        super();
        this.state = {
            name: 'Chathura',
            footer: 'This is state set values'
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <MainContent/>
                <Footer footerdata={this.state.footer}/>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default App