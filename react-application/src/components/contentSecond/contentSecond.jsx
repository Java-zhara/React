import React from 'react';

import styles from './content.module.css'

export const ContentSecond = () => {
    return (
        <content className={styles.content}>
            <article className={styles.article}>article</article>
            <article className={styles.article}>article</article>
            <article className={styles.article}>article</article>
        </content>
    );
}