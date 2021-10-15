import { executeOptimizely } from './optimizely.js';
import { executeVWO } from './VWO.js';
import { executeTarget } from './adobeTarget.js';
import { executeFlagship } from './flagship.js';

document.getElementById('optimizely').addEventListener('click', () => {
  executeOptimizely();
});

document.getElementById('vwo').addEventListener('click', () => {
  console.clear();
  executeVWO();
});

document.getElementById('target').addEventListener('click', () => {
  console.clear();
  executeTarget();
});

document.getElementById('flagship').addEventListener('click', () => {
  console.clear();
  executeFlagship();
});

document.getElementById('google').addEventListener('click', () => {
  console.clear();
  executeTarget();
});
