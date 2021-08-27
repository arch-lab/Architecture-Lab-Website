import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Calendars } from '/imports/db/Calendars';

export const addCalendar = new ValidatedMethod({

  name: 'calendar.addCalendar',
  validate: new SimpleSchema({
    title: { type: String }
  }).validator(),
  run({ title }) {

    if(Roles.userIsInRole(Meteor.user(), ['admin'])) {
      Calendars.insert(
        {
          "title": {title}
        }
      );
    } else {
      alert(`Cannot add ${title} to the collection`);
    }
  }
});
