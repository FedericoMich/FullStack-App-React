import './home.css'
import { TypeStudent } from '../../types/typesComponent'


export const Details = (props: TypeStudent) => {

    return (
        <div className="homeContainer">
            <h1>Dettagli</h1>
            Nome: <b>{props.name}</b> Cognome:  <b>{props.surname}</b>

        </div>
    )
};


