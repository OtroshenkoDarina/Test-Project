import React, {useState} from 'react';
import styles from './styles.module.scss'
import searchImg from '../../assets/images/symbols/search.svg'

const HeaderSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const onChangeSearchQuery = (e) => {
        setSearchQuery(e?.target?.value)
    }

    return (
        <div className={styles.headerSearch}>
            <img src={searchImg} alt={''}/>
            <input
                placeholder={'Search'}
                value={searchQuery}
                onChange={onChangeSearchQuery}
                className={styles.headerSearch_input}
            />
        </div>
    );
};

export default HeaderSearch;
