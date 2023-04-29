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
      });
      return data;
    },
    async getAllpost() {
      const { data } = await api.get("/posts");
      return data;
  },
  async deletepost({id}) {
    console.log("services in user", id);
    const {data} = await api.post("/deletes", { id: id }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: { id: id }
    });
    return data;
  },
}; 