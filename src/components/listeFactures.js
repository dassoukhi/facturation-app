/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'rgba(238,238,238)',
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell)
const columns = [
  { id: 'nom', label: 'Nom', minWidth: 170 },
  { id: 'adresse', label: 'Adresse', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'telephone',
    label: 'Téléphone',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'siteWeb',
    label: 'Site internet',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  }
]

function createData(nom, adresse, email, telephone) {
  const siteWeb = email / telephone
  return { nom, adresse, email, telephone, siteWeb }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]

const useStyles = makeStyles({
  container: {
    maxHeight: 440
  }
})

export default function ListeFactures({ search }) {
  const classes = useStyles()
  console.log('input in liste: ' + search)
  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .filter(e => e.nom.toLowerCase().startsWith(search.toLowerCase()))
            .map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.nom}>
                  {columns.map(column => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
