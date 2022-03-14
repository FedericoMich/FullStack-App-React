import App from '../App';
import { LoginPages } from '../pages/loginPages';
import { NotFoundPages } from '../pages/notFoundPages';
import { HomePages } from '../pages/homePages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CorsoPages} from "../pages/corsoPages";

export const Myroutes = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPages />} />
            <Route path="/" element={<App />} >
                <Route path="/home" element={<HomePages />} />
                <Route path="/corso" element={<CorsoPages />} />
            </Route>
            <Route path="*" element={<NotFoundPages />} />
        </Routes >
    </BrowserRouter>
}