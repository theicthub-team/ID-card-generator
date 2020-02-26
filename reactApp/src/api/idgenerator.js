import axios from "axios";

export default axios.create({
  baseURL: "https://custom-id.herokuapp.com/api/v1/",
  headers: {}
});
