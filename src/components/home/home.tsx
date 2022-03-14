import './home.css'
import { useState } from 'react';
import { TypeStudent } from '../../types/typesComponent'
import { Details } from './details'
import { listRepos } from '../../api/apiRepos'
import { useAuth } from '../../hooks/useAuth';
import { getUser } from '../../api/apiRepos'
import {useUser} from '../../hooks/useUser'
 
export const Home = () => {

    const [input, setInput] = useState<String>('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [repos, setRepos] = useState('')

    const { createUser, loading, onError, UserAdd  } = useUser( name, surname, repos );


    function handleNameChange(event: any) {
        setName(event.target.value)
    }
    function handleSurnameChange(event: any) {
        setSurname(event.target.value)
    }
    function handleReposChange(event: any) {
        setRepos(event.target.value)
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setInput(e.currentTarget.value)
        console.log(newValue)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(input)
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
            <br /> <br /> <br /> onchange/onclick -- console.log/alert <br /> <br /> <br />
            <input type="text" name="alert" onChange={handleChange}></input>
            <button onClick={handleClick}>Click</button>

            <button onClick={getUser}>Lista Studenti in DB</button>

            <br /> <br /> <br /> <br />

            <form>
                <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='name'
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='surname'
                        name='surname'
                        placeholder='surname'
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </div>
                <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='repos'
                        name='repos'
                        placeholder='repos'
                        value={repos}
                        onChange={handleReposChange}
                    />
                </div>
                <br /> <br />
                <button className='form-input-btn' type='submit' onClick={UserAdd}>
                    Add_User
                </button>
            </form>
        </div>
    )
};


