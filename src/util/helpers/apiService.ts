import axios from 'axios';

const baseURL = 'https://newsapi.org/v2';
const apiKey = 'd65fb642634249529947df670aa69d90';
export function get(url: string) {
  const myUrl = `${baseURL}${url}&apiKey=${apiKey}`;
  return axios.get(myUrl);
}
