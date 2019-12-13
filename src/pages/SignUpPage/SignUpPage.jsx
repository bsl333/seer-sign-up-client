import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignUp from '../../components/SignUp/SignUp';
import SignUpVerification from '../../components/SignUp/Verification/Verification';
import SignUpConfirmtion from '../../components/SignUp/Confirmation/Confirmation';

import { selectUserCompletedSignUpForm } from '../../redux/user/userSelectors';

import './SignUpPage.scss';

function HomePage({ match, signUpFormCompleted }) {
  return (
    <div className="sign-up-page">
      <Route exact path={`${match.path}`} component={SignUp} />
      <Route
        exact
        path={`${match.path}/verify`}
        render={() => {
          return signUpFormCompleted ? (
            <SignUpVerification />
          ) : (
            <Redirect to="/signup" />
          );
        }}
      />
      <Route
        exact
        path={`${match.path}/confirm`}
        component={SignUpConfirmtion}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  signUpFormCompleted: selectUserCompletedSignUpForm
});

export default connect(mapStateToProps)(HomePage);
