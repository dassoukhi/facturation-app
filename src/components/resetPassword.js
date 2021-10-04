/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import API from '../services/api'
import notify from './notify'
import ToastMessage from './toastMessage'
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied'
const ResetPassword = props => {
  const [statutToken, setStatutToken] = useState(false)
  const [statutExpired, setStatutExpired] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const history = useHistory()
  useEffect(() => {
    axios
      .get(API + '/organisations/reset/' + props.match.params.token)
      .then(res => {
        console.log(res.data)
        setStatutToken(true)
      })
      .catch(err => {
        console.log(err.response.data.error)
        setStatutExpired(true)
      })
  }, [])

  const isOk = () => {
    if (
      password != '' &&
      passwordConfirm != '' &&
      password === passwordConfirm
    ) {
      return false
    }
    return true
  }

  const changePassword = () => {
    axios
      .post(API + '/organisations/reset/' + props.match.params.token, {
        password: password
      })
      .then(res => {
        console.log(res.data)
        notify(2)
        history.push('/')
      })
      .catch(err => console.log(err.response.data.error))
  }
  return (
    <div className='resetDiv'>
      <ToastMessage positionToast={'0px'} />
      <nav className='navbarReset'>Dass~olution</nav>

      {statutToken && (
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
                className='inputM'
                value={password}
                onChange={e => setPassword(e.target.value)}
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
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            id='btn'
            variant='contained'
            color='primary'
            size='large'
            disabled={isOk()}
            onClick={changePassword}
          >
            Valider
          </Button>
        </div>
      )}
      {statutExpired && (
        <div className='containerForm'>
          <p>
            Le lien que vous avez suivi a expiré, Veuillez ressayer avec un
            autre s'il vout plaît.
          </p>
          <SentimentVeryDissatisfied id='iconSad' />
        </div>
      )}
    </div>
  )
}

export default ResetPassword
