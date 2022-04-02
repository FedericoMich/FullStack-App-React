import App from '../App';
import { LoginPages } from '../pages/loginPages';
import { NotFoundPages } from '../pages/notFoundPages';
import { HomePages } from '../pages/homePages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TsxExplanationPage } from "../pages/tsxExplanationPage";
import { CoursePage } from "../pages/coursePage";
export const Myroutes = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPages />} />
            <Route path="/" element={<App />} >
                <Route path="/home" element={<HomePages />} />
                <Route path="/course/:id" element={<CoursePage />} /> 
                <Route path="/tsxExplanation" element={<TsxExplanationPage />} />        
            </Route>
            <Route path="*" element={<NotFoundPages />} />
        </Routes >
    </BrowserRouter>
}