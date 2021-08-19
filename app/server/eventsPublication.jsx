import { Meteor } from 'meteor/meteor';
import { EventsCollection } from '/imports/db/EventsCollection';

Meteor.publish('events', function () {
  if (!this.userId) {
    return null;
  }

  return EventsCollection.find({}, {
    fields:{
      "title": 1,
    }
  });
})
