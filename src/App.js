import React, { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Grid } from '@mui/material';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    // * find your current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        console.log(coordinates, bounds);
        getPlacesData(bounds?.sw, bounds?.ne)
            .then((data) => {
                setPlaces(data);
            });
    }, [bounds, coordinates]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;