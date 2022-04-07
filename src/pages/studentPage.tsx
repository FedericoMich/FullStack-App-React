
import { useAllStudent } from '../hooks/useAllStudent';
import { useAuth } from '../hooks/useAuth';
import '../components/course/course.css'
import { useSearchParams } from 'react-router-dom';
import { TableStudent } from '../components/user/tableStudent'

import '../components/user/user.css'


export const StudentPage = () => {
    useAuth();

    const { student, loading } = useAllStudent();
    const [SearchParams] = useSearchParams();


    const toFilter = SearchParams.get("surname")
    const filteredRepos = student.filter((surname: any) => {
        return surname.surname.toLowerCase().includes(toFilter)
    })



    return (
        <div className="allUserContainer">
            <div className="userGrid">
                {student && !loading && (<TableStudent listUser={toFilter === null ? student : filteredRepos} />)}
            </div>
        </div >
    )
};
