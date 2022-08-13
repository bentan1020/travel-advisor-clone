import React from 'react'

import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles"

const Header = () => {

  const classes = useStyles();

  return (

    <AppBar position='static'>

      <Toolbar className={classes.toolbar}>

        {/* Title */}
        <Typography variant='h5' className={classes.title}>
          Travel Advisor
        </Typography>

        {/* Right hand nav */}
        <Box className={classes.navContainer}>

          <Typography variant='h6' className={classes.title}>
            Explore new places
          </Typography>

          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' classes={{root:classes.inputRoot, input:classes.inputInput}}></InputBase>
            </div>
          {/* </Autocomplete> */}

        </Box>

      </Toolbar>

    </AppBar>

  )
}

export default Header  