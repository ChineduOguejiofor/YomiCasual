import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in-styles.scss';
import {
  signInWithGoogle,
  signInWithGithub
} from '../../firebase/firebase.util';
import CustomButton from '../custom-button/custom-button';
export default class Signincomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            name='email'
            label='Email'
            required
          />
          <FormInput
            type='password'
            value={this.state.password}
            name='password'
            label='Password'
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Submit Form</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
