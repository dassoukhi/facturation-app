import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/navBar'
import Review from '../components/review'

const Cont = styled.div`
  display: block;
  height: 100%;
  margin: 15px;
  background: #fff;
`
const Factures = () => {
  return (
    <div className='factures'>
      <NavBar />
      <Cont>
        <Review />
      </Cont>
    </div>
  )
}

export default Factures
