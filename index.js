import { execute } from './optimizely.js';

document.getElementById('optimizely').addEventListener('click', () => {
  console.log(execute());
});

document.getElementById('vwo').addEventListener('click', () => {
  console.clear();
});
