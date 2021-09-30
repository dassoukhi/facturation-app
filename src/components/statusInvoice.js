/* eslint-disable react/prop-types */
import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import CancelIcon from '@material-ui/icons/Cancel'
import Block from '@material-ui/icons/Block'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import API from '../services/api'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../features/listInvoicesSlice'

const etats = ['Confirmée', 'Payée', 'Annulée', 'Supprimée']

const useStyles = makeStyles(theme => ({
  paidButton: {
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main
  },
  cancelButton: {
    color: theme.palette.warning.main,
    borderColor: theme.palette.warning.main
  },
  confirmButton: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
}))

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = value => {
    onClose(value)
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      style={{
        marginLeft: 'calc(1px + 15vw)',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'calc(4px + 9vw)'
      }}
    >
      <DialogTitle
        style={{
          backgroundColor: '#fff',
          height: '60px',
          alignContent: 'center',
          alignSelf: 'center',
          justifyContent: 'center'
        }}
      >
        État de la facture
      </DialogTitle>
      <List sx={{ pt: 0 }} style={{ backgroundColor: '', marginTop: '-10px' }}>
        {etats.map(etat => (
          <ListItem button onClick={() => handleListItemClick(etat)} key={etat}>
            <ListItemAvatar>
              {etat === 'Confirmée' && <CheckCircleIcon color='primary' />}
              {etat === 'Payée' && (
                <AssignmentTurnedInIcon style={{ color: '#4caf50' }} />
              )}
              {etat === 'Annulée' && <Block style={{ color: '#eed202' }} />}
              {etat === 'Supprimée' && <CancelIcon color={'secondary'} />}
            </ListItemAvatar>
            <ListItemText primary={etat} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
}

export default function StatusInvoice({ status, invoice_id }) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(status)
  const dispatch = useDispatch()
  const classes = useStyles()
  console.log('invoice_id', invoice_id)

  const getColor = c => {
    if (String(c).toLowerCase() === 'confirmée') {
      return classes.confirmButton
    }
    if (String(c).toLowerCase() === 'payée') {
      return classes.paidButton
    } else {
      return classes.cancelButton
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = value => {
    let senderValue
    if (value === 'Payée') {
      senderValue = 'paid'
    }
    if (value === 'Confirmée') {
      senderValue = 'confirm'
    }
    if (value === 'Annulée') {
      senderValue = 'cancel'
    }
    if (value === 'Supprimée') {
      senderValue = 'delete'
    }

    console.log('Value :', senderValue, 'val:', value)

    if (senderValue !== 'delete') {
      axios
        .put(API + '/factures/' + invoice_id, { etat: senderValue })
        .then(res => {
          console.log(res.data)
          setOpen(false)
          setSelectedValue(value)
        })
        .catch(err => {
          console.error(err)
          setOpen(false)
        })
    } else {
      axios
        .delete(API + '/factures/' + invoice_id)
        .then(res => {
          console.log(res.data)
          dispatch(deleteItem(invoice_id))
        })
        .catch(err => console.error(err))
      setOpen(false)
    }
  }

  return (
    <div>
      <Button
        variant='outlined'
        className={getColor(selectedValue)}
        style={{
          textTransform: 'none',
          marginRight: '-13px'
        }}
        onClick={handleClickOpen}
      >
        {selectedValue}
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}
