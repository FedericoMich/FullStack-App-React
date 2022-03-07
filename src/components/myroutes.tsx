import App from '../App';
import { LoginPages } from '../pages/loginPages';
import { NotFoundPages } from '../pages/notFoundPages';
import { HomePages } from '../pages/homePages';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Myroutes = (props: any) => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/login" element={<LoginPages />} />
                <Route path="/home" element={<HomePages />} />
            </Route>
            <Route path="*" element={<NotFoundPages />} />
        </Routes >
    </BrowserRouter>
}