const axios = require('axios').default;

// ##########
// definition of API's calls

function nectarineAuthenticate({
  username,
  password,
  client_id,
  client_secret
}) {
  return axios.post(
    'https://apis.nectarine.ai/api/auth/oauth/token',
    {
      username: '',
      password: '',
      grant_type: 'password',
      client_id: 'smartly_app',
      client_secret: 'c7bb629c474ce18d44d93452ff15cb2a3658ed0f',
    },
    { headers: { 'Content-Type': 'application/json' } }
  );
}

/**
 * 
 * 
 * @param {any} authOptions { username, password, client_id, client_secret }
 * @param {any} { lang, skill_id, event_name, input } 
 * @returns 
 */
function nectarineDialog(authOptions, { lang, skill_id, event_name, input }) {
  return nectarineAuthenticate(authOptions).then(({ data }) => {
    // request Smartly Dialog API
    return axios.post(
      'https://apis.nectarine.ai/api/dialog/',
      {
        // feel free to use whatever user_id you like
        user_id: 'smartly_app',
        lang,
        skill_id:'',
        user_data: {},
        platform: 'simulator',
        event_name,
        input
      },
      {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${data.access_token}`
        }
      }
    );
  });
}

module.exports = {
  nectarineDialog
};
