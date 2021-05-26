import React from 'react';

// import { AdsFirst } from '../adsFirst';

// import { AdsSecond } from '../adsSecond';

import { Header } from '../header';

// import { Img } from '../img/img';

import { Nav } from '../nav';

import { ContentFirst } from '../content/contentFirst';

import { Main } from '../main';

import styles from './app.module.css'
import { ContentSecond } from '../contentSecond/contentSecond';
import { Footer } from '../footer/footer';

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Nav />
            <ContentFirst />
            <Main />
            <ContentSecond />
            <Footer />
            {/* <AdsFirst />
            <AdsSecond />
            <Img /> */}
        </div>
    );
}