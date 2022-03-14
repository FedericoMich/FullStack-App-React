import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


export const CourseBtn = () => {


    return (
        <>
            <Link to="/course"><Button variant="contained">Corsi</Button></Link>
            <TextField id="standard-basic" label="Cerca" variant="standard" />
        </>
    )
}
