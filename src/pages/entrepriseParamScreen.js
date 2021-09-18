import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import EntrepriseParam from '../components/entrepriseParam'
import Sidebar from '../components/Sidebar'

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
      <div className='factures'>
        <NavBar />
        <Cont>
          <EntrepriseParam />
        </Cont>
      </div>
    </div>
  )
}

export default EntrepriseParamScreen
