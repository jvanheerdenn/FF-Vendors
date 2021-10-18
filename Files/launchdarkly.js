export function executeLaunch() {
  const LDClient = require('launchdarkly-js-client-sdk');

  const userID = {
    key: Math.floor(Math.random() * (10000 - 1000) + 1000).toString(),
  };

  const ldclient = LDClient.initialize('616d57e7b423be24ec7cd6e1', userID);

  function render() {
    const variation = ldclient.variation('virtual-assistant-routes', false);
    const variationDetail = ldclient.variationDetail(
      'virtual-assistant-routes',
      false
    );
    console.log(
      (variation ? 'Showing' : 'Not showing') + ' your feature to ' + userID.key
    );
    console.log(variationDetail);
  }

  ldclient.on('ready', render);
  ldclient.on('change', render);
}
