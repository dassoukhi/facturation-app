import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import Clients from '../components/clients'
import Sidebar from '../components/Sidebar'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 10px;
  background: #fff;
`
const ClientsScreen = () => {
  return (
    <div className='appContainer'>
      <Sidebar />
      <div className='clients'>
        <NavBar />
        <Cont>
          <Clients />
        </Cont>
      </div>
    </div>
  )
}

export default ClientsScreen
