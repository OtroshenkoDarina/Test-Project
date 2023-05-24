import React from 'react';
import styles from './styles.module.scss'
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import LangSelect from "../LangSelect/LangSelect";
import notificationImg from '../../assets/images/symbols/notification.svg'
import {useSelector} from "react-redux";

const Header = () => {
    const user = useSelector(state => state?.user?.info)

    return (
        <div className={styles.header}>
            <HeaderSearch/>

            <div className={styles.header_info}>
                <LangSelect/>

                <div className={styles.notification}>
                    <img src={notificationImg} alt={''} width={24} height={24}/>
                </div>

                <div className={styles.user}>
                    <div>
                        <p className={styles.user_name}>{user?.name}</p>
                        <p className={styles.user_status}>{user?.status}</p>
                    </div>
                    <div className={styles.user_image}>
                        {user?.isOnline && <div/>}
                        <img src={user?.photo} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
