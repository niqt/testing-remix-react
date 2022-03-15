import axios from 'axios';

const axiosClient = axios.create({
  baseURL : 'https://api.github.com/',
  //baseURL : 'http://localhost:8080',
  headers : {
    "Content-Type": 'application/json', 
    
  },
  timeout : 2000
});

export default axiosClient

