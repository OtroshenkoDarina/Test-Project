import React, {useEffect} from 'react';
import styles from './styles.module.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import useHandleUser from "../../hooks/user/useHandleUser";

const MainLayout = ({children}) => {

    const handleUser = useHandleUser()

    useEffect(() => {
        handleUser.fetchInfo()
    }, [])

    return (
        <div className={styles.mainLayout}>
            <Sidebar/>
            <div className={styles.page}>
                <Header/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
