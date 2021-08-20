import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Inventory } from '/imports/db/Inventory';
import { Events } from '/imports/db/Events';
import ServiceConfiguration from '/server/service-configuration.js';
import '/server/userPublication.jsx';
import '/server/rolesPublication.jsx';
import '/imports/api/inventoryPublication.jsx';
import '/imports/api/eventsPublication.jsx';

Meteor.startup(() => {

  Roles.createRole('admin', {unlessExists: true});
  Roles.addUsersToRoles(Meteor.settings.private.roles.defaultAdmin, 'admin', Roles.GLOBAL_GROUP);

  if (Inventory.find().count() === 0) {
    Inventory.insert(
      {
        "ink": {},
        "paper": {},
        "equipment": {}
      }
    );
  }

  if (Events.find().count() === 0) {
    Events.insert(
      {
        "event": {
          "title": "Test Event",
          "createdBy": "",
          "startTime": "",
          "endTime": "",
        }
      }
    );
  }

});
