// import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
// import styled from 'styled-components'
import ToolBar from './toolbar'

// const Nav = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   position: sticky;
//   top: 0;
//   border-bottom: ridge;
//   z-index: 1;
// `
// const useStyles = makeStyles(theme => ({
//   appBar: {
//     position: 'sticky'
//   },
//   le: {
//     color: theme
//   }
// }))
export default function NavBar() {
  //   const classes = useStyles()
  return (
    // <Nav>
    //   <AppBar position='absolute' color='white' className={classes.appBar}>
    //     <Toolbar>
    //       <Typography variant='h6' color='inherit' noWrap>
    //         Company name
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </Nav>
    <ToolBar />
  )
}
