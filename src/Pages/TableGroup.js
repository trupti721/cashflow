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
import Link from '@mui/material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';

function createData(id, firstName, secondName, textData) {
  return { id, firstName, secondName, textData };
}

const rows = [
  createData('2', 'hello_2', 'world_2', 'random data2'),
  createData('3', 'hello_3', 'world_3', 'random data3'),
  createData('4', 'hello_4', 'world_4', 'random data4'),
  createData('5', 'hello_5', 'world_5', 'random data5'),
  createData('6', 'hello_6', 'world_6', 'random data6')
];

const rows2 = [
  createData('7', 'hello_7', 'world_7', 'random data7'),
  createData('8', 'hello_8', 'world_8', 'random data8'),
  createData('9', 'hello_9', 'world_9', 'random data9')
];

export default function TableGroup() {
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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#d0d0d0' }}>
              {/* e0e0e0 */}
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>Id</TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>Line Item</TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>
                Alternate Line Item
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', m: 1 }}>Formula</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Container sx={{ border: 1, backgroundColor: '#bdbdbd' }}>
        <TableContainer component={Paper}>
          <div>
            <Table
              aria-label="simple table"
              sx={{ backgroundColor: '#bdbdbd' }}
            >
              <TableCell align="left">
                <div style={{ display: 'inlineBlock', height: 10 }}>
                  <input
                    id="outlined-required"
                    defaultValue="Group 01"
                    size="small"
                    disabled
                  ></input>
                  <DeleteOutlinedIcon style={{ float: 'right' }} />
                  <AddCircleOutlineIcon style={{ float: 'right' }} />
                  <Link href="/" style={{ float: 'right' }}>
                    Add New Items
                  </Link>
                </div>
              </TableCell>
            </Table>
          </div>
        </TableContainer>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map(row => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>

                <TableCell align="left" onClick={() => FocusInput(row.id)}>
                  <input
                    id="outlined-required"
                    size="small"
                    disabled={disable}
                    defaultValue={row.firstName}
                  ></input>
                </TableCell>
                <TableCell align="left">
                  <input
                    sx={{ border: 1, width: 400 }}
                    id="outlined-required"
                    defaultValue={row.secondName}
                    size="small"
                    disabled={disable}
                  ></input>
                </TableCell>
                <TableCell align="left">{row.textData}</TableCell>
                <TableCell>
                  {icon ? (
                    <DeleteOutlinedIcon style={{ float: 'right' }} />
                  ) : (
                    <></>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Container sx={{ border: 1, backgroundColor: '#bdbdbd' }}>
        <TableContainer component={Paper}>
          <div>
            <Table
              aria-label="simple table"
              sx={{ backgroundColor: '#bdbdbd' }}
            >
              <TableCell align="left">
                <div style={{ display: 'inlineBlock', height: 10 }}>
                  <input
                    id="outlined-required"
                    defaultValue="Group 02"
                    size="small"
                    disabled
                  ></input>
                  <DeleteOutlinedIcon style={{ float: 'right' }} />
                  <AddCircleOutlineIcon style={{ float: 'right' }} />
                  <Link href="/" style={{ float: 'right' }}>
                    Add New Items
                  </Link>
                </div>
              </TableCell>
            </Table>
          </div>
        </TableContainer>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows2.map(rows2 => (
              <TableRow
                key={rows2.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {rows2.id}
                </TableCell>
                <TableCell align="left" onClick={() => SecondData(rows2.id)}>
                  <input
                    sx={{ border: 1, width: 400 }}
                    id="outlined-required"
                    defaultValue={rows2.firstName}
                    size="small"
                    disabled={secData}
                  ></input>
                </TableCell>
                <TableCell align="left">
                  <input
                    sx={{ border: 1, width: 400 }}
                    id="outlined-required"
                    defaultValue={rows2.secondName}
                    size="small"
                    disabled={secData}
                  ></input>
                </TableCell>
                <TableCell align="left">{rows2.textData}</TableCell>
                <TableCell>
                  {seci ? (
                    <DeleteOutlinedIcon style={{ float: 'right' }} />
                  ) : (
                    <></>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
