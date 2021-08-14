Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.inventory;
  } else {
    this.ready()
  }
})
