import { useState, useEffect } from 'react'
import { addCourse } from "../api/apiRepos"
import { getCourse } from "../api/apiRepos"
import { updateCourse } from "../api/apiRepos"



export const useCourse = () => {
    const [createCourse, setCreateCourse] = useState([]);
    const [upCourse, setUpCourse] = useState([]);
    const [Course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);

    useEffect(() => {
        const populate = async () => {
            try {
                setCourse(await getCourse())
                setLoading(false)
            } catch (err) {
                setOnError(true);
                setLoading(false)
            }
        }
        populate()
    }, [])



    const CourseAdd = async (name: string, year: string) => {
        setLoading(true)
        try {
            setCreateCourse(await addCourse(name, year))
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    const CourseUpdate = async (name: string, year: string) => {
        setLoading(true)
        try {
            setUpCourse(await updateCourse(name, year))
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    return { createCourse, loading, onError, CourseAdd, Course, CourseUpdate};
}