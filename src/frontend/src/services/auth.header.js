import UserDataService from "../services/user.service";

export default function authHeader() {
  const user = UserDataService.getCurrentUser();

  if (user && user.accessToken) {
    return {Authorization: "Bearer " + user.accessToken};    
  } else {
    return {};
  }
}