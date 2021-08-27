import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Button, Grid, TextField } from '@material-ui/core'
import ItemRow from './itemRow'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#eeee',
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const TAX_RATE = 0.07

const useStyles = makeStyles({
  table: {
    marginTop: 20,
    width: '100%'
  }
})

function ccyFormat(num) {
  return `${num.toFixed(2)}`
}

function priceRow(qty, unit) {
  return qty * unit
}

function createRow(desc, qty, unit, taxe) {
  const price = priceRow(qty, unit)
  return { desc, qty, unit, price, taxe }
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

const rows = [
  createRow('Lit', 100, 1.15, 10),
  createRow('Micro-onde', 10, 45.99, 10),
  createRow("Pack d'eau", 2, 17.99, 10)
]

const invoiceSubtotal = subtotal(rows)
const invoiceTaxes = TAX_RATE * invoiceSubtotal
const invoiceTotal = invoiceTaxes + invoiceSubtotal

export default function TableFacture() {
  const classes = useStyles()
  const [articles, setArticles] = useState([0])

  const addLigne = () => {
    setArticles([...articles, articles.length])
    console.log(articles)
  }

  return (
    <Table className={classes.table} aria-label='spanning table'>
      <TableHead>
        <TableRow>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell align='right'>Quantité</StyledTableCell>
          <StyledTableCell align='right'>Prix</StyledTableCell>
          <StyledTableCell align='right'>Total</StyledTableCell>
          <StyledTableCell align='right'>Total</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.desc}>
            <TableCell>{row.desc}</TableCell>
            <TableCell align='right'>{row.qty}</TableCell>
            <TableCell align='right'>{row.unit}</TableCell>
            <TableCell align='right'>{ccyFormat(row.price)}</TableCell>
            <TableCell align='right'>{row.taxe}</TableCell>
          </TableRow>
        ))}
        {articles.map(e => (
          <ItemRow key={e} />
        ))}
        <Button
          variant='outlined'
          style={{ marginTop: '10px' }}
          size='small'
          color='primary'
          onClick={addLigne}
        >
          Ajouter une ligne
        </Button>

        <TableRow>
          <TableCell rowSpan={4} />
          <TableCell colSpan={3}>Sous-total</TableCell>
          <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>Taxe</TableCell>
          <TableCell colSpan={1}>{`${(TAX_RATE * 100).toFixed(
            0
          )} %`}</TableCell>
          <TableCell align='right'>{ccyFormat(invoiceTaxes)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell align='right'>{ccyFormat(invoiceTotal)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
