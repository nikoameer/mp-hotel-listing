import React from 'react'
import HotelList from '../HotelList.js';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

/*
**  Hotels page with Heading based with Typography MUI component and renders items from HotelList component
*/
function Hotels () {
  // useState hook for setting values for hotels and update it via setHotels
  const [hotels, setHotels] = useState(null);

  // usefEffect for fetching data from database, json endpoint on the first render only
  useEffect(() => {
    const fetchHotels = async () =>
      await fetch('http://localhost:8000/hotels')
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setHotels(data);
        });

    fetchHotels();
  }, []);

  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
        align="center">
        HOTEL LISTING
       </Typography>

      {/* Curly brackets to execute JavaScript inside template and only if value is not null */}
      {hotels && <HotelList hotels={hotels} />}
    </div>
  )
}

export default Hotels