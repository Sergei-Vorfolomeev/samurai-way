import React from 'react';
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/premium-vector/seamless-vector-space-pattern-cute-baby-illustration_259451-916.jpg"></img>
            </div>
            <div className={styles.description}>
                ava+description
            </div>
        </div>
    );
};
