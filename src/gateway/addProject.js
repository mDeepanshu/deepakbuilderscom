import axios from 'axios';

const getData = async () => {
  try {
    const response = await axios.get(`https://n6fpm9zzk8.execute-api.ap-south-1.amazonaws.com/dev/get-projects`);
    return response.data;  // return the data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // rethrow the error so the caller can handle it
  }
};

export default getData;
