import React from 'react'
import { makeStyles, Drawer, Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

/*
** Footer with heading and simple list "acting" as links in footer
*/

// use makeStyles Hook 
const useStyles = makeStyles({
  drawer: {
    background: '#195589'
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    color: '#fff'
  }
})

function Footer () {
  const classes = useStyles()
  return (
    <footer >
      {/* Drawer, footer section */}
      <Drawer
        variant="permanent"
        anchor="bottom"
        align="center"
        classes={{ paper: classes.drawer }}
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
        >
          MeetingPackage
         </Typography>

        {/* Footer menu */}
        <List className={classes.menu}>
          <ListItem button><ListItemText>Company</ListItemText></ListItem>
          <ListItem button> <ListItemText>Contact</ListItemText></ListItem>
          <ListItem button><ListItemText>Blog</ListItemText></ListItem>
        </List>
      </Drawer>
    </footer>
  )
}

export default Footer
