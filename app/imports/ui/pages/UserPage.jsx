import React from 'react';
import {useParams, useLocation, useHistory, useRouteMatch} from "react-router-dom";
export const UserPage = (props) => {

  const user = props.user;
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  if(user){
    return(
      <>
        <p>
          <strong>UserId: </strong>
          <code>{JSON.stringify(params)}</code>
        </p>
        <p>
          <strong>Location: </strong>
          <code>{JSON.stringify(location)}</code>
        </p>
        <p>
          <strong>History: </strong>
          <code>{JSON.stringify(history)}</code>
        </p>
        <p>
          <strong>Match: </strong>
          <code>{JSON.stringify(match)}</code>
        </p>
      </>
    );
  } else {
    return null;
  }
};
