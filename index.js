import { executeOptimizely } from './Files/optimizely.js';
import { executeVWO } from './Files/VWO.js';
import { executeTarget } from './Files/adobeTarget.js';
import { executeFlagship } from './Files/flagship.js';
import { executeLaunch } from './Files/launchdarkly.js';

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

document.getElementById('launchdarkly').addEventListener('click', () => {
  console.clear();
  executeLaunch();
});
