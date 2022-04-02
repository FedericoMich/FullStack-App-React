import { useState, useEffect } from 'react'
import { getSingleCourse } from "../api/apiRepos"
import { useParams } from "react-router-dom";
import {CourseType} from '../types/typesComponent'







export const useSingleCourse = () => {

    const { id } = useParams()
    const [singleCourse, setSingleCourse] = useState<CourseType>();
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);


    useEffect(() => {
        const populate = async (id:any) => {
            try {
                setSingleCourse(await getSingleCourse(id))
                setLoading(false)
            } catch (e) {
                setOnError(true);
                setLoading(false)
            }
        }
        populate(id)
    }, [])



    return { loading, onError, singleCourse };
}