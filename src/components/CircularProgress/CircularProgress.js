import React from 'react';
import styles from './styles.module.scss'
import 'react-circular-progressbar/dist/styles.css';
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import {LEVELS_IMAGES} from "../../constants/levels";

const CircularProgress = ({progress, image}) => {
    return (
        <div className={styles.levelProgress}>
            <CircularProgressbarWithChildren
                value={progress}
                strokeWidth={2}
                styles={buildStyles({
                    pathColor: '#FFFFFF',
                    textColor: '#FFFFFF',
                    trailColor: 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: '#28292B',
                })}
            >
                <div className={styles.progressContent}>
                    <img src={image} alt={''}/>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default CircularProgress;
