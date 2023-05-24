import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import logo from '../../assets/images/logos/logo.svg'
import exitImg from '../../assets/images/symbols/exit.svg'
import {SIDEBAR_DATA} from "../../constants/sidebar";
import {useLocation, useNavigate} from "react-router-dom";
import {pathList} from "../../routes/path";
import cn from 'classnames'

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(pathList.home.path)

    const location = useLocation()
    const navigate = useNavigate()

    const onClickLink = (link) => navigate(link)

    useEffect(() => {
        setActiveLink(location?.pathname)
    }, [location?.pathname])

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} alt={''}/>
            </div>

            <div className={styles.menu}>
                {SIDEBAR_DATA?.map((item, key) =>
                    <div key={key}
                         onClick={() => onClickLink(item?.link)}
                         className={cn(styles.menu_item,
                             item?.isSeparated && styles.menu_item_isSeparated,
                             activeLink === item?.link && styles.menu_item_active)}>
                        <div className={styles.menu_item_img}>
                            <img src={activeLink === item?.link ? item?.activeImage : item?.image} alt={''}/>
                        </div>
                        {item?.title}
                    </div>
                )}
            </div>

            <div className={styles.exit}>
                <img src={exitImg} alt={''}/>
                Sign Out
            </div>
        </div>
    );
};

export default Sidebar;
