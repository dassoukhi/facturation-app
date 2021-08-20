import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import Checkout from './checkout'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 15px;
  background: #fff;
`
const Profile = () => {
  return (
    <div className='profile'>
      <NavBar />
      <Cont>
        <Checkout />
      </Cont>
    </div>
  )
}

export default Profile
