import App from '../App';
import { LoginPages } from '../pages/loginPages';
import { NotFoundPages } from '../pages/notFoundPages';
import { HomePages } from '../pages/homePages';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoursePages } from "../pages/coursePages";
import { TsxExplanationPage } from "../pages/tsxExplanationPage";
export const Myroutes = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPages />} />
            <Route path="/" element={<App />} >
                <Route path="/home" element={<HomePages />} />
                <Route path="/course" element={<CoursePages />} />
                <Route path="/tsxExplanation" element={<TsxExplanationPage />} />
            </Route>
            <Route path="*" element={<NotFoundPages />} />
        </Routes >
    </BrowserRouter>
}