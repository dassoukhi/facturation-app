/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Button } from '@material-ui/core'
import ItemRow from './itemRow'
import { useDispatch, useSelector } from 'react-redux'
import { addArticle, deleteArticle } from '../features/articleSlice'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#eeee',
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const useStyles = makeStyles({
  table: {
    marginTop: 20,
    width: '100%'
  }
})

export default function TableFacture({
  subTotal,
  devise,
  total,
  taxe,
  taxPercent
}) {
  const classes = useStyles()
  const currentArticles = useSelector(state => state.article.value)
  const dispatch = useDispatch()
  const [counter, setcounter] = useState(1)

  const addItem = () => {
    dispatch(
      addArticle({
        id: counter,
        description: '',
        quantite: '',
        prix: '',
        total: '',
        taxe: '0'
      })
    )
    setcounter(counter + 1)
  }

  const deleteItem = e => {
    dispatch(deleteArticle(e))
  }
  console.log('pricipal redux ', currentArticles)

  return (
    <Table className={classes.table} aria-label='spanning table'>
      <TableHead>
        <TableRow key={'headerInvoice'}>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell align='right'>Quantité</StyledTableCell>
          <StyledTableCell align='right'>Prix</StyledTableCell>
          <StyledTableCell align='right'>Total</StyledTableCell>
          <StyledTableCell align='right'>Taxe</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currentArticles.map(e => (
          // eslint-disable-next-line react/jsx-key
          <ItemRow
            key={e.id}
            keyItem={e.id}
            deleteItem={() => deleteItem(e.id)}
          />
        ))}
        <tr>
          <td>
            <Button
              variant='outlined'
              style={{ marginTop: '10px' }}
              size='small'
              color='primary'
              onClick={addItem}
            >
              Ajouter une ligne
            </Button>
          </td>
        </tr>
        <TableRow key='stotal'>
          <TableCell rowSpan={4} />
          <TableCell colSpan={3}>Sous-total</TableCell>
          <TableCell align='right'>{subTotal + ' ' + devise}</TableCell>
        </TableRow>
        <TableRow key='taxe'>
          <TableCell colSpan={2}>Taxe</TableCell>
          <TableCell colSpan={1}>{`${taxPercent} %`}</TableCell>
          <TableCell align='right'>{taxe + ' ' + devise}</TableCell>
        </TableRow>
        <TableRow key='total'>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell align='right'>{total + ' ' + devise}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
