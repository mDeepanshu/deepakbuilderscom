import axios from 'axios';

const getData = async () => {
  try {
    const response = await axios.get(`https://iaorjab8qa.execute-api.ap-south-1.amazonaws.com/default/rkconstructions-dev-getAllProjects`);
    return response.data;  // return the data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // rethrow the error so the caller can handle it
  }
};

export default getData;
