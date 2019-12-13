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

import { checkEmail, checkUsername } from '../../api/usersApi';

import './SignUp.scss';

class SignUp extends React.Component {
  state = {
    isEmailAvailable: true,
    isUsernameAvailable: true
  };
  handleChange = e => {
    this.props.setUserSignUpField({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e, email, username) => {
    e.preventDefault();
    const resps = await Promise.all([
      checkEmail(email),
      checkUsername(username)
    ]);
    console.log(resps);
    if (!resps.every(resp => resp.data.available)) return;

    const { match, history } = this.props;
    history.push(`${match.path}/verify`);
  };

  renderError = (password, confirmPassword) => {
    if (confirmPassword !== password) {
      return <div className="error">passwords do not match</div>;
    }
  };

  isValidForm = () => {
    const { formFields, allFieldsEntered } = this.props;
    const { isEmailAvailable, isUsernameAvailable } = this.state;
    const passwordMatch = formFields.confirmPassword === formFields.password;
    return (
      allFieldsEntered &&
      passwordMatch &&
      isEmailAvailable &&
      isUsernameAvailable
    );
  };

  onEmailBlur = async email => {
    if (!email) return;
    const isEmailAvailable = (await checkEmail(email)).data.available;
    this.setState({ isEmailAvailable });
  };

  onUsernameBlur = async username => {
    if (!username) return;
    const isUsernameAvailable = (await checkUsername(username)).data.available;
    this.setState({ isUsernameAvailable });
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
        <form onSubmit={e => this.handleSubmit(e, email, username)}>
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
            onBlur={() => this.onUsernameBlur(username)}
            required
          />
          {this.state.isUsernameAvailable === false && (
            <div className="error">username taken</div>
          )}
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            onBlur={() => this.onEmailBlur(email)}
            required
          />
          {this.state.isEmailAvailable === false && (
            <div className="error">email taken</div>
          )}
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
