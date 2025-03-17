import axios from "axios";

const url = "http://localhost:3000";

axios.get(`${url}/generate`)
  .then(response => {
    console.log("Random Number:", response.data);
    return axios.get(`${url}/current-time`);
  })
  .then(response => {
    console.log("Current Time:", response.data);
    return axios.get(`${url}/environment`);
  })
  .then(response => {
    console.log("Environment:", response.data);
    return axios.get(`${url}/puppet?key=value`);
  })
  .then(response => {
    console.log("Puppet Query Parameters:", response.data);
    return axios.post(`${url}/numbers`, { number: Math.floor(Math.random() * 100) });
  })
  .then(response => {
    console.log("Stored Number:", response.data);
    return axios.get(`${url}/numbers`);
  })
  .then(response => {
    console.log("All Stored Numbers:", response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
