import http from "../http-common";
import authHeader from "./auth.header";

class UserDataService {
  // getAll() {
  //   return http.get("/users");
  // }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/auth/signup", data).then((response) => {
      if (response.data.message === "User registered successfully!") {
        this.login(data);
      } else {
        return response.data.message;
      }
    });
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  login(data) {
    return http.post("auth/signin", data).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  test() {
    return http.get("/test/user", { headers: authHeader() });
  }

  // delete(id) {
  //   return http.delete(`/users/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/users`);
  // }

  findByEmail(email) {
    return http.get(`/users?email=${email}`);
  }
}

export default new UserDataService();
