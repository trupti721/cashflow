import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { useState } from 'react';

import { Switch } from '@mui/material';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function createData(id, firstName, secondName, textData, edit) {
  return { id, firstName, secondName, textData, edit };
}

const rows = [
  createData('1', 'Lorem ipsum dolo|', 'dolor sit amet', 'Admin', 'edit'),
  createData('2', 'Lorem ipsum dolo|', 'dolor sit amet', 'Admin', 'edit'),
  createData('3', 'Lorem ipsum dolo|', 'dolor sit amet', 'Admin', 'edit'),
  createData('4', 'Lorem ipsum dolo|', 'dolor sit amet', 'Admin', 'edit'),
  createData('5', 'Lorem ipsum dolo|', 'dolor sit amet', 'Admin', 'edit')
];

export default function ClientOnboarding() {
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(true);
  const [secData, setSecData] = useState(true);
  const [icon, setIcon] = useState(false);
  const [seci, setSeci] = useState(false);

  return (
    <>
      <Container style={{ position: 'absolute', top: 80, left: 70 }}>
        <h3>
          <strong>Client Onboarding</strong>
        </h3>
        <br></br>
        <div style={{ display: 'flex' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
            Clien Details & Inputs
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
            Group Companies Details & Inputs
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
            Whitelableing
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
            Add users
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
            CFS Applicability
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <br></br>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            {' '}
            <TableHead>
              <TableRow sx={{ backgroundColor: '#d0d0d0' }} align="left">
                {/* e0e0e0 */}
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="left">
                  Select Database table to configure
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="left">
                  <select
                    name="cars"
                    id="cars"
                    style={{ height: 30, width: 110 }}
                  >
                    <option value="volvo">Cash Flow</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }}>
                  Upload Document to Map
                </TableCell>
                <TableCell align="left">
                  <input
                  // style={{
                  //   border: "0",
                  //   border: "1px",
                  //   border: "dotted",
                  // }}
                  ></input>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="left">
                  {/* <Button sx={{ backgroundColor: "black" }} variant="contained">
                  Upload
                </Button> */}
                  <button style={{ backgroundColor: 'black', color: 'white' }}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>

          <Table aria-label="simple table">
            {' '}
            <TableHead>
              <TableRow sx={{ backgroundColor: '#d0d0d0' }} align="left">
                {/* e0e0e0 */}
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="left">
                  Applicability
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="left">
                  Client Line Item Name
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }}>
                  Map Line Item name
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="left">
                  Traceablity
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="left">
                  Source
                </TableCell>
              </TableRow>
            </TableHead>
            {/* </Table> */}
            {/* <Table> */}
            {/* </Table> */}
            {/* </TableContainer> */}
            {/* <TableContainer component={Paper}> */}
            {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
            <TableBody>
              {rows.map(row => (
                <TableRow>
                  <TableCell component="th" scope="row" align="left">
                    {/* <VisibilityOffTwoToneIcon /> */}
                    <VisibilityOutlinedIcon />
                  </TableCell>

                  <TableCell align="left">
                    {/* <input
                    id="outlined-required"
                    size="small"
                    disabled={disable}
                    defaultValue={row.firstName}
                  ></input> */}
                    {row.firstName}
                  </TableCell>
                  <TableCell align="left">
                    {/* <input
                    sx={{ border: 1, width: 400 }}
                    id="outlined-required"
                    defaultValue={row.secondName}
                    size="small"
                    disabled={disable}
                  ></input> */}
                    <select
                      name="cars"
                      id="cars"
                      style={{ height: 30, width: 110 }}
                    >
                      <option value="volvo">
                        Depreciation and amortization expense
                      </option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </TableCell>
                  <TableCell align="left">
                    No
                    <Switch />
                    Yes
                  </TableCell>
                  <TableCell align="left">
                    <select
                      name="cars"
                      id="cars"
                      style={{ height: 30, width: 110 }}
                    >
                      <option value="volvo">...Select</option>
                      <option value="saab">Balance Sheet</option>
                      <option value="opel">Income statement</option>
                      <option value="audi">Audi</option>
                    </select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Table aria-label="simple table">
            {' '}
            <TableHead>
              <TableRow sx={{ backgroundColor: '#d0d0d0' }}>
                <TableCell sx={{ fontWeight: 'bold', m: 1 }} align="right">
                  {/* <Button sx={{ backgroundColor: "black" }} variant="contained">
                  Next
                </Button> */}
                  <button style={{ backgroundColor: 'black', color: 'white' }}>
                    Next
                  </button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
