import React, { useState } from 'react';

import styles from './Header.module.scss';

function Header() {
    const [burgerMenuIsOpen, setBurgerMenuStatus] = useState(false);

    return (
        <header>
            <nav className={burgerMenuIsOpen ? `${styles.topnav} ${styles.responsive}` : styles.topnav}>
                <a href="#home" className={styles.active}>
                    Home
                </a>
                <a>News</a>
                <a>Contact</a>
                <a>About</a>

                <div className={styles.icon}>
                    <div
                        id="burgerMenuButton"
                        className={burgerMenuIsOpen ? `${styles.menuBtnOpen} ${styles.menuBtn}` : styles.menuBtn}
                        onClick={() => {
                            setBurgerMenuStatus(!burgerMenuIsOpen);
                        }}
                    >
                        <div className={styles.menuBtnBurger}></div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
