import './home.css'
import { useState } from 'react';
import { TypeStudent } from '../../types/typesComponent'

export const Home = () => {


    const myStudent: TypeStudent = {
        name: "federico",
        surname: "Micca",
        login: "",
    }

    const [student, setStundent] = useState<TypeStudent>(myStudent);


    return (
        <div className="homeContainer">
            <h1>GitClass ADMIN</h1>
            <h3>benvenuto</h3>
            {student.surname}{student.name}

        </div>
    )
};


