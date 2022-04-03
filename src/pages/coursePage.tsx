
import { useSingleCourse } from '../hooks/useSingleCourse';
import { useAuth } from '../hooks/useAuth';
import { FormAddStudent } from '../components/home/formAddStudent'
import '../components/course/course.css'

export const CoursePage = () => {
    useAuth();

    const { loading, onError, singleCourse } = useSingleCourse();

    return (
        <div className="courseContainer">
            <div className="nameAndYear">
                {singleCourse?.name}
                <br></br>
                {singleCourse?.year}
                <FormAddStudent />
            </div>
           
        </div >
    )

};
