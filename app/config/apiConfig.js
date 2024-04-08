import axios from "axios";
import endpoints from "./endpoints";
import { makeStore } from "../lib/store";
const fetchClient = () => {
  const auth = makeStore().getState().Auth;
  const token = localStorage.getItem("userTokenProperty");
  console.log("token..........", token);
  const defaultOptions = {
    baseURL: endpoints.BASE_URL,
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${auth?.token !== "" ? auth?.token : ""}`,
      Authorization: `Bearer ${token}`,
    },
  };

  // Create instance
  // @ts-ignore
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  // instance.interceptors.request.use(function (config) {
  //   const token = auth.token;
  //   config.headers.Authorization = token ? `Bearer ${token}` : "";
  //   return config;
  // });

  return instance;
};
const API = {
  get: async (path) => {
    try {
      return await fetchClient().get(path);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  },
  post: async (path, params) => {
    try {
      return await fetchClient().post(path, params);
    } catch (error) {
      throw error;
    }
  },
  put: async (path, params) => {
    try {
      return await fetchClient().put(path, params);
    } catch (error) {
      throw error;
    }
  },
  delete: async (path) => {
    try {
      return await fetchClient().delete(path);
    } catch (error) {
      throw error;
    }
  },
  patch: async (path) => {
    try {
      return await fetchClient().patch(path);
    } catch (error) {
      throw error;
    }
  },
  // upload(path: string, params: any) {
  //   return fetchClient().post(path, params, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  // },
};
makeStore().subscribe(fetchClient);

export default API;
