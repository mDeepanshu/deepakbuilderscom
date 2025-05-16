import axios from 'axios';
let all_data = null;
const getData = async () => {
  if (all_data) return all_data.data;
  try {
    all_data = await axios.get(`https://bjzw9oobx4.execute-api.ap-south-1.amazonaws.com/default/rkconstructions-dev-getAllProjects`);
    return all_data.data;  // return the data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // rethrow the error so the caller can handle it
  }
};

export default getData;
