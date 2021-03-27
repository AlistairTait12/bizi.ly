import http from "../http-common";

class UserDataService {
  // getAll() {
  //   return http.get("/users");
  // }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/auth/signup", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  login(data){
    return http.post('auth/signin', data)
  }

  test(){
    return http.get('/test/mod')
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
