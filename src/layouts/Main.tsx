import React, { ReactNode } from 'react'; // Import React and ReactNode
import styles from "./Main.module.css";

type MainProps = {
    children: React.ReactNode
}

export default function Main({ children } : MainProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
