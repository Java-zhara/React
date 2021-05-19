import React from 'react';
import './header.css'
import logo from './assets';

export class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='' />
                Компонент Header</div>
        )
    };
}