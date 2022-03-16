import './home.css'
import { useAuth } from '../../hooks/useAuth';
import { useCourse } from '../../hooks/useCourse';
import { getUser } from '../../api/apiRepos'
import { FormAddStudent } from './formAddStudent'
import { FormAddCourse } from './formAddCourse'
import { CourseCard } from '../course/courseCard'


export const Home = () => {

    useAuth();
    const { createCourse, loading, onError, Course } = useCourse();



    const mapCourse = Course.map((row: any) => (
        <CourseCard {...row} key={row.id} />
    ))

    return (
        <div className="homeContainer">
             <FormAddCourse />
            <button onClick={getUser}>Lista Studenti in DB</button>
         
            <div className="commitsContainer">{mapCourse}</div>

            <FormAddStudent />
           
        </div>
    )
};
