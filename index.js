import { executeOptimizely } from './Files/optimizely.js';
import { executeVWO } from './Files/VWO.js';
import { executeTarget } from './Files/adobeTarget.js';
import { executeFlagship } from './Files/flagship.js';
import { executeGoogle } from './Files/googleOptimize.js';

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
  executeGoogle();
});
