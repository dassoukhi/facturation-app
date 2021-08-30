/* eslint-disable react/prop-types */
import { IconButton, TableCell, TableRow, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { useDispatch } from 'react-redux'
import {
  changeDescript,
  changePrix,
  changeQuantite,
  changeTaxe,
  changeTotal
} from '../features/invoceSlice'

const ItemRow = ({ keyItem, deleteItem }) => {
  const [description, setDescription] = useState('')
  const [quantite, setQuantite] = useState(1)
  const [prix, setPrix] = useState('')
  const [total, setTotal] = useState('')
  const [taxe, setTaxe] = useState('')
  const dispatch = useDispatch()
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
  const handleDescription = e => {
    setDescription(e.target.value)
    dispatch(changeDescript({ id: keyItem, value: e.target.value }))
  }

  const handleQuantite = e => {
    setQuantite(e.target.value)
    if (prix !== '' && !isNaN(prix)) {
      let qte = new Number(e.target.value)
      let prx = new Number(prix)
      let totl = (qte * prx).toFixed(2)
      setTotal(totl.toString())
      dispatch(changeTotal({ id: keyItem, value: totl.toString() }))
    }
    dispatch(changeQuantite({ id: keyItem, value: e.target.value }))
  }
  const handlePrix = e => {
    if (!isNaN(e.target.value)) {
      setPrix(e.target.value)
      if (!isNaN(quantite)) {
        let prx = new Number(e.target.value)
        let qte = new Number(quantite)
        let totl = (qte * prx).toFixed(2)
        setTotal(totl.toString())
        dispatch(changeTotal({ id: keyItem, value: totl.toString() }))
      }
      dispatch(changePrix({ id: keyItem, value: e.target.value }))
    }
  }

  const handleTaxe = e => {
    setTaxe(e.target.value)
    dispatch(changeTaxe({ id: keyItem, value: e.target.value }))
  }
  return (
    <TableRow key={keyItem}>
      <TableCell>
        <TextField
          id={'description' + keyItem}
          name='description'
          label='Description'
          variant='outlined'
          value={description}
          onChange={handleDescription}
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
          onChange={handleQuantite}
          InputProps={{ inputProps: { min: 1 } }}
          size='small'
          fullWidth
          style={{ width: '100px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id={'prix' + keyItem}
          name='prix'
          label='Prix'
          variant='outlined'
          value={prix}
          onChange={handlePrix}
          size='small'
          fullWidth
          style={{ width: '150px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id={'total' + keyItem}
          name='total'
          label='Total'
          variant='outlined'
          value={total}
          disabled
          size='small'
          fullWidth
          style={{ width: '150px' }}
        />
      </TableCell>
      <TableCell align='right'>
        <TextField
          id={'taxe' + keyItem}
          name='taxe'
          label='Taxe'
          variant='outlined'
          value={taxe}
          onChange={handleTaxe}
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
