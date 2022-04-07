import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useUser } from '../../hooks/useUser'
import { useState } from 'react'
import { UserType } from '../../types/typesComponent'
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import { FormUpdateUser } from '../home/formUpdateUser';




export const RowTableStudent = (props: UserType) => {

    const [editUser, setEditUser] = useState<Boolean>(false);

    const Pointer = {cursor: 'pointer'}

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setEditUser(!editUser)
    }

    const { UserDelete } = useUser();

    console.log(props)

    return (
        <TableBody>
            <TableRow key={props.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{props.surname}</TableCell>
                <TableCell align="left">{props.name}</TableCell>
                <TableCell align="left">{props.repos}</TableCell>
                <TableCell align="left"> < DeleteForeverIcon style={Pointer} onClick={() => UserDelete(props.id)} />  </TableCell>
                <TableCell align="left">  
                <button className="editCourseIcon"
                    onClick={handleClick}>
                    {editUser ? <EditOffIcon style={Pointer}/> : <EditIcon style={Pointer}/>}
                </button> </TableCell>
            </TableRow>
            {editUser && <FormUpdateUser {...props} />}
        </TableBody >
    )
}