import './preparecfs.css';
import React,{ useState }  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

 
function createData(sno, timePeriod, subClientType, subClientName, preparedBy,creationDate,lastUpdated,reporter) {
    return { sno, timePeriod, subClientType, subClientName, preparedBy,creationDate,lastUpdated,reporter };
}
 
const rows = [
    createData('1','2022-23','Entity','Lorem Ipsum lorem dolor','Shashank Malik','13th Jan 2023','13th Feb 2023','Shrishti Saini'),  
    createData('2','2022-23','Entity','Lorem Ipsum lorem dolor','Shashank Malik','13th Jan 2023','13th Feb 2023','Shrishti Saini'),  
    createData('3','2022-23','Entity','Lorem Ipsum lorem dolor','Shashank Malik','13th Jan 2023','13th Feb 2023','Shrishti Saini'),  
    createData('4','2022-23','Entity','Lorem Ipsum lorem dolor','Shashank Malik','13th Jan 2023','13th Feb 2023','Shrishti Saini'),  
    createData('5','2022-23','Entity','Lorem Ipsum lorem dolor','Shashank Malik','13th Jan 2023','13th Feb 2023','Shrishti Saini'),  
    createData('6','2022-23','Entity','Lorem Ipsum lorem dolor','Shashank Malik','13th Jan 2023','13th Feb 2023','Shrishti Saini'),  
    createData('7','2022-23','Entity','Lorem Ipsum lorem dolor','Shashank Malik','13th Jan 2023','13th Feb 2023','Shrishti Saini')  
];

export default function SimpleTable() {
    
    return (
        <TableContainer component={Paper} className="tablePosition" >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{backgroundColor:'#c4c4c4'}}>
                    <TableRow className='thead'>                        
                        <TableCell><strong>S.No</strong></TableCell>
                        <TableCell><strong>Time Period</strong></TableCell>
                        <TableCell style={{color: "red" }}><strong>Sub-Client Type</strong></TableCell>
                        <TableCell style={{color: "red"}}><strong>Sub-Client Name</strong></TableCell>
                        <TableCell><strong>Prepared By</strong></TableCell>
                        <TableCell><strong>Creation Date</strong></TableCell>
                        <TableCell><strong>Last Updated</strong></TableCell>
                        <TableCell><strong>Reporter</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (                        
                        <TableRow
                            key={row.sno}
                            sx={{ '&:last-child td, &:last-child th':{ border: 0,mb:15}}}
                        >                            
                            <TableCell component="th" scope="row">
                            <Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}/> <span style={{marginLeft:5}}>{row.sno}</span>                                
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.timePeriod}
                            </TableCell>
                            <TableCell align="left">
                                {row.subClientType}
                            </TableCell>
                            <TableCell align="left">
                                {row.subClientName}
                            </TableCell>
                            <TableCell align="left">
                                {row.preparedBy}
                            </TableCell>
                            <TableCell align="left">
                                {row.creationDate}
                            </TableCell>
                            <TableCell align="left">
                                {row.lastUpdated}
                            </TableCell>
                            <TableCell align="left">
                                {row.reporter}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}