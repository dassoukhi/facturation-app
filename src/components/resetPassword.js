/* eslint-disable react/prop-types */
import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API from '../services/api'

const ResetPassword = props => {
  const [statutToken, setStatutToken] = useState(false)
  useEffect(() => {
    axios
      .get(API + '/organisations/reset/' + props.match.params.token)
      .then(res => {
        console.log(res.data)
        setStatutToken(true)
      })
      .catch(err => console.log(err.response.data.error))
  }, [])
  return (
    <div className='resetDiv'>
      <nav className='navbarReset'>Dass~olution</nav>
      <div className='containerForm'>
        <div className='divPanel'>
          <p>Changer votre mot de passe</p>
          <hr />
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              id='password'
              name='password'
              type='password'
              label='Nouveau mot de passe'
              fullWidth
              autoComplete='given-name'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id='password_confirm'
              name='password_confirm'
              type='password'
              label='Confirmer le mode de passe'
              fullWidth
              autoComplete='given-name'
              variant='outlined'
            />
          </Grid>
        </Grid>
        <Button
          variant='contained'
          color='primary'
          size='large'
          style={{
            marginTop: '30px',
            textTransform: 'none',
            width: '200px',
            height: '50px'
          }}
        >
          Valider
        </Button>
      </div>
      {/* {statutToken && <p>Success</p>} */}
    </div>
  )
}

export default ResetPassword
