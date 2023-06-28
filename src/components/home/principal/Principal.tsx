import React from 'react'

import styles from './Principal.module.css';
import { Networks } from './Networks';

export const Principal = () => {
    return (
        <section className={styles.section}>
            <div className={styles.section__title}>
                <div className={styles.section__title__name}>
                    Jose
                </div>
                <div className={styles.section__title__name}>
                    Galdamez
                </div>
                <div className={styles.section__title__job}>
                    Fullstack developer
                </div>
            </div>
            <div className={styles.section__title__footer}>
                <div className={styles.section__title__footer_absolute}>

                    <div className={styles.section__title__footer_networks}>
                        <Networks />
                    </div>
                    <div className={styles.section__title__footer_welcome}>
                        welcome
                    </div>
                </div>
            </div>
        </section>
    )
}
