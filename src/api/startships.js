import baseApi from "./base";

const path = "/starships";

export const listStarships = (params) => baseApi.get(path, { params });
export const showStarship = (id) => baseApi.get(`${path}/${id}`);
