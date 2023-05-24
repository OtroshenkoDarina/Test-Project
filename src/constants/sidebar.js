import {pathList} from "../routes/path";
import homeImg from '../assets/images/symbols/home.svg'
import homeImgWhite from '../assets/images/symbols/home_white.svg'
import coursesImg from '../assets/images/symbols/courses.svg'
import coursesImgWhite from '../assets/images/symbols/courses_white.svg'
import librariesImg from '../assets/images/symbols/libraries.svg'
import librariesImgWhite from '../assets/images/symbols/libraries_white.svg'
import statsImg from '../assets/images/symbols/stats.svg'
import statsImgWhite from '../assets/images/symbols/stats_white.svg'
import guideImg from '../assets/images/symbols/document.svg'
import guideImgWhite from '../assets/images/symbols/document_white.svg'

export const SIDEBAR_DATA = [
    {title: 'Home', image: homeImg, activeImage: homeImgWhite, link: pathList.home.path},
    {title: 'Courses', image: coursesImg, activeImage: coursesImgWhite, link: pathList.courses.path},
    {title: 'Libraries', image: librariesImg, activeImage: librariesImgWhite, link: pathList.libraries.path},
    {title: 'Statistics', image: statsImg, activeImage: statsImgWhite, link: pathList.statistics.path},
    {title: 'Users guideline', image: guideImg, activeImage: guideImgWhite, link: pathList.usersGuideline.path,
        isSeparated: true},
]
