import api from "./axiosClient";
import axios from "axios";
// import qs from "qs";
export const user = {
    async getAll() {
        const { data } = await api.get("/users");
        return data;
    },
    async createOneUser({ name , image}) {
        console.log(name);
        const { data } = await api.post("/users", {name: name, image:image} , {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
        return data;
      },
    async createPost({text, owner}) {
      const {data} = await api.post("/posts", {text:text, owner:owner}, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    },
    async getAllpost() {
      const { data } = await api.get("/posts");
      return data;
  },
}; 