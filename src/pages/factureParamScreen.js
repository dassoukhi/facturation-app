import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import FactureParam from '../components/factureParam'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 15px;
  background: #fff;
`
const FactureParamScreen = () => {
  return (
    <div className='factures'>
      <NavBar />
      <Cont>
        <FactureParam />
      </Cont>
    </div>
  )
}

export default FactureParamScreen
