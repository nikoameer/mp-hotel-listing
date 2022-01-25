import { useState } from 'react'
import Channel from './Channel';
import { makeStyles } from '@material-ui/core'

/*
**  HotelsList component for mapping json array and fetching the correct values.
*/
// use makeStyles Hook 
const useStyles = makeStyles({
  list: {
    width: '100%',
    margin: '1rem'
  },

  listItem: {
    background: '#d7e6ef',
    margin: '1rem',
    padding: '1rem'
  }
})


function HotelList ({ hotels }) {
  const classes = useStyles()

  // Function to check the status of the checkbox
  const checkEnable = e => {
    let check;

    // Condition to check value in checkbox 
    e.target.checked ? check = 'enabled' : check = 'disabled'

    console.log(check);
    //setVisibility(check);
  }

  return (
    // Get name and visibility of the hotel with form and checkbox
    <div className={classes.list}>
      {hotels.map(hotel => (
        <div className={classes.listItem}>
          <h2>{hotel.name}</h2>
          <Channel name={hotel.channel} visibility={hotel.visibility} />

          <form>
            <input
              id="enable"
              name="enable"
              type="checkbox"
              onChange={checkEnable}
            />

            <label for="enable"> Visibility</label>
          </form>

        </div>
      ))}
    </div>
  );
}
export default HotelList