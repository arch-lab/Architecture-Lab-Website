import { Meteor } from 'meteor/meteor';
import { InventoryCollection } from '/imports/db/InventoryCollection';

Meteor.publish(null, function () {
  if (!this.userId) {
    return null;
  }

  return InventoryCollection.find({}, {
    fields: {
      "ink": 1,
      "paper": 1,
      "equipment": 1,
    }
  });
})
