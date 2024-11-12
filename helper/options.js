const rps = 2
const thresholds = {
  http_req_duration: ['p(99)<2000'],
  http_req_failed: ['rate<0.01']
}

const smoke = {
  vus: 1, 
  duration: '1m',
  rps: rps,
  thresholds: thresholds
};

const performance = {
  vus: 5, 
  duration: '2m',
  rps: rps,
  thresholds: thresholds
};

const load = {
  stages: [
    {duration: '1m', target: 5},
    {duration: '2m', target: 5},
    {duration: '1m', target: 0}
  ],
  rps: rps,
  thresholds: thresholds
};

const stress = {
  stages: [
    {duration: '1m', target: 5},
    {duration: '2m', target: 10},
    {duration: '2m', target: 15},
    {duration: '2m', target: 20},
    {duration: '3m', target: 0}
  ],
  rps: rps,
  thresholds: thresholds
};

const optionsType = __ENV.TEST || 'smoke'; 

export function handleOptions() {
  switch (optionsType) {
    case 'smoke': return smoke;
    case 'performance': return performance;
    case 'load': return load;
    case 'stress': return stress;
    default:
      console.error(`Unknown options type: ${optionsType}`);
      process.exit(1);
  }
}