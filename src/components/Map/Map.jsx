import React from 'react'

import GoogleMapReact from 'google-map-react'

import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { LocationOnOutlined } from '@material-ui/icons/LocationOnOutlined'

import useStyles from "./styles"

const Map = ({ setCoordinates, setBounds, coordinates}) => {

  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
      <div className={classes.mapContainer}>  

        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyBuzY_q2NcpT3uTXyI4lVHX2DEj0i3qrsQ'}} 
          defaultCenter={coordinates} 
          center={coordinates}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={''}
          onChange={(e) => {
            console.log(e);

            setCoordinates({ lat:e.center.lat, lng:e.center.lng })
            setBounds({ ne:e.marginBounds.ne, sw:e.marginBounds.sw })
          }}
          onChildClick = {''}>

        </GoogleMapReact>

      </div>
  )
}

export default Map