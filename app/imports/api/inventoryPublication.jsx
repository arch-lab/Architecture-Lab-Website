import { Meteor } from 'meteor/meteor';
import { Inventory } from '/imports/db/Inventory';

Meteor.publish('inventory', function () {
  if (!this.userId) {
    return null;
  }

  return Inventory.find({}, {
    fields: {
      "ink": 1,
      "paper": 1,
      "equipment": 1,
    }
  });
})
