import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import { Route } from 'react-router-dom';

import './SignUpPage.scss';
import SignUpVerification from '../../components/SignUp/Verification/Verification';

function HomePage({ match }) {
  return (
    <div className="sign-up-page">
      <Route exact path={`${match.path}`} component={SignUp} />
      <Route
        exact
        path={`${match.path}/verify`}
        component={SignUpVerification}
      />
      {/* <SignUp /> */}
    </div>
  );
}

export default HomePage;
