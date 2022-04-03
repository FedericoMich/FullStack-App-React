import { UserType } from '../../types/typesComponent'
import './user.css'


export const UserItem = (props: UserType) => {
    return (

        <div className="UserRowContainer">
            Name: <b>{props.name}</b> Surname: <b>{props.surname}</b> Repos: <b>{props.repos}</b>
        </div>

    );
}