import './home.css'
import { useAuth } from '../../hooks/useAuth';
import { getUser } from '../../api/apiRepos'
import { getCourse } from '../../api/apiRepos'

import {FormAddStudent} from './formAddStudent'
import {FormAddCourse} from './formAddCourse'


export const Home = () => {

    useAuth();

   
    return (
        <div className="homeContainer">
            <h1>GitClass ADMIN</h1>
            <button onClick={getUser}>Lista Studenti in DB</button>
            <button onClick={getCourse}>Lista Corsi in DB</button>

            <FormAddStudent />
            
            <FormAddCourse />

        </div>
    )
};


