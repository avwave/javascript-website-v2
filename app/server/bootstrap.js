Meteor.startup(function () {
  Recaptcha.config({
    privatekey: Meteor.settings.private.recaptcha.privatekey
  });

  if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'admin',
        email: 'admin@javascript.nz',
        password: 'password',
    });
  }
});
