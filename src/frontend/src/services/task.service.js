import http from "../http-common";
import authHeader from "./auth.header";

class TaskDataService {
  getAll() {
    return http.get("/tasks/currentuser", { headers: authHeader() });
  }

  get(id) {
    return http.get(`/tasks/${id}`, { headers: authHeader() });
  }

  create(data) {
    return http.post("/tasks/add", data, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/tasks/${id}`, { headers: authHeader() }, data);
  }

  delete(id) {
    return http.delete(`/tasks/${id}`, { headers: authHeader() });
  }

  // deleteAll() {
  //     return http.delete(`/tasks`);
  // }

  findByTask(task) {
    return http.get(`/tasks?task=${task}`, { headers: authHeader() });
  }
}

export default new TaskDataService();
