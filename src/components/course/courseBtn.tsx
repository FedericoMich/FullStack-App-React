import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export const CourseBtn = () => {


    return (
        <>
            <Link to="/home"><Button variant="contained">Corsi</Button></Link>
            <Link to="/tsxExplanation"><Button variant="contained">TSX Explanation</Button></Link>
        </>
    )
}
