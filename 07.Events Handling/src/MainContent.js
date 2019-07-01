import React from 'react'

function MainContent() {
    return (
        <main>
            <div>
                <p>This is where my content will go on</p>
                <img src="https://placeimg.com/640/480/arch" alt="" onMouseOver={handleHover}/>
            </div>
            <button onClick={handleClick}>Click me</button>
        </main>
    )
}

function handleClick(){
    console.log('This is button click')
}

function handleHover(){
    console.log('This is mouse hover')
}

export default MainContent