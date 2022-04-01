import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import { CourseType } from '../../types/typesComponent'
import { useCourse } from '../../hooks/useCourse';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import './course.css'
import { FormUpdateCourse } from '../home/formUpdateCourse';


export const CourseCard = (props: CourseType) => {

    const [editCourse, setEditCourse] = useState<Boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setEditCourse(!editCourse)
        console.log("ciao")
    }



    const { CourseUpdate } = useCourse();

    return (

        <div className="commitCard">
            <Grid item xs={12}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.year}
                    </Typography>
                    <div className="editCourseContainer">
                        <button className="editCourseIcon"
                            onClick={handleClick}>
                            {editCourse ? <EditOffIcon /> : <EditIcon />}
                        </button>
                    </div>
                    {editCourse && <FormUpdateCourse />}
                </CardContent>
            </Grid>
        </div >
    )

};


