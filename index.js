// import libraries
// axios is a library to perform HTTP requests for nodejs.
const axios = require('axios');
// API call definition
const { nectarineDialog } = require('./apiCaller');
// secrets, contain the credentials to authenticate and dialog'ing
const {
  username,
  password,
  client_id,
  client_secret,
  lang,
  skill_id
} = require('./secrets');
// end library import

// ##########
// run a small program that says something to the sample bot
(() => {
  // Here I tell my bot the phrase 'wind speed' because I already defined an intent that understands
  // 'wind speed' in my bot.
  nectarineDialog(
    {
      username,
      password,
      grant_type: 'password',
      client_id,
      client_secret
    },
    {
      lang,
      skill_id,
      event_name: 'NEW_INPUT',
      input: 'Hello'
    }
  )
    // if there is no error, the block below processes the result returned by the Nectarine Dialog API
    .then(({ data }) => {
      console.log('this is what we typically receive', data);
      // please do whatever you want with this result
      // for example, let's just show the bot's answer
      console.log('the bot answered me', data.answer);
    })
    .catch(console.log.bind(console)); // print whatever error I have got
})();
// program ends
