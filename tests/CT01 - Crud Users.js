import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { handleOptions, handleHeader, handleSummary } from '../utils/settings.js'
import checkStatus from '../utils/validation.js'
import createUser from '../factory/user.js'
import { endpoints } from '../utils/endpoints.js'
import http from 'k6/http';
import { sleep } from "k6";
const { user: userEndpoint } = endpoints;

export function handleSummary(data) {
  return {
    [`../reports/${__ENV.TEST}-crud-user.html`]: htmlReport(data),
  };
}

handleSummary(data)

export const options = handleOptions();

export default function () {
  const newUser = createUser()
  const username = JSON.parse(newUser).username
  const headers = handleHeader(null); //loginResponse.json('token')
  

  checkStatus(
    http.post(userEndpoint.create, newUser, { headers }),
    'should create user',
    200
  )


  checkStatus(
    http.get(userEndpoint.findUpdDel(username), { headers }),
    'should find user created',
    200
  )

  checkStatus(
    http.del(userEndpoint.findUpdDel(username), { headers }),
    'should delete user',
    200
  )

  checkStatus(
    http.get(userEndpoint.findUpdDel(username), { headers }),
    'should not find user deleted',
    404
  )
}