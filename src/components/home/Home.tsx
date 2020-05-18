import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div>
                    <h1>
                        Have <strong>YOU</strong> ever been kidnapped by <strong>MARTIANS</strong>?
                    </h1>
                    <button className={styles.buttonYes}>YES</button> <button className={styles.buttonNo}>NO</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
