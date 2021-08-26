import { Meteor } from 'meteor/meteor';
import { Calendars } from '/imports/db/Calendars';

Meteor.publish('calendars', function () {
  if (!this.userId) {
    return null;
  }

  return Calendars.find();
});
