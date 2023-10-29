import axios from "axios";

const ApiManager = axios.create({
  baserURL: "https://eventbackend-production.up.railway.app/api/",
  // baserURL: "https://eventbackend-production.up.railway.app/api/user/register",
  reponseType: "json",
  withCredentials: true,
});

export default ApiManager;
