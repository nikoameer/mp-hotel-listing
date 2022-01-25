import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

/*
**  About page with Heading based with Typography MUI component and simple paragraph
*/
// use makeStyles Hook for styles
const useStyles = makeStyles({
  text: {
    width: '100%',
    margin: '1rem'
  }
})

function About () {
  const classes = useStyles()

  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
        align="center">
        History
       </Typography>

      <p className={classes.text}>Our company was founded in 2014 when our CEO experienced himself the frustration of searching for and booking a meeting room.
         How could it be such a complicated and time consuming process? Bookers spend hours looking for the perfect meeting location and, on the other hand,
         venues use a tremendous amount of time formulating quotations with a conversion potential often lower than 10%.
         MeetingPackage was born from this challenge, charged with the mission to help hoteliers selling their meeting rooms with the same ease as they can sell their bedrooms.
        </p>
    </div>
  )
}

export default About