import React from 'react'

import GoogleMapReact from 'google-map-react'

import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from "./styles"

const Map = ({ setCoordinates, setBounds, coordinates, places}) => {

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

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
            setCoordinates({ lat:e.center.lat, lng:e.center.lng })
            setBounds({ ne:e.marginBounds.ne, sw:e.marginBounds.sw })
          }}
          onChildClick = {''}>
            
            {places?.map((place, i) => (
              <div 
                className={classes.markerContainer} 
                lat={Number(place.latitude)} 
                lng={Number(place.longitude)}
                key={i}
                >
                  {
                    !isDesktop ? (
                      <LocationOnIcon color='primary' fontSize="large"/>
                    ) : (
                      <Paper elevation={3} className={classes.paper}>

                        <Typography className={classes.Typography} variant= "subtitle2" gutterBottom>
                          {place.name}
                        </Typography>

                        <img 
                          className={classes.pointer}
                          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                          alt={place.name} 
                        />

                        <Rating size='small' value= {Number(place.rating)} readOnly></Rating>

                      </Paper>
                    )
                  }
              </div>
            ))}

        </GoogleMapReact> 

      </div>
  )
}

export default Map