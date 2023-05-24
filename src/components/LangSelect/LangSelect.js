import React, {useEffect, useRef, useState} from 'react';
import styles from "./styles.module.scss";
import arrowImg from "../../assets/images/symbols/arrow.svg";
import cn from "classnames";
import {EN_LANG, LANG_OPTIONS} from "../../constants/langs";
import useOutsideClick from "../../hooks/dom/useOutsideClick";
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';

const LangSelect = () => {
    const i18nextLng = localStorage.getItem('i18nextLng') || null;

    const [isOpenLang, setIsOpenLang] = useState(false)
    const [lang, setLang] = useState('')

    const langRef = useRef()
    const langDropdownRef = useRef()
    // const {t, i18n} = useTranslation();

    const onChangeLang = (value) => {
        setLang(value);
        i18n.changeLanguage(value?.value)
            .then(r => {
                console.log('r ---> ', r)
            }).catch(err => {
            console.log('err ---> ', err)
        })
    }

    const sortInAlphabetOrder = (array) => {
        return array?.sort((a, b) => {
            if (a.label < b.label) {
                return -1;
            }
            if (a.label > b.label) {
                return 1;
            }
            return 0;
        })
    }

    const onToggleLang = () => setIsOpenLang(!isOpenLang)
    const onCloseLang = () => setIsOpenLang(false)

    useEffect(() => {
        setLang(LANG_OPTIONS?.find(item => i18nextLng ? item?.value === i18nextLng : item?.value === EN_LANG))
    }, [i18nextLng])

    useOutsideClick(langDropdownRef, onCloseLang, langRef)

    return (
        <div className={styles.lang} onClick={onToggleLang} ref={langRef}>
            {lang?.label}
            <img src={arrowImg} alt={''} className={cn(styles.lang_img, isOpenLang && styles.lang_img_open)}/>

            {isOpenLang && <div className={styles.lang_dropdown} ref={langDropdownRef}>
                {sortInAlphabetOrder(LANG_OPTIONS)?.map((item, key) =>
                    <p
                        key={key}
                        className={styles.lang_dropdown_item}
                        onClick={() => onChangeLang(item)}>
                        {item?.label}
                    </p>)}
            </div>}
        </div>
    );
};

export default LangSelect;
