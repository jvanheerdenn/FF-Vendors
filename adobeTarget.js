export function executeTarget() {
  const alloyLibrary = require('@adobe/alloy');
  const alloy = alloyLibrary.createInstance({ name: 'alloy' });
  alloy('configure', {
    edgeConfigId: 'ebebf826-a01f-4458-8cec-ef61de241c93',
    orgId: 'ADB3LETTERSANDNUMBERS@AdobeOrg',
  });
  alloy('commandName', options);
}
