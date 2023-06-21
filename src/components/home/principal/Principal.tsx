import React from 'react'

import styles from './Principal.module.css';

export const Principal = () => {
    return (
        <section className={styles.section}>
            <div className={styles.section__title}>
                <div>
                    Jose
                </div>
                <div>Galdamez</div>
                <div>Fullstack developer</div>
            </div>
            <div className={styles.footer__principal}>
                <div>
                    redes sociales
                </div>
                <div>
                    welcome
                </div>
            </div>
        </section>
    )
}
