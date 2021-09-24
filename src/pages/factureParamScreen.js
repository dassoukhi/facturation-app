import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import FactureParam from '../components/factureParam'
import Sidebar from '../components/Sidebar'
import DivScreen from './divScreen'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 15px;
  background: #fff;
`
const FactureParamScreen = () => {
  return (
    <div className='appContainer'>
      <Sidebar />
      <DivScreen>
        <NavBar />
        <Cont>
          <FactureParam />
        </Cont>
      </DivScreen>
    </div>
  )
}

export default FactureParamScreen
