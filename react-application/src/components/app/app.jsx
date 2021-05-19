import React from 'react';
import { Header } from '../header';
import { Nav } from '../nav';
import './app.css'

export const App = () => {
    return (
        <div className='app'>
            <Header />
            <Nav />            
            Компонент App            
        </div>
    );
}