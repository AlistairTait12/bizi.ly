import http from "../http-common";

class UserDataService {
  signup(data) {
    return http.post("/auth/signup", data).then((response) => {
      if (response.data.message === "User registered successfully!") {
        this.login(data);
      } else {
        return response.data.message;
      }
    });
  }

  signin(data) {
    return http.post("auth/signin", data).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new UserDataService();
