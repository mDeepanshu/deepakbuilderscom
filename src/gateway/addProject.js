import axios from 'axios';

const addData = async (projectData) => {
  try {
    const response = await axios.post(`https://n9okaf9j4h.execute-api.ap-south-1.amazonaws.com/prod/one`,projectData);
    return response.data;  // return the data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // rethrow the error so the caller can handle it
  }
};

export default addData;