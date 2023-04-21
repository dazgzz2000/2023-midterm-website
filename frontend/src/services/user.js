import api from "./axiosClient";
import axios from "axios";
// import qs from "qs";
export const user = {
    async getAll() {
        const { data } = await api.get("/users");
        return data;
    },
    async createOneUser({ name }) {
        console.log(name);
        const { data } = await api.post("/users", {name: name} , {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
        return data;
      },
}; 