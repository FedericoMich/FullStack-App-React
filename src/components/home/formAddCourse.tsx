import './home.css'
import { useState } from 'react';
import { useCourse } from '../../hooks/useCourse'

export const FormAddCourse = () => {

    const [name, setName] = useState('')
    const [year, setYear] = useState('')

    const { CourseAdd } = useCourse(name, year);

    function handleNameChange(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value)
    }
    function handleYearChange(event: React.FormEvent<HTMLInputElement>) {
        setYear(event.currentTarget.value)
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
                    type='year'
                    name='year'
                    placeholder='year'
                    value={year}
                    onChange={handleYearChange}
                />
            </div>
            <button className='form-input-btn' type='submit' onClick={CourseAdd}>
                Add Course
            </button>
        </form>

    )
};


