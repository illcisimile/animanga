import axios from 'axios';

export const fetchData = async (url: string) => {
  const response = await axios.get(url);

  console.log('fetching...');

  return response.data.data;
};

export const fetchRandomQuote = async (url: string) => {
  const response = await axios.get(url);

  console.log('fetching...');

  return response.data;
};
