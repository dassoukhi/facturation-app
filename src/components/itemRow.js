/* eslint-disable react/prop-types */
import { TableCell, TableRow, TextField } from '@material-ui/core'
import React from 'react'

const ItemRow = ({ key }) => {
  return (
    <TableRow key={key}>
      <TableCell>
        <TextField
          id='descrition'
          name='descrition'
          label='Descrition'
          variant='outlined'
          size='small'
          fullWidth
          style={{ width: '300px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id='quantité'
          name='quantité'
          label='Quantité'
          type='number'
          variant='outlined'
          size='small'
          fullWidth
          style={{ width: '150px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id='prix'
          name='prix'
          label='Prix'
          variant='outlined'
          size='small'
          fullWidth
          style={{ width: '100px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id='total'
          name='total'
          label='Total'
          variant='outlined'
          size='small'
          fullWidth
          style={{ width: '100px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id='taxe'
          name='taxe'
          label='Taxe'
          variant='outlined'
          size='small'
          fullWidth
          style={{ width: '60px' }}
        />
      </TableCell>
    </TableRow>
  )
}

export default ItemRow
