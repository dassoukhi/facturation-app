import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import Clients from '../components/clients'
import Sidebar from '../components/Sidebar'
import DivScreen from './divScreen'

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
      <DivScreen>
        <NavBar />
        <Cont>
          <Clients />
        </Cont>
      </DivScreen>
    </div>
  )
}

export default ClientsScreen
