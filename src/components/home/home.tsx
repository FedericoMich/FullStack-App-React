import './home.css'
import { useState } from 'react';
import { TypeStudent } from '../../types/typesComponent'
import { Details } from './details'
import { listRepos } from '../../api/apiRepos'
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        console.log(newValue)
    }

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
            <br/> <br/> <br/> onchange -- console.log
            <input type="text" name="alert" onChange={handleChange}></input>
        </div>
    )
};


