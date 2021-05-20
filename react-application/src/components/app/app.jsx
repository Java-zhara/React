import React from 'react';

import { AdsFirst } from '../adsFirst';

import { AdsSecond } from '../adsSecond';

// import { Header } from '../header';

import { Img } from '../img/img';

// import { Nav } from '../nav';

import './app.css'

export const App = () => {
    return (
        <div className='app'>
            {/* <Header />
            <Nav />  */}
            <AdsFirst />
            <AdsSecond />
            <Img />           
        </div>
    );
}