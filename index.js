import { executeOptimizely } from './optimizely.js';
import { executeVWO } from './VWO.js';

document.getElementById('optimizely').addEventListener('click', () => {
  console.log(executeOptimizely());
});

document.getElementById('vwo').addEventListener('click', () => {
  console.clear();
  console.log(executeVWO());
});
