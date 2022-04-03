
import { useAllStudent } from '../hooks/useAllStudent';
import { useAuth } from '../hooks/useAuth';
import '../components/course/course.css'
import { UserItem } from '../components/user/userItem'
import '../components/user/user.css'


export const StudentPage = () => {
    useAuth();

    const { student } = useAllStudent();


    const mapUser = student.map((row: any) => (
        <UserItem {...row} key={row.id} />
    ))

    return (
        <div className="allUserContainer">
            <div className="userGrid">
                {mapUser}
            </div>
        </div >
    )
};
