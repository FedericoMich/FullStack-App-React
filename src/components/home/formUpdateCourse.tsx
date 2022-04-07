import './home.css'
import { useState } from 'react';
import { useCourse } from '../../hooks/useCourse'
import React from 'react'
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
                        placeholder='Year'
                        value={year}
                        onChange={handleYearChange}
                    />
                </div>
                <button className='btn41-43 btn-41' type='submit' onClick={() => CourseUpdate(name, year, props.id)}>
                    Update Course
                </button>
            </form>
        </div>
    )
};


