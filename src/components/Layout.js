import React from 'react'
import { makeStyles, Drawer } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory, useLocation } from 'react-router-dom';
import Footer from './Footer';

/*
** Layout component for creating sidebar, content section and fetching footer
*/
const drawerWidth = 240

// use makeStyles Hook 
const useStyles = makeStyles({
  page: {
    width: '100%',
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  },
  active: {
    background: '#3f80be'
  }
})

function Layout ({ children }) {
  const classes = useStyles()

  // Use useHistory hook
  const history = useHistory()

  // Use useLocation hook
  const location = useLocation()

  // Menu items array with object item
  const menuItems = [
    {
      text: 'Hotels',
      path: '/'
    },
    {
      text: 'About us',
      path: 'about'
    }
  ]

  return (
    <div className={classes.root}>
      {/* drawer, sidebar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography
            variant="h5"
            component="h1"
            color="primary">
            MeetingPackage
          </Typography>
        </div>

        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              // Use push method to pass in route path in menu items
              onClick={() => history.push(item.path)}
              // Check active location and apply active class
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Contect section */}
      <div className={classes.page}>
        {children}
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  )
}

export default Layout
