import React, { useState, useEffect} from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

//components
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

//call API
import { getPlacesData } from './api/index.js'

const App = () => {

  const [places, setPlaces] = useState([])
  const [childClicked, setChildClicked] = useState(null)

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({})

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude} }) => {
      setCoordinates({lat:latitude, lng:longitude})
    })
  }, [])

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data)
        setPlaces(data);
        setIsLoading(false)
      })
  }, [coordinates, bounds])

  return (
    <>

      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width:'100%'}}>

        {/* full width is size 12, small screen takes up 12, medium screen takes up 4 for the left side list*/}
        <Grid item xs={12} md={4}>
          <List places={places} childClicked={childClicked} isLoading={isLoading}/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates} 
            setBounds={setBounds} 
            coordinates={coordinates} 
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>

      </Grid>

    </>
  )
}

export default App;
 