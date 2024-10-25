import React from "react";
import styles from "./services.module.css";

const ServicePage = () => {
    return (
        <div>
            <h3 className={styles.pink}>Welcome to our services</h3>
            <ul>
                <li><a href="/services/webdesigning">Web Designing</a></li>
            </ul>
        </div>
    )
} 

export default ServicePage;