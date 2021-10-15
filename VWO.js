export async function executeVWO() {
  const vwoSDK = require('vwo-node-sdk');

  const sdkKey = 'abcd'; // hay que conseguir este valor
  const accountId = String(Math.random() * 100000).slice(0, 5);
  const experimentName = 'test';
  const goalName = 'test';

  vwoSDK.getSettingsFile(accountId, sdkKey).then((settingsFile) => {
    const vwoClient = vwoSDK.launch({
      settingsFile: settingsFile,
    });

    const activate = vwoClient.activate(experimentName, userId);
    const getVariationName = vwoClient.getVariationName(experimentName, userId);
    const isFeatureEnabled = vwoClient.isFeatureEnabled(experimentName, userId);
    const track = vwoClient.track(experimentName, userId, goalName);

    console.log('activate(): ', activate);
    console.log('getVariationName(): ', getVariationName);
    console.log('isFeatureEnabled(): ', isFeatureEnabled);
    console.log('track(): ', track);
  });
}
