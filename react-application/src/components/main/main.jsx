import React from 'react';

import { Aside } from './aside/aside';

import styles from './main.module.css'

export const Main = () => {
    return (
        <main className={styles.main}>
            <Aside />
            <div>main</div>
            <Aside />
        </main>
    );
}