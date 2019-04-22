const secrets = {
  dbUri: process.env.DB_URI || 'mongodb://testuser123:testuser123@ds021895.mlab.com:21895/clone-app',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };
