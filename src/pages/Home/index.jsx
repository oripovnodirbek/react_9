import React from "react";
import styles from './index.module.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={styles.homebloc}>
            <h2>Home page</h2>
            <div className={styles.reg}>
               <Link to={'/mainpage'}>MainPage</Link>
            </div>
        </div>
    )
}
export default Home