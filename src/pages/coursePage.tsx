
import { useSingleCourse } from '../hooks/useSingleCourse';
import { useAuth } from '../hooks/useAuth';
import { FormAddStudent } from '../components/home/formAddStudent'
import { useUser } from '../hooks/useUser';
import { TableStudent } from '../components/user/tableStudent'




import '../components/course/course.css'

export const CoursePage = () => {

    useAuth();
    const { loading, singleCourse } = useSingleCourse();
    const { user } = useUser();


    return (
        <div className="courseContainer">
            <div className="nameAndYear">
                {singleCourse?.name}
                <br></br>
                {singleCourse?.year}
                <FormAddStudent />
            </div>
            <div className="allUserContainer">
                <div className="userGrid">
                    {user && !loading && (<TableStudent listUser={user} />)}
                </div>
            </div >
        </div>
    )

};
