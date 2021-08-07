import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import ServiceConfiguration from '/server/service-configuration.js'
import '/server/userPublication.jsx';
import '/server/rolesPublication.jsx';

Meteor.startup(() => {

  Roles.createRole('admin', {unlessExists: true});
  Roles.addUsersToRoles(Meteor.settings.roles.defaultAdmin, 'admin', Roles.GLOBAL_GROUP);

});
