import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import Factures from '../components/factures'
import Sidebar from '../components/Sidebar'

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
      <div className='factures'>
        <NavBar />
        <Cont>
          <Factures />
        </Cont>
      </div>
    </div>
  )
}

export default FacturesScreen
