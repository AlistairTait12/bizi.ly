import http from "../http-common";
import authHeader from "./auth.header";

class TaskDataService {
  getUserAllTasks() {
    return http.get("/tasks/currentuser", { headers: authHeader() });
  }

  getUserCompleteTasks(){
    return http.get('tasks/complete', {headers: authHeader()});
  }

  getUserNotCompleteTasks(){
    return http.get('tasks/notcomplete', {headers: authHeader()}); 
  }

  add(data) {
    return http.post("/tasks/add", data, { headers: authHeader() });
  }

  update(id) {
    return http.put(`/tasks/${id}`, { headers: authHeader() })
    .then((response) => http.post("/achievements/check", response, { headers: authHeader() }));
  }

  delete(id) {
    return http.delete(`/tasks/${id}`, { headers: authHeader() });
  }
}

export default new TaskDataService();
