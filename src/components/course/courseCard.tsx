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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';



export const CourseCard = (props: CourseType) => {

    const [editCourse, setEditCourse] = useState<Boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setEditCourse(!editCourse)
    }



    const { CourseUpdate, CourseDelete } = useCourse();

    return (

        <div className="commitCard">
            <Grid item xs={12}>
                <CardContent>
                    <Link to={"/course/" + props.id}>
                        <Typography variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {props.year}
                        </Typography>
                    </Link>
                    <div className="courseSetting">
                        <div className="editCourseContainer">
                            <button className="editCourseIcon"
                                onClick={handleClick}>
                                {editCourse ? <EditOffIcon /> : <EditIcon />}
                            </button>
                        </div>
                        <button className="editCourseIcon"
                            onClick={() => CourseDelete(props.id)}> <DeleteForeverIcon />
                        </button>
                    </div>
                    {editCourse && <FormUpdateCourse {...props} />}
                </CardContent>
            </Grid>
        </div >
    )

};


