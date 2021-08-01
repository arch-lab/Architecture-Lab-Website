Meteor.methods({
    getName() {
        const services = Meteor.user().services;
        // replace with actual profile picture property
        return services.google.given_name;
    }
});
