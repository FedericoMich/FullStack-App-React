import { useState, useEffect } from 'react'
import { getUser } from "../api/apiUser"


export const useAllStudent = () => {

    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);

    useEffect(() => {
        const populate = async () => {
            try {
                setStudent(await getUser())
                setLoading(false)
            } catch (e) {
                setOnError(true);
                setLoading(false)
            }
        }
        populate()
    }, [])


    return { student, loading, onError };

}
