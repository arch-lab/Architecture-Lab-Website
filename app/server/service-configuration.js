ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: {
      loginStyle: "popup",
      clientId: Meteor.settings.google.clientId,
      secret: Meteor.settings.google.secret
    }
  }
);
