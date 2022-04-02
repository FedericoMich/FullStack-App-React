import { useState, useEffect } from 'react'
import { addCourse } from "../api/apiRepos"
import { getCourse } from "../api/apiRepos"
import { updateCourse } from "../api/apiRepos"
import { deleteCourse } from "../api/apiRepos"



export const useCourse = () => {
    const [createCourse, setCreateCourse] = useState([]);
    const [Course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);

    useEffect(() => {
        const populate = async () => {
            try {
                setCourse(await getCourse())
                setLoading(false)
            } catch (e) {
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

    const CourseUpdate = async (name: string, year: string, id: any) => {
        setLoading(true)
        try {
            await updateCourse(name, year, id)
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    const CourseDelete = async (id: any) => {
        setLoading(true)
        try {
            await deleteCourse(id)
            window.location.reload();
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }


    return { createCourse, loading, onError, CourseAdd, Course, CourseUpdate, CourseDelete };
}