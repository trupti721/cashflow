import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
// import { SosOutlined } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e4e4e4',
    color: 'black'
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

function createData(id, lineItem, alternativeName) {
  return { id, lineItem, alternativeName };
}

const rows = [
  createData('1', 'Equity share', 'Equity share capital'),
  createData('2', 'Equity share capital', 'Equity share capital'),
  createData('3', 'Reserves and surplus', 'Reserves and surplus'),
  createData('4', 'Non-Current Liabilities', 'Non-Current Liabilities'),
  createData('5', 'Deferred tax liability`', 'Deferred tax liability'),
  createData('6', 'Borrowings', 'Borrowings'),
  createData('7', 'Provisions', 'Provisions'),
  createData('8', 'Lease Liabilities', 'Lease Liabilities'),
  createData('9', 'Current Liabilities', 'Current Liabilities'),
  createData('10', 'Short term borrowings', 'Short term borrowings')
];

export default function BalanceSheetTable() {
  return (
    <Container style={{ position: 'absolute', top: 80, left: 70 }}>
      <div className="row mt-3">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="left">Line Items</StyledTableCell>
                <StyledTableCell align="left">
                  Alternative Name&nbsp;&nbsp;
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(rows => (
                <StyledTableRow
                  key={rows.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: 10, textAlign: 'center' }}
                  >
                    {rows.id}
                  </TableCell>
                  <TableCell align="left" style={{ width: 10 }}>
                    <input
                      sx={{ border: 1, width: 100, textAlign: 'center' }}
                      id="outlined-required"
                      size="small"
                      disabled
                      placeholder={rows.lineItem}
                    ></input>
                  </TableCell>
                  <TableCell align="left" style={{ width: 10 }}>
                    <input
                      sx={{ border: 1, width: 50 }}
                      id="outlined-required"
                      size="small"
                      disabled
                      placeholder={rows.alternativeName}
                    ></input>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}
