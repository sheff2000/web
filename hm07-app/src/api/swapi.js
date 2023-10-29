import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchStarships = async (nowPage) => {
  try {
    let response = {};
    if (nowPage === 0)
    {
        response = await axios.get(`${BASE_URL}/starships`);
    }
    else
    {
        response = await axios.get(`${BASE_URL}/starships/?page=${nowPage}`);
    }
    return response.data;
  } catch (error) {
        console.error("Error fetching starships:", error);
    throw error;
  }
};

export const fetchPilot = async (pilotId) => {
  try {
        const response = await axios.get(`${BASE_URL}/people/${pilotId}/`);
    return response.data;
  } catch (error) {
        console.error(`Error fetching pilot with ID ${pilotId}:`, error);
    throw error;
  }
};
