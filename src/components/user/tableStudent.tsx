import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RowTableStudent } from './RowTableStudent'


export const TableStudent = (props: any) => {

    const dataTable = props.listUser
    const StudentRow = dataTable.map((row: any) => (
        <RowTableStudent {...row} key={row.idRepo} />
    ))

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Surname</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">GitHub Repository</TableCell>
                        <TableCell align="left">Delete</TableCell>
                        <TableCell align="left">Update</TableCell>
                    </TableRow>
                </TableHead>
                {StudentRow}
            </Table>
        </TableContainer>
    );
}