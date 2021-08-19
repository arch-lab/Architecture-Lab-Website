import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function () {
  if (!this.userId) {
    return null;
  }
  return Meteor.roleAssignment.find({ 'user._id': this.userId });
})
