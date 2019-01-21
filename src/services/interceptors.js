import axios from 'axios';


// config request before send to Server
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(localStorage.getItem('authUser')) {
    const token = JSON.parse(localStorage.getItem('authUser')).token;
    config.headers.common['Authorization'] = `bearer ${token}`;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// config response before send to UI
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


