import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../../FormInput/FormInput';

import { selectUserSignUpFields } from '../../../redux/user/userSelectors';
import CustomButton from '../../CustomButton/CustomButton';

import './Verification.scss';

function Verification({ formFields, history, match }) {
  const { firstName, lastName, username, email } = formFields;
  return (
    <div className="verify">
      <h1 className="title">Please verify information is correct</h1>
      <form>
        <FormInput
          type="text"
          name="firstName"
          label="first name"
          value={firstName}
          required
          readOnly
        />
        <FormInput
          type="text"
          name="lastName"
          label="last name"
          value={lastName}
          required
          readOnly
        />
        <FormInput
          type="text"
          name="username"
          label="username"
          value={username}
          required
          readOnly
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          required
          readOnly
        />
      </form>
      <div className="button-group">
        <CustomButton onClick={() => history.push('/signup')}>
          Change Info
        </CustomButton>
        <CustomButton
          onClick={() => history.push(match.path.replace('verify', 'confirm'))}
        >
          Create Account
        </CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  formFields: selectUserSignUpFields
});

export default withRouter(connect(mapStateToProps)(Verification));
