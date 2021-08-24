import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { useState } from 'react'
import ListeFactures from './listeFactures'
import NavFacture from './navFacture'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '85vh'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.15)
    },
    marginLeft: 0,
    marginRight: 15,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

export default function Factures() {
  const classes = useStyles()
  const [input, setinput] = useState('')
  const [createStatus, setCreateStatus] = useState(false)
  const handleStatus = () => {
    setCreateStatus(!createStatus)
  }

  return (
    <Paper className={classes.root}>
      {/* eslint-disable react/prop-types */}
      {!createStatus && <NavFacture search={input} setSearch={setinput} handleStatus={handleStatus}/>}
      {!createStatus && <ListeFactures search={input} />}
      {createStatus && <Button variant='contained' color='secondary' onClick={handleStatus}>Annuler</Button>}
    </Paper>
  )
}
