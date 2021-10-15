export function executeFlagship() {
  const flagship = require('@flagship.io/js-sdk');

  const enviromentID = 'c5kn7jff2qj08hnq6tlg';
  const apiKEY = 'FmUFTnSOARYSxdiEuPTDUOhqjPDPEBZTttsZOJMf';
  const visitorID = Math.floor(
    Math.random() * (10000 - 1000) + 1000
  ).toString();

  const fsInstance = flagship.start(enviromentID, apiKEY);
  const fsVisitorInstance = fsInstance.newVisitor(visitorID);

  fsVisitorInstance.on('ready', ({ withError, error }) => {
    if (withError) {
      console.error('Ouch, visitor is ready but with error : ' + error.stack);
    } else {
      console.log('visitor is ready without error ! ✨');
    }

    const { btnColor, btnText } = fsVisitorInstance.getModifications([
      {
        key: 'btnColor',
        defaultValue: '#ff0000',
      },
      {
        key: 'btnText',
        defaultValue: 'Wahoo !',
      },
    ]);

    console.log(btnColor); // output: "#fff"
    console.log(btnText); // output: "Awesome !"
  });
}
