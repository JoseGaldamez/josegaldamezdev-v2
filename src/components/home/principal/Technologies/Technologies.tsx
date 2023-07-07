import React from 'react'

import reactIcon from '../../../../assets/icons/React-icon.png';
import nodeIcon from '../../../../assets/icons/node-js-icon.png';
import angularIcon from '../../../../assets/icons/angular-icon.png';
import nestIcon from '../../../../assets/icons/nestjs-icon.png';
import flutterIcon from '../../../../assets/icons/flutter_icon.png';
import mongoIcon from '../../../../assets/icons/mongo-icon.png';
import firebaseIcon from '../../../../assets/icons/firebase-icon.png';
import reduxIcon from '../../../../assets/icons/redux-icon.png';
import typeScriptIcon from '../../../../assets/icons/typescript_icon.png';
import nextIcon from '../../../../assets/icons/next-js-icon.png';
import dockerIcon from '../../../../assets/icons/docker-icon.png';
import github from '../../../../assets/icons/github-icon.png';

import styles from './Technologies.module.css';
import Image from 'next/image';

export const Technologies = () => {
    return (
        <div className={styles.techonologies}>
            <div className={styles.techonologies__title}>
                <div className={styles.techonologies__title__text}>
                    Tecnologías
                </div>
            </div>
            <div className={styles.techonologies__content}>
                <div className={styles.techonologies__content__left}>
                    <p>Al ser un desarrollador fullstack, tengo conocimientos en el desarrollo de aplicaciones web y móviles, tanto en el frontend como en el backend.</p>
                    <p>En el día a día trabajo con ReactJS en el frontend y NodeJS en el backend, ambas con Typescript.</p>
                    <p>Sin embargo también domino frameworks como Angular para el fronend y NestJS para el backend.</p>
                    <p>Hablando de desarrollo de aplicaciones móviles, manejo Flutter y he experimentado con React Native.</p>
                </div>
                <div className={styles.techonologies__content__right}>

                    <div className={styles.techonologies__content__right_item}>
                        <Image src={reactIcon} alt="ReactJS" />
                        <Image src={nodeIcon} alt="NodeJS" />
                        <Image src={angularIcon} alt="Angular" />
                        <Image src={nextIcon} alt="NextJS" />
                    </div>
                    <div className={styles.techonologies__content__right_item}>
                        <Image src={nestIcon} alt="NestJS" />
                        <Image src={flutterIcon} alt="Flutter" />
                        <Image src={mongoIcon} alt="MongoDB" />
                        <Image src={dockerIcon} alt="Docker" />
                    </div>
                    <div className={styles.techonologies__content__right_item}>
                        <Image src={firebaseIcon} alt="Firebase" />
                        <Image src={reduxIcon} alt="Redux" />
                        <Image src={typeScriptIcon} alt="Typescript" />
                        <Image src={github} alt="github" />
                    </div>





                    <div className={styles.techonologies__content__right_item}>
                        <Image src={reactIcon} alt="ReactJS" />
                        <Image src={nodeIcon} alt="NodeJS" />
                        <Image src={angularIcon} alt="Angular" />
                        <Image src={nextIcon} alt="NextJS" />
                    </div>
                    <div className={styles.techonologies__content__right_item}>
                        <Image src={nestIcon} alt="NestJS" />
                        <Image src={flutterIcon} alt="Flutter" />
                        <Image src={mongoIcon} alt="MongoDB" />
                        <Image src={dockerIcon} alt="Docker" />
                    </div>
                    <div className={styles.techonologies__content__right_item}>
                        <Image src={firebaseIcon} alt="Firebase" />
                        <Image src={reduxIcon} alt="Redux" />
                        <Image src={typeScriptIcon} alt="Typescript" />
                        <Image src={github} alt="github" />
                    </div>

                </div>

            </div>
        </div>
    )
}
