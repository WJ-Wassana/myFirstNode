module.exports = {
    // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '422328451945-bphjlt19lm3pee6r0qsog7lnifo4bm3e.apps.googleusercontent.com',
        clientSecret: 'vqMWwGlyiAye0vTxNz9rtRfQ',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}