Meteor.publish(null, function () {
  if (! this.userId) {
    return null;
  }

  return Meteor.users.find(this.userId, {
    fields: {
      "services.google.email": 1,
      "services.google.given_name": 1,
      "services.google.family_name": 1,
      "services.google.picture": 1
    },
  });
});
