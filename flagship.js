export function executeFlagship() {
  const flagship = require('@flagship.io/js-sdk');

  const enviromentID = 'c5kn7jff2qj08hnq6tlg';
  const apiKEY = 'FmUFTnSOARYSxdiEuPTDUOhqjPDPEBZTttsZOJMf';
  const visitorID = Math.floor(
    Math.random() * (10000 - 1000) + 1000
  ).toString();
  const modifications = [
    {
      key: 'faqs',
      //defaultValue: true,
    },
    {
      key: 'account_overview',
      //defaultValue: true,
    },
    {
      key: 'aB_test1',
      //defaultValue: true,
    },
    {
      key: 'aB_test2',
      //defaultValue: true,
    },
  ];

  const fsInstance = flagship.start(enviromentID, apiKEY);
  const fsVisitorInstance = fsInstance.newVisitor(visitorID);

  fsVisitorInstance.on('ready', ({ withError, error }) => {
    fsVisitorInstance.activateModifications(modifications);

    const mod = fsVisitorInstance.getModifications(modifications);
    console.log('getModifications():', mod);

    fsVisitorInstance.getAllModifications().then((mod) => {
      console.log('getAllModifications():', mod.data);
    });

    fsVisitorInstance
      .sendHit({
        type: 'Event',
        data: {
          category: 'Action Tracking',
          action: 'EventTest1',
        },
      })
      .then(() => console.log('Event  hit send !'));

    fsVisitorInstance.getModificationsForCampaign('ABtest').then((response) => {
      console.log('getModificationsForCampaign():', response);
    });

    fsVisitorInstance
      .getModificationInfo('account_overview')
      .then((response) => {
        console.log('getModificationInfo(): ', response);
      });
  });
}
