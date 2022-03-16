import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CourseType } from '../../types/typesComponent'
import './course.css'


export const CourseCard = (props: CourseType) => {


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
                    </CardContent>
                </Grid>
            </div>
    )

};


