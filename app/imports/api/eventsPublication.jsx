import { Meteor } from 'meteor/meteor';
import { Events } from '/imports/db/Events';

Meteor.publish('events', function () {
  if (!this.userId) {
    return null;
  }

  return Events.find();
});
