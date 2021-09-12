import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://be.fx-signal.club/fx-signal/api",
  timeout: 60000,
});

export default AXIOS;
