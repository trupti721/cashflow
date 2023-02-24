import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Container } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AuditLogs() {
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }));
  function createData(
    srno,
    lineitem,
    userrole,
    username,
    useremail,
    sourcedocs,
    actions,
    date
  ) {
    return {
      srno,
      lineitem,
      userrole,
      username,
      useremail,
      sourcedocs,
      actions,
      date
    };
  }

  const rows = [
    createData(
      '1.',
      'Depreciation and amortization exp...',
      'Preparer',
      'Lorem ipsum dolo ipsum',
      'xyz123mkilaot@abcd.com',
      'Balance Sheet',
      'Add Line item',
      '2 May 2022, 10:'
    ),
    createData(
      '2.',
      'Lorem ipsum dolor sit amet, cons...... ',
      'Reviewer',
      'Lorem ipsum dolo ipsum ',
      'xyz123mkilaot@abcd.com',
      'Income Statement',
      'Delete Line Item',
      '2 May 2022, 10:'
    ),
    createData(
      '3.',
      'Non-cash employee share-based ….. ',
      'Auditor',
      'Lorem ipsum dolo ipsum ',
      'xyz123mkilaot@abcd.com',
      'Notes to balance sheet',
      'Edit Line Item',
      '2 May 2022, 10:'
    ),
    createData(
      '4.',
      'Provision for doubtful debts',
      'Admin',
      'Lorem ipsum dolo ipsum ',
      'xyz123mkilaot@abcd.com ',
      'Notes to income statement',
      'Manual data entry',
      '2 May 2022, 10:'
    ),
    createData(
      '5.',
      'Provision for unbilled revenue',
      'Reviewe',
      'Lorem ipsum dolo ipsum ',
      'xyz123mkilaot@abcd.com',
      'Manual Entry 01',
      'Delete Line Item',
      '2 May 2022, 10:'
    ),
    createData(
      '6.',
      'Provision for doubtful advances',
      'Auditor',
      'Lorem ipsum dolo ipsum ',
      'xyz123mkilaot@abcd.com',
      'Manual Entry 01',
      'Edit Line Item',
      '2 May 2022, 10:'
    ),
    createData(
      '7.',
      'Provision for diminution in investment',
      'Admin',
      'Lorem ipsum dolo ipsum ',
      'xyz123mkilaot@abcd.com',
      'Manual Entry 01',
      'Manual data entry',
      '2 May 2022, 10:'
    )
  ];

  return (
    <Container style={{ position: 'absolute', top: 80, left: 70 }}>
      <div className="row">
        <h5 style={{ color: 'gray' }}>Audit Logs</h5>
        {/* <div className='row'> */}
        <div className="col-2 ">
          <select
            ClassName="form-select form-select-md "
            aria-label=".form-select-sm example"
            style={{ height: 35, width: 180, borderRadius: 4 }}
          >
            <option selected>Income Statement</option>
            <option value="1">Other Operating Revenue</option>
            <option value="2">Total Income</option>
            <option value="3">Cost of Revenue</option>
            <option value="4">Employees Benefit Expenses</option>
            <option value="5">Other Expenses</option>
            <option value="6">Total Operating Expenses</option>
            <option value="7">EBITDA</option>
            <option value="7">Depreciation and amortisation</option>
          </select>
        </div>
        <div className="col-8 ">
          {/* <input className="form-control " type="search" placeholder="Search" style={{ height: 35 }}>
                    </input> */}
          <p
            className="rounded"
            style={{
              width: 150,
              height: 35,
              paddingLeft: 5,
              float: 'left',
              border: '1px solid black'
            }}
          >
            <SearchIcon></SearchIcon>Search
          </p>
        </div>
        <div className="col-2">
          <select className="form-select" aria-label="Default select example">
            <option value="1" selected>
              Sort
            </option>
            <option Value="2">Sort Oldest to Newest</option>
            <option value="3">Sort Newest to Oldest</option>
          </select>
          {/* <button style={{ height: 35, width: 80, borderRadius: 3,float:"right" }}>Sort</button> */}
        </div>

        {/* </div> */}
      </div>
      <TableContainer className="mt-3" component={Paper}>
        <Table sx={{ minWidth: 768 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sr. No</StyledTableCell>
              <StyledTableCell align="right">Line Item</StyledTableCell>
              <StyledTableCell align="right">User Role</StyledTableCell>
              <StyledTableCell align="right">User Name</StyledTableCell>
              <StyledTableCell align="right">User Email</StyledTableCell>
              <StyledTableCell align="right">Source Docs</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.srno}>
                <StyledTableCell component="th" scope="row">
                  {row.srno}
                </StyledTableCell>
                <StyledTableCell align="left">{row.lineitem}</StyledTableCell>
                <StyledTableCell align="left">{row.userrole}</StyledTableCell>
                <StyledTableCell align="left">{row.username}</StyledTableCell>
                <StyledTableCell align="left">{row.useremail}</StyledTableCell>
                <StyledTableCell align="left">{row.sourcedocs}</StyledTableCell>
                <StyledTableCell align="left">{row.actions}</StyledTableCell>
                <StyledTableCell align="left">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
