import { useState, useEffect } from 'react'
import { getUserByCourseId, deleteUser, addUser, updateUser } from "../api/apiUser"
import { useParams } from "react-router-dom";




export const useUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState([]);
    const [, setCreateUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);

    useEffect(() => {
        const populate = async (id: any) => {
            try {
                setUser(await getUserByCourseId(id))
                setLoading(false)
            } catch (e) {
                setOnError(true);
                setLoading(false)
            }
        }
        populate(id)
    }, [id])


    const UserAdd = async (name: string, surname: string, repos: string, id: any) => {
        setLoading(true)
        try {
            setCreateUser(await addUser(name, surname, repos, id))
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    const UserDelete = async (id: any) => {
        setLoading(true)
        try {
            await deleteUser(id)
            window.location.reload();
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    const UserUpdate = async (name: string, surname: string, repos: string, id: any) => {
        setLoading(true)
        try {
            await updateUser(name, surname,  repos, id)
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }


    return { loading, onError, user, UserAdd, UserDelete, UserUpdate };
}