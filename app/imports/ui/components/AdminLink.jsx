import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from "react-router-dom";

  function AdminLink(){

    const user = useTracker(() => Meteor.user());

    if(Roles.userIsInRole(user, ['admin'])){
      return(
        <>
          <Link as={ Link } to="/admin">Admin</Link>
        </>
      );
    } else {
      return null;
    }
  } export default AdminLink;
