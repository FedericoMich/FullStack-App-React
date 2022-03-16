import './home.css'
import { TypeStudent } from '../../types/typesComponent'


export const Details = (props: TypeStudent) => {

    return (
        <div className="detailContainer">

            <h1>Detail Component</h1>
            Nome: <b>{props.name}</b> Cognome:  <b>{props.surname}</b>

        </div>
    )
};


