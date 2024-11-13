import { randomString, randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export default function createUser() {
    return JSON.stringify({
        id: `${randomIntBetween(1000, 9999)}`,
        username: `user-${randomString(5)}`,
        firstName: `First-${randomString(5)}`,
        lastName: `Last-${randomString(5)}`,
        email: `${randomString(5)}@k6.com`,
        password: 'senha',
        phone: `${randomIntBetween(1000, 9999)}`,
        userStatus: 1,
    });
}