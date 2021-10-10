/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  /* &:hover {
    background: #1769aa;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  } */

  background: ${props => props.isActive};

  &:hover {
    background: gray;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-size: 15px;
  padding-top: 5px;
`

const DropdownLink = styled(Link)`
  background: #0e0e21;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  background-color: ${props => props.isActive};

  &:hover {
    background: gray;
    cursor: pointer;
  }
  &:active {
    background: #252831;
  }
`
const IconDiv = styled.div`
  font-size: 1.2rem;
`
const SubMenu = ({ item, active }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)
  const isActive = active ? '#1769aa' : ''
  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        isActive={isActive}
      >
        <div style={{ display: 'flex' }}>
          <IconDiv>{item.icon}</IconDiv>

          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} isActive={isActive}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default SubMenu
