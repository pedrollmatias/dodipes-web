import axios from "axios";

const publicApi = axios.create();

const privateApi = axios.create();

privateApi.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem("@dodipes:access-token");

  request.headers.authorization = accessToken;

  return request;
});

export { privateApi, publicApi };
