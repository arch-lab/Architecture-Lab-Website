ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: {
      loginStyle: "popup",
      clientId: Meteor.settings.private.oAuth.google.clientId,
      secret: Meteor.settings.private.oAuth.google.secret
    }
  }
);
