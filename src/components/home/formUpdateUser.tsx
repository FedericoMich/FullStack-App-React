import './home.css'
import { useState } from 'react';
import { useUser } from '../../hooks/useUser'
import React from 'react'
import { UserType } from '../../types/typesComponent'



export const FormUpdateUser = (props: UserType) => {
    
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [repos, setRepos] = useState('')
    const { UserUpdate } = useUser();

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
        <div className="headerContentContainerUpdateUser">
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
                        placeholder='Surname'
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </div>
                <div className='form-inputs'>
                    <input
                        className='form-input'
                        type='repos'
                        name='repos'
                        placeholder='Repos'
                        value={repos}
                        onChange={handleReposChange}
                    />
                </div>
                <button className='btn41-43 btn-41' type='submit' onClick={() => UserUpdate(name, surname, repos, props.id)}>
                    Update User
                </button>
            </form>
        </div>
    )
};


