import { handleHeader } from './headers.js';
import { auth } from './endpoints.js';
import http from 'k6/http';

export function performLogin() {
  const payload = JSON.stringify({
    username: __ENV.ENROLLMENT,
    password: __ENV.PASSWORD
  });

  const headers = handleHeader(token);

  const res = http.post(auth.login, payload, { headers });

  return res;
}
