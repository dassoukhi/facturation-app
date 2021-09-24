import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import EntrepriseParam from '../components/entrepriseParam'
import Sidebar from '../components/Sidebar'
import DivScreen from './divScreen'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 15px;
  background: #fff;
`
const EntrepriseParamScreen = () => {
  return (
    <div className='appContainer'>
      <Sidebar />
      <DivScreen>
        <NavBar />
        <Cont>
          <EntrepriseParam />
        </Cont>
      </DivScreen>
    </div>
  )
}

export default EntrepriseParamScreen
