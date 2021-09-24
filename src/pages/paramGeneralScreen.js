import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import ParamGeneral from '../components/paramGeneral'
import Sidebar from '../components/Sidebar'
import DivScreen from './divScreen'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 15px;
  background: #fff;
`
const ParamGeneralScreen = () => {
  return (
    <div className='appContainer'>
      <Sidebar />
      <DivScreen>
        <NavBar />
        <Cont>
          <ParamGeneral />
        </Cont>
      </DivScreen>
    </div>
  )
}

export default ParamGeneralScreen
