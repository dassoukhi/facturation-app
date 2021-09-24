import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import Factures from '../components/factures'
import Sidebar from '../components/Sidebar'
import DivScreen from './divScreen'

const Cont = styled.div`
  display: block;
  height: 100vh;
  margin: 10px;
  background: #fff;
`
const FacturesScreen = () => {
  return (
    <div className='appContainer'>
      <Sidebar />
      <DivScreen>
        <NavBar />
        <Cont>
          <Factures />
        </Cont>
      </DivScreen>
    </div>
  )
}

export default FacturesScreen
