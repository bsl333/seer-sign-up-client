import React from 'react';

import FormInput from '../FormInput/FormInput';
import './SignUp.scss';
import CustomButton from '../CustomButton/CustomButton';

export default class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">Welcome, please register</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            label="first name"
            value={this.state.firstName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="lastName"
            label="last name"
            value={this.state.lastName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="username"
            label="username"
            value={this.state.username}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Continue</CustomButton>
        </form>
      </div>
    );
  }
}
