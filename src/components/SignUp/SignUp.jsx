import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { setUserSignUpField } from '../../redux/user/userActions';
import {
  selectUserSignUpFields,
  selectUserCompletedSignUpForm
} from '../../redux/user/userSelectors';

import './SignUp.scss';

class SignUp extends React.Component {
  handleChange = e => {
    this.props.setUserSignUpField({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { match, history } = this.props;
    history.push(`${match.path}/verify`);
  };

  renderError = (password, confirmPassword) => {
    if (confirmPassword !== password) {
      return <div className="password-error">passwords do not match</div>;
    }
  };

  isValidForm = () => {
    const { formFields, allFieldsEntered } = this.props;
    const passwordMatch = formFields.confirmPassword === formFields.password;
    return allFieldsEntered && passwordMatch;
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword
    } = this.props.formFields;
    return (
      <div className="sign-up">
        <h1 className="title">Welcome, please register</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            label="first name"
            value={firstName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="lastName"
            label="last name"
            value={lastName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="username"
            label="username"
            value={username}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          {confirmPassword.length > 0 &&
            this.renderError(password, confirmPassword)}

          <CustomButton type="submit" disabled={!this.isValidForm()}>
            Continue
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDisptachToProps = {
  setUserSignUpField
};

const mapStateToProps = createStructuredSelector({
  formFields: selectUserSignUpFields,
  allFieldsEntered: selectUserCompletedSignUpForm
});

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(SignUp));
