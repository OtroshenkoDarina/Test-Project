import React from 'react';
import styles from './styles.module.scss'
import hand from '../../assets/images/symbols/wavingHand.svg'
import {useSelector} from "react-redux";
import LevelProgress from "../LevelProgress/LevelProgress";

const ProgressOverview = () => {
    const user = useSelector(state => state?.user?.info)

    return (
        <div className={styles.progressOverview}>
            <p className={styles.title}>Hey, {user?.name}! <img src={hand} alt={''}/></p>
            <p className={styles.text}>Here’s complex overview of your progress</p>
            <div className={styles.progress}>
                <LevelProgress level={user?.level} withText progress={100 - user?.toReachNextLvl} imageWidth={160}/>
            </div>
            <p className={styles.text}>{user?.toReachNextLvl}% to reach next level</p>
        </div>
    );
};

export default ProgressOverview;
