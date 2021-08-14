import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { InventoryCollection } from '/imports/db/InventoryCollection'
import ServiceConfiguration from '/server/service-configuration.js'
import '/server/userPublication.jsx';
import '/server/rolesPublication.jsx';
import '/server/inventoryPublication.jsx';

Meteor.startup(() => {

  Roles.createRole('admin', {unlessExists: true});
  Roles.addUsersToRoles(Meteor.settings.private.roles.defaultAdmin, 'admin', Roles.GLOBAL_GROUP);

  if (InventoryCollection.find().count() === 0) {
    InventoryCollection.insert(
      {
        "ink": {},
        "paper": {},
        "equipment": {}
      }
    );
  }

});
