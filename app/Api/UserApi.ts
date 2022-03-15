import HTTPClient from "./Client"

const userUrl = "/users"

export function getUserByName(nick: string) {
  return HTTPClient.get(userUrl + "/" + nick).then(response => response.data);
}

export function createUser(data: unknown) {
  return HTTPClient.post(userUrl, data).then(response => response.data);
}