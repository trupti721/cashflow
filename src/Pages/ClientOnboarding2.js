import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Box, Button } from '@mui/material';

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

const rows2 = [
  createData('7', 'hello_7', 'world_7', 'random data7'),
  createData('8', 'hello_8', 'world_8', 'random data8'),
  createData('9', 'hello_9', 'world_9', 'random data9')
];

export default function ClientOnboarding2() {
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(true);
  const [secData, setSecData] = useState(true);
  const [icon, setIcon] = useState(false);
  const [seci, setSeci] = useState(false);

  const FocusInput = id => {
    let item = rows[id];
    console.log('1111111111111111111111111');
    console.log('item', id);
    console.log(id);
    setDisable(false);
    setIcon(true);
  };

  const SecondData = id => {
    let item = rows[id];
    console.log('222222222222222222222222');
    console.log('item', id);
    console.log(id);
    setSecData(false);
    setSeci(true);
  };

  return (
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

      <TableContainer component={Paper}>
        <div>
          <Table aria-label="simple table">
            <TableCell align="left" sx={{ fontWeight: 'bold', m: 1 }}>
              User List
              <AddCircleOutlineIcon style={{ float: 'right' }} />
              {/* <Link href="/" style={{ float: "right" }}> */}
              <Box
                style={{ float: 'right' }}
                sx={{ ':before': { borderBottomColor: 'red' } }}
              >
                Add New User
              </Box>
              {/* </Link> */}
            </TableCell>
          </Table>
        </div>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#d0d0d0' }}>
              {/* e0e0e0 */}
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>User Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>
                User Email
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>User Role</TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}></TableCell>
            </TableRow>
          </TableHead>
          {/* </Table> */}
          {/* </TableContainer> */}

          {/* <TableContainer component={Paper}> */}
          {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
          <TableBody>
            {rows.map(row => (
              <TableRow onClick={() => FocusInput(row.id)}>
                <TableCell component="th" scope="row">
                  {row.id}
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

                  {row.secondName}
                </TableCell>
                <TableCell align="left" {...rows}>
                  {row.textData}
                </TableCell>
                <TableCell align="right">
                  {icon ? <ModeEditOutlineOutlinedIcon /> : <></>}
                  {icon ? 'Edit' : <></>}
                  {icon ? <DeleteOutlinedIcon /> : <></>}
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
                <Button sx={{ backgroundColor: 'black' }} variant="contained">
                  Next
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
}
