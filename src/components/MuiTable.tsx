import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Leif",
    last_name: "MacKeeg",
    email: "lmackeeg0@a8.net",
    gender: "Male",
    ip_address: "61.15.137.74",
  },
  {
    id: 2,
    first_name: "Flem",
    last_name: "O'Kinneally",
    email: "fokinneally1@uiuc.edu",
    gender: "Non-binary",
    ip_address: "212.126.77.93",
  },
  {
    id: 3,
    first_name: "Wilie",
    last_name: "Rollo",
    email: "wrollo2@1688.com",
    gender: "Female",
    ip_address: "125.44.116.233",
  },
  {
    id: 4,
    first_name: "Frazer",
    last_name: "Pithcock",
    email: "fpithcock3@yolasite.com",
    gender: "Male",
    ip_address: "121.56.247.33",
  },
  {
    id: 5,
    first_name: "Darren",
    last_name: "Govier",
    email: "dgovier4@latimes.com",
    gender: "Male",
    ip_address: "96.249.183.222",
  },
  {
    id: 6,
    first_name: "Flin",
    last_name: "Carnew",
    email: "fcarnew5@timesonline.co.uk",
    gender: "Male",
    ip_address: "158.180.255.38",
  },
  {
    id: 7,
    first_name: "Germaine",
    last_name: "Senussi",
    email: "gsenussi6@mlb.com",
    gender: "Female",
    ip_address: "248.35.8.184",
  },
  {
    id: 8,
    first_name: "Ronny",
    last_name: "Moysey",
    email: "rmoysey7@examiner.com",
    gender: "Agender",
    ip_address: "91.90.82.59",
  },
  {
    id: 9,
    first_name: "Osbert",
    last_name: "Daines",
    email: "odaines8@ed.gov",
    gender: "Male",
    ip_address: "163.77.84.118",
  },
  {
    id: 10,
    first_name: "Rennie",
    last_name: "Patnelli",
    email: "rpatnelli9@mapquest.com",
    gender: "Female",
    ip_address: "105.170.110.122",
  },
];
