import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import ParamGeneral from '../components/paramGeneral'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 15px;
  background: #fff;
`
const ParamGeneralScreen = () => {
  return (
    <div className='factures'>
      <NavBar />
      <Cont>
        <ParamGeneral />
      </Cont>
    </div>
  )
}

export default ParamGeneralScreen
