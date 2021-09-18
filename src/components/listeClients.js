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
    align: 'right'
  },
  {
    id: 'telephone',
    label: 'Téléphone',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'site_internet',
    label: 'Site internet',
    minWidth: 170,
    align: 'right'
  }
]

const useStyles = makeStyles({
  container: {
    maxHeight: 440
  }
})

export default function ListeClients({ search, clientList }) {
  const classes = useStyles()
  console.log('input in liste: ' + search)
  console.log('ClientList: ' + clientList)

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
          {clientList.map(row => {
            return (
              <TableRow hover role='checkbox' tabIndex={-1} key={row.nom}>
                {columns.map(column => {
                  const value = row[column.id]
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
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
