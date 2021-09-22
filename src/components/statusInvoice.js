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
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

const etats = ['Confirmée', 'Payée', 'Annulée']

const useStyles = makeStyles(theme => ({
  deleteButton: {
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main
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
    <Dialog onClose={handleClose} open={open}>
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
              {etat === 'Annulée' && <CancelIcon color={'secondary'} />}
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
  const classes = useStyles()
  console.log('invoice_id', invoice_id)

  const getColor = c => {
    if (String(c).toLowerCase() === 'confirmée') {
      return 'primary'
    }
    if (String(c).toLowerCase() === 'payée') {
      return 'error'
    } else {
      return 'secondary'
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

    console.log('Value :', senderValue, 'val:', value)

    axios
      .put('/factures/' + invoice_id, { etat: senderValue })
      .then(res => {
        console.log(res.data)
        setOpen(false)
        setSelectedValue(value)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <Button
        variant='outlined'
        className={getColor(selectedValue) === 'error' && classes.deleteButton}
        color={getColor(selectedValue)}
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
