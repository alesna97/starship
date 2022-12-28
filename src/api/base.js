import Axios from "axios";

const baseApi = Axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

export default baseApi;
