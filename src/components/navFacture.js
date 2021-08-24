/* eslint-disable react/prop-types */
import { alpha, makeStyles } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import { Button, InputBase } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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
// eslint-disable-next-line
const NavFacture = ({search, setSearch, handleStatus}) => {
  const classes = useStyles()
  // eslint-disable-next-line
   return(
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
          <span style={{ fontSize: '25px', marginLeft: '10px' }}>Factures</span>
        </div>
        <Button
          variant='contained'
          style={{
            backgroundColor: '#2E99FF',
            color: '#ffff'
          }}
          onClick={handleStatus}
        >
          Nouvelle facture
        </Button>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Recherche...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div>
  )
}
// eslint-disable-next-line
export default NavFacture