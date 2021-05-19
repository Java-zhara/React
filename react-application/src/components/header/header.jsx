import React from 'react';
import './header.css'
import nhl from './assest/nhl.jpg'

export class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={nhl} alt='nhl' />
                <div>Компонент Header</div>
            </div>
        )
    };
}