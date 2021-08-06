import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/db/links';
import { Roles } from 'meteor/alanning:roles';
import ServiceConfiguration from '/server/service-configuration.js'
import '/imports/api/userMethods.jsx';
import '/server/userPublication.jsx';
import '/server/rolesPublication.jsx';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.

  Roles.createRole('admin', {unlessExists: true});
  Roles.addUsersToRoles(Meteor.settings.roles.defaultAdmin, 'admin', Roles.GLOBAL_GROUP);

  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});
