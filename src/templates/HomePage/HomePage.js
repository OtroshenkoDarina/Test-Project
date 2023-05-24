import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/MainLayout";
import NewAdditionsBlock from "../../components/NewAdditionsBlock/NewAdditionsBlock";
import {ADDITIONS_DATA} from "../../constants/additions";
import ProgressOverview from "../../components/ProgressOverview/ProgressOverwiev";
import {AVAILABLE_LEVELS, LEVELS_IMAGES} from "../../constants/levels";
import LevelProgress from "../../components/LevelProgress/LevelProgress";
import {useSelector} from "react-redux";
import astronautImg from '../../assets/images/astronaut.svg'
import coursesImg from '../../assets/images/symbols/courses_white.svg'
import folderImg from '../../assets/images/symbols/folder.svg'
import documentImg from '../../assets/images/symbols/document_colored.svg'
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import useHandleAdditions from "../../hooks/additions/useHandleAdditions";

const HomePage = () => {
    const user = useSelector(state => state?.user?.info)
    const [newAdditions, setNewAdditions] = useState([])

    const handleAdditions = useHandleAdditions()

    useEffect(() => {
        handleAdditions.getNewAdditions().then(res => setNewAdditions(res))
    }, [])

    return (
        <MainLayout>

            <div className={styles.topBlock}>
                <ProgressOverview/>

                <div className={styles.statsWrapper}>

                    <div className={styles.progressBg}>
                        <div className={styles.levelsList}>
                            {AVAILABLE_LEVELS?.map((item, key) => <div key={key} className={styles.levelsList_item}>

                                {item === user?.level &&
                                <img className={styles.astronautImg} src={astronautImg} alt={''}/>}

                                {item === user?.level
                                    ? <LevelProgress level={user?.level} progress={100 - user?.toReachNextLvl}
                                                     imageWidth={100}/>
                                    :
                                    <img src={LEVELS_IMAGES[item]} alt={''} className={styles.levelsList_item_image}/>}
                            </div>)}
                        </div>

                        <p className={styles.progressCompleted}>{100 - user?.toReachNextLvl}% Completed</p>
                    </div>

                    <div className={styles.statsList}>
                        <div className={styles.statsList_item}>
                            <div className={styles.statsList_item_progress}>
                                <CircularProgress
                                    progress={user?.coursesCompleted / user?.coursesCount * 100}
                                    image={coursesImg}/>
                            </div>
                            <div>
                                <p className={styles.statsList_item_value}><span>{user?.coursesCompleted}</span> / {user?.coursesCount}</p>
                                <p className={styles.statsList_item_text}>Courses completed</p>
                            </div>
                        </div>

                        <div className={styles.statsList_item}>
                            <div className={styles.statsList_item_progress}>
                                <CircularProgress
                                    progress={user?.foldersAdd / user?.foldersCount * 100}
                                    image={folderImg}/>
                            </div>
                            <div>
                                <p className={styles.statsList_item_value}><span>{user?.foldersAdd}</span> / {user?.foldersCount}</p>
                                <p className={styles.statsList_item_text}>Folders add</p>
                            </div>
                        </div>

                        <div className={styles.statsList_item}>
                            <div className={styles.statsList_item_progress}>
                                <CircularProgress
                                    progress={user?.booksRead / user?.booksCount * 100}
                                    image={documentImg}/>
                            </div>
                            <div>
                                <p className={styles.statsList_item_value}><span>{user?.booksRead}</span> / {user?.booksCount}</p>
                                <p className={styles.statsList_item_text}>Books read</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className={styles.additionsList}>
                {newAdditions?.map((item, key) => <NewAdditionsBlock addition={item} key={key}/>)}
            </div>
        </MainLayout>
    );
};

export default HomePage;
