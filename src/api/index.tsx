import axios from 'axios';

export const fetchData = async (url: string) => {
  const response = await axios.get(url);

  console.log(response.data.data);

  return response.data.data;
};
