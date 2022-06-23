import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinate = { lat: 0, lng: 0 };
    return (
        <div style={{ marginTop: '80px' }}>
            <div className={classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCS6Sk-ZFfStGEBj1oSltQpp2Swrgo9bt4' }}
                    defaultCenter={coordinate}
                    center={coordinate}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={''}
                    onChange={''}
                    onChildClick={''}
                >

                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Map;