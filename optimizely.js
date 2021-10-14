export function execute() {
  const optimizelySdk = require('@optimizely/optimizely-sdk');
  const optimizelyClient = optimizelySdk.createInstance({
    sdkKey: 'GD1YnswD17rAwke3qSy5q',
  });
  const featureKey = 'virtual_assistant_routes';
  const userId = Math.floor(Math.random() * (10000 - 1000) + 1000).toString();

  optimizelyClient.onReady().then(() => {
    const isFeatureEnabled = optimizelyClient.isFeatureEnabled(
      featureKey,
      userId
    );
    const getEnabledFeatures = optimizelyClient.getEnabledFeatures(userId);
    const getFeatureVariable = optimizelyClient.getFeatureVariable(
      featureKey,
      'account_overview',
      userId
    );
    const getAllFeatureVariables = optimizelyClient.getAllFeatureVariables(
      featureKey,
      userId
    );
    const getVariation = optimizelyClient.getVariation('experiment', userId);

    // v4.0
    const userContext = optimizelyClient.createUserContext(userId);
    const decide = userContext.decide(featureKey);
    const decideAll = userContext.decideAll();
    const decideForKeys = userContext.decideForKeys([featureKey]);

    console.clear();
    console.log('userId: ', userId);
    console.log('isFeatureEnabled(): ', isFeatureEnabled);
    console.log('getFeatureVariable(): ', getFeatureVariable);
    console.log('getEnabledFeatures(): ', getEnabledFeatures);
    console.log('getAllFeatureVariables(): ', getAllFeatureVariables);
    console.log('getVariation(): ', getVariation);
    console.log('userContext(): ', userContext);
    console.log('decide(): ', decide);
    console.log('decideAll(): ', decideAll);
    console.log('decideForKeys(): ', decideForKeys);
  });
}
