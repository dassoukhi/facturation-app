/* eslint-disable react/prop-types */
import { IconButton, TableCell, TableRow, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

const ItemRow = ({ keyItem, deleteItem }) => {
  const [description, setDescription] = useState('')
  const [quantite, setQuantite] = useState(0)
  const [prix, setPrix] = useState('')
  const [total, setTotal] = useState('')
  const [taxe, setTaxe] = useState('')
  console.log(
    'key ',
    keyItem,
    'desc ',
    description,
    'qt ',
    quantite,
    'prix ',
    prix,
    'total ',
    total,
    'taxe ',
    taxe
  )

  return (
    <TableRow key={keyItem}>
      <TableCell>
        <TextField
          id={'description' + keyItem}
          name='description'
          label='Description'
          variant='outlined'
          value={description}
          onChange={e => setDescription(e.target.value)}
          size='small'
          fullWidth
          style={{ width: '300px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id={'quantité' + keyItem}
          name='quantité'
          label='Quantité'
          type='number'
          variant='outlined'
          value={quantite}
          onChange={e => setQuantite(e.target.value)}
          size='small'
          fullWidth
          style={{ width: '150px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id={'prix' + keyItem}
          name='prix'
          label='Prix'
          variant='outlined'
          value={prix}
          onChange={e => setPrix(e.target.value)}
          size='small'
          fullWidth
          style={{ width: '100px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id={'total' + keyItem}
          name='total'
          label='Total'
          variant='outlined'
          value={total}
          onChange={e => setTotal(e.target.value)}
          size='small'
          fullWidth
          style={{ width: '100px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id={'taxe' + keyItem}
          name='taxe'
          label='Taxe'
          variant='outlined'
          value={taxe}
          onChange={e => setTaxe(e.target.value)}
          size='small'
          fullWidth
          style={{ width: '60px' }}
        />
      </TableCell>
      {keyItem === 0 ? (
        <IconButton disabled style={{ marginTop: '15px' }}>
          <DeleteOutlinedIcon fontSize='small' />
        </IconButton>
      ) : (
        <IconButton onClick={deleteItem} style={{ marginTop: '15px' }}>
          <DeleteOutlinedIcon fontSize='small' />
        </IconButton>
      )}
    </TableRow>
  )
}

export default ItemRow
