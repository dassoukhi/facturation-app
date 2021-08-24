import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import Factures from '../components/factures'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 10px;
  background: #fff;
`
const FacturesScreen = () => {
  return (
    <div className='factures'>
      <NavBar />
      <Cont>
        <Factures />
      </Cont>
    </div>
  )
}

export default FacturesScreen
