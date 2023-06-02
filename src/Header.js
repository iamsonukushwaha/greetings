import React from 'react';
import avatar from './avatar.jpg'
import './App.css';



const MyLink = () => (
    <React.Fragment>
        <a className='App-link' href='https://singlebucks.blogspot.com/' rel="noreferrer" target='_blank'>https://singlebucks.blogspot.com</a>
        <br />
        <br />
        <a className='App-link' href='https://github.com/flyingsonu122' rel="noreferrer" target='_blank'>https://github.com/flyingsonu122</a>
        <br />
    </React.Fragment>
)

function Header() {
    return (
        <div className='App-header'>
            <img src={avatar} alt="avatar" className='App-logo' />
            <h1>Sonu Kumar Kushwaha</h1>
            <MyLink />
        </div>
    );
}

export default Header;