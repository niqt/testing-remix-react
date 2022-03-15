import HTTPClient from "./Client"

const authUrl = "/api/v1/user/login"

export function login(username: string, password: string) {
  var userRest = {
    user : {
      username : username,
      password : password
    },
    message : "",
    status : false
  }
  return HTTPClient.post(authUrl, userRest).then(response => response.data);
}


export default login