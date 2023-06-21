import Image from 'next/image';

import logo from '../../assets/icons/logo_jg.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.navbar} >
            <div className={styles.navbar__logo}>
                <Image src={logo} alt="JG" width={50} height={50} />
            </div>
            <menu className={styles.navbar__menu}>
                <ul>
                    <li className={styles.navbar__menu__selected}>Inicio</li>
                    <li>Productos</li>
                    <li>Quienes somos</li>
                    <li>Contacto</li>
                </ul>
            </menu>
        </div>
    )
}
