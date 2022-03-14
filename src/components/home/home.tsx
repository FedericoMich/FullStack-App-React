import './home.css'
import { useState } from 'react';
import { TypeStudent } from '../../types/typesComponent'
import { Details } from './details'
import { listRepos } from '../../api/apiRepos'
import { useAuth } from '../../hooks/useAuth';
import { getUser } from '../../api/apiRepos';
import {Button, TextField} from "@mui/material";
//import {Corso} from "../corso/corso";
 

export const Home = () => {


    const [input, setInput] = useState<String>('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [repos, setRepos] = useState('')
    const [anno, setAnno] = useState('')
    const [titolo, setTitolo] = useState('')

    function handleNameChange(event: any) {
        setName(event.target.value)
    }
    function handleSurnameChange(event: any) {
        setSurname(event.target.value)
    }

    function handleReposChange(event: any) {
        setRepos(event.target.value)
    }

    function handleAnnoChange(event: any) {
        setAnno(event.target.value);
        console.log(anno);
    }

    function handleTitoloChange(event: any) {
        setTitolo(event.target.value);
        console.log(titolo);
    }


    async function addStudent() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nome: name, cognome: surname, repos:repos })
        };
        let response = await fetch('http://localhost:9000/user/addStudent/', requestOptions)
        
        if (response.status === 200) {
            console.log("dajee")
        }
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
            {/*<Corso></Corso>*/}
            <Details {...student} />
            <button onClick={() => listRepos()}>API Call (Log)</button>
            <br /> <br /> <br /> onchange/onclick -- console.log/alert <br /> <br /> <br />
            <input type="text" name="alert" onChange={handleChange}></input>
            <button onClick={handleClick}>Click</button>

            <button onClick={getUser}>CHIAMAAAAAAAAAA</button>

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
                        onChange={handleReposChange}
                    />
                </div>
                <br /> <br />
                <button className='form-input-btn' type='submit' onClick={addStudent}>
                    add User
                </button>
            </form>
            <h2>Non hai ancora nessun corso</h2>
            <Button variant="contained">Crea nuovo corso</Button>
            <TextField
          required
          id="outlined-required"
          label="Titolo"
          defaultValue=""
          value={titolo}
            onChange={handleTitoloChange}
            />
            <TextField
          required
          id="outlined-required"
          label="Anno"
          defaultValue=""
          value={anno}
          onChange={handleAnnoChange}
            />
        </div>
    )
};


