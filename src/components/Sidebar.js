import React from 'react'
import styled from 'styled-components'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'

const NavIcon = styled.div`
  margin-left: 1rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.div`
  background: #000131;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = () => {
  return (
    <>
      <SidebarNav sidebar={null}>
        <SidebarWrap>
          <NavIcon to='#'>
            <span style={{ color: '#fafafa' }}>Dass~olution</span>
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  )
}

export default Sidebar
