import { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/studentContext"


export const useAuth = () => { 
    const { session } = useContext(StudentContext);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = () => {
            if (session !== true) {
                navigate("/")
            }
        }
        isAuth();
    }, [navigate, session]);

}