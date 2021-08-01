Meteor.publish(null, function () {
  if (! this.userId) {
    return null;
  }

  return Meteor.users.find(this.userId, {
    fields: {
      "services.google.given_name": 1,
      "services.google.family_name": 1
    },
  });
});
