import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-e8003.cloudfunctions.net/api",
  // "http://localhost:5001/clone-e8003/us-central1/api", // api (cloud function) url
});

export default instance;

// https://us-central1-clone-e8003.cloudfunctions.net/api
