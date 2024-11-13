const rps = 2
const thresholds = {
  http_req_duration: ['p(99)<2000'],
  http_req_failed: ['rate<0.01']
}

const testOptions = {
  somoke: {
    vus: 1,
    duration: '10s',
    rps: rps,
    thresholds: thresholds
  },

  performance: {
    vus: 5,
    duration: '2m',
    rps: rps,
    thresholds: thresholds
  },

  load: {
    stages: [
      { duration: '1m', target: 5 },
      { duration: '2m', target: 5 },
      { duration: '1m', target: 0 }
    ],
    rps: rps,
    thresholds: thresholds
  },

  stress: {
    stages: [
      { duration: '1m', target: 5 },
      { duration: '2m', target: 10 },
      { duration: '2m', target: 15 },
      { duration: '2m', target: 20 },
      { duration: '3m', target: 0 }
    ],
    rps: rps,
    thresholds: thresholds
  }
}


const selectedTest = __ENV.TEST || 'smoke';

export function handleOptions() {
  return testOptions.selectedTest
}

export function handleHeader(token) {
  let header = {
    'Content-Type': 'application/json'
  };
  if (token) {
    header['Authorization'] = `Bearer ${token}`;
  }
  return header
}