import './home.css'
import { useState } from 'react';
import { useCourse } from '../../hooks/useCourse'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CourseType } from '../../types/typesComponent'



export const FormUpdateCourse = (props: CourseType) => {

    const [name, setName] = useState('')
    const [year, setYear] = useState('')

    const { CourseUpdate } = useCourse();

    function handleNameChange(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value)
    }
    function handleYearChange(event: React.FormEvent<HTMLInputElement>) {
        setYear(event.currentTarget.value)
    }

    return (
        <div className="headerContentContainerUpdate">
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
                        type='year'
                        name='year'
                        placeholder='year'
                        value={year}
                        onChange={handleYearChange}
                    />
                </div>
                <button className='form-input-btn' type='submit' onClick={() => CourseUpdate(name, year, props.id)}>
                    Update Course
                </button>
            </form>
        </div>
    )
};


