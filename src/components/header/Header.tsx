import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
    const [burgerMenuIsOpen, setBurgerMenuStatus] = useState(false);

    return (
        <header>
            <nav className={burgerMenuIsOpen ? `${styles.topnav} ${styles.responsive}` : styles.topnav}>
                <NavLink exact={true} to="/" activeClassName={styles.isActive}>
                    <div>Home</div>
                </NavLink>

                <NavLink exact={true} to="/gallery" activeClassName={styles.isActive}>
                    <div>Gallery</div>
                </NavLink>

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
