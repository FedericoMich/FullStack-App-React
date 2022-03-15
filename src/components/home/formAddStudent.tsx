import './home.css'
import { useState } from 'react';
import { useUser } from '../../hooks/useUser'

export const FormAddStudent = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [repos, setRepos] = useState('')


    const { UserAdd } = useUser(name, surname, repos);


    function handleNameChange(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value)
    }
    function handleSurnameChange(event: React.FormEvent<HTMLInputElement>) {
        setSurname(event.currentTarget.value)
    }
    function handleReposChange(event: React.FormEvent<HTMLInputElement>) {
        setRepos(event.currentTarget.value)
    }


    return (
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
            <button className='form-input-btn' type='submit' onClick={UserAdd}>
                Add User
            </button>
        </form>
    )
};


