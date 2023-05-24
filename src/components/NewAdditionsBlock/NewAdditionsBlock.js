import React from 'react';
import styles from './styles.module.scss'
import plus from '../../assets/images/symbols/plus.svg'
import profileImg from '../../assets/images/symbols/profile.svg'
import dots from '../../assets/images/symbols/dots.svg'
import coursesImg from '../../assets/images/symbols/courses_white.svg'

const NewAdditionsBlock = ({addition}) => {
    return (
        <div className={styles.newAdditionsBlock}>

            <div className={styles.header}>
                <div className={styles.title}>
                    <div className={styles.plus}><img src={plus} alt={''}/></div>
                    {addition?.title}
                </div>

                <div className={styles.dots}><img src={dots} alt={''}/></div>
            </div>

            <div className={styles.stats}>
                <div className={styles.stats_block}>
                    <img src={coursesImg} alt={''}/>
                    {addition?.coursesCount}
                </div>

                <div className={styles.stats_block}>
                    <img src={profileImg} alt={''}/>
                    {addition?.membersCount}
                </div>
            </div>

            <div className={styles.images}>
                {addition?.images?.slice(0, 3)?.map((item, key) =>
                    <div key={key} className={styles.images_item}>
                        <img src={item} alt={''}/>

                        {key === 2 && <div className={styles.images_item_more}>+{addition?.images?.length - 2}</div>}
                    </div>)
                }
            </div>

        </div>
    );
};

export default NewAdditionsBlock;
