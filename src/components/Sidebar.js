import React from 'react'
import { useHistory } from 'react-router'
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
  width: calc(1px + 15vw);
  height: 100vh;
  @media (max-width: 990px) {
    display: none;
  }
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
  border-radius: ;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = () => {
  const user = localStorage.getItem('user')
  const history = useHistory()
  console.log('user : ', user)
  if (!user) {
    history.push('/')
  }
  return (
    <>
      <SidebarNav sidebar={null}>
        <SidebarWrap>
          <NavIcon to='#'>
            <span style={{ color: '#fafafa', fontSize: 'calc(5px + 1.6vw)' }}>
              Dass~olution
            </span>
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
