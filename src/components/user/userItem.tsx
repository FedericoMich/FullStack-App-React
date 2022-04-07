import { UserType } from '../../types/typesComponent'
import './user.css'


export const UserItem = (props: UserType) => {
    return (

        <div className="UserRowContainer">
             Surname: <b>{props.surname}</b> Name: <b>{props.name}</b> Repos: <b>{props.repos}</b>
        </div>

    );
}