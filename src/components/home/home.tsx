import './home.css'
import { useState } from 'react';
import {TypeStudent} from '../../types/typesComponent'

export const Home = () => {


    const myStudent: TypeStudent = {
        name: "ciao",
        surname: "",
        login: "",
    }

    const [student, setStundent] = useState<TypeStudent>(myStudent);


    return (
        <div className="homeContainer">
            {student.surname}
            <h1>ciao</h1>
        </div>
    )
};


