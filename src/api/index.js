import axios from 'axios';
import { useState } from 'react';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw?.lat,
                tr_latitude: ne?.lat,
                bl_longitude: sw?.lng,
                tr_longitude: ne?.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'bc9c1e1a02msh05455d4a7c55202p1bbf92jsnf0a62dbe6c9e',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};