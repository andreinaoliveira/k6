import { check } from 'k6';
export default function checkStatus(response, description, expectedStatus) {
    console.log(response)
    check(response, {
        [description]: (r) => r.status === expectedStatus,
    });
}