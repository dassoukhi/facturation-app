/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
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
  { id: 'num_facture', label: 'Numéro facture', minWidth: 170 },
  {
    id: 'client_name',
    label: 'Client',
    minWidth: 100,
    format: value => value
  },
  {
    id: 'date_debut',
    label: 'Date',
    minWidth: 170,
    // align: 'right',
    format: value => new Date(value).toLocaleDateString()
  },
  {
    id: 'date_echeance',
    label: "Date d'écheance",
    minWidth: 170,
    // align: 'right',
    format: value => new Date(value).toLocaleDateString()
  },
  {
    id: 'total',
    label: 'Somme',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'etat',
    label: 'État',
    minWidth: 170,
    align: 'right',
    format: etat => {
      if (String(etat).toLocaleLowerCase() === 'confirm') {
        return 'Confirmé'
      }
      if (etat == 'paye') {
        return 'Payé'
      } else {
        return 'Annulé'
      }
    }
  }
]

const useStyles = makeStyles({
  container: {
    maxHeight: 'calc(40px + 60vh)'
  }
})

export default function ListeFactures({ search, invoicesList }) {
  const classes = useStyles()
  console.log('input in liste: ' + search)

  const getSymbole = devise => {
    if (devise === 'USD') {
      return ' $'
    }
    if (devise == 'EUR') {
      return ' €'
    } else {
      return ' FCA'
    }
  }

  console.log('invoices eff:', invoicesList)
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
          {invoicesList.map((row, index) => {
            return (
              <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                {columns.map(column => {
                  const value =
                    column.id === 'total'
                      ? row[column.id] + getSymbole(row['devise'])
                      : row[column.id]
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format || typeof value === 'number'
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
