import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  load: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: 'calc(1px + 85vw)',
    bottom: '0px',
    right: '0px',
    zIndex: '999',
    marginLeft: 'calc(1px + 15vw)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    // marginBottom: 'calc(0px + 30vh)',
    color: 'white',
    textShadow: 'none',
    fontFamily: 'none'
  },
  circular: {
    color: 'white'
  }
})

const WaitBeforePdf = () => {
  const classes = useStyles()

  return (
    <div className={classes.load}>
      <p className={classes.message}>Génération de la facture en cours ...</p>
      <CircularProgress className={classes.circular} />
    </div>
  )
}

export default WaitBeforePdf
