import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import { Button, InputBase } from '@material-ui/core'
import ListeClients from './listeClients'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '84vh'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.12),
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

export default function Clients() {
  const classes = useStyles()
  const [input, setinput] = useState('')

  return (
    <Paper className={classes.root}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '2px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <PeopleAltOutlinedIcon fontSize='large' />
            <span style={{ fontSize: '25px', marginLeft: '10px' }}>
              Clients
            </span>
          </div>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#2E99FF',
              color: '#ffff',
              textTransform: 'none',
              fontSize: '15px'
            }}
          >
            Nouveau Client
          </Button>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Recherche...'
            value={input}
            onChange={e => setinput(e.target.value)}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      <ListeClients search={input} />
    </Paper>
  )
}
