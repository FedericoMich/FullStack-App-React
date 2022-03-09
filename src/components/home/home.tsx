import './home.css'
import { useState } from 'react';
import { TypeStudent } from '../../types/typesComponent'
import { Details } from './details'
import { listRepos } from '../../api/apiRepos'
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {

   useAuth();


    const myStudent: TypeStudent = {
        name: "federico",
        surname: "Micca",
        login: "",
        session: false
    }

    const [student] = useState<TypeStudent>(myStudent);

    return (
        <div className="homeContainer">
            <h1>GitClass ADMIN</h1>
            <Details {...student} />
            <button onClick={() => listRepos()}>API Call (Log)</button>
        </div>
    )
};


