import {Routes, Route} from "react-router-dom";
import {pathList} from "./path";
import HomePage from "../templates/HomePage/HomePage";
import MainLayout from "../layouts/MainLayout/MainLayout";

export default function Routers() {
    return (
        <Routes>
            <Route path={pathList.home.path} element={<HomePage/>}/>
            <Route path={pathList.courses.path} element={<MainLayout><div/></MainLayout>}/>
            <Route path={pathList.libraries.path} element={<MainLayout><div/></MainLayout>}/>
            <Route path={pathList.statistics.path} element={<MainLayout><div/></MainLayout>}/>
            <Route path={pathList.usersGuideline.path} element={<MainLayout><div/></MainLayout>}/>
        </Routes>
    )
}
