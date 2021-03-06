import React from 'react';
import FormInput from './../form-input//form-input.component';
import Button from './../custom-button/custom-button.component';
import { signInWithGoogle } from './../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': '',
      'password': ''
    }
  }

  hadleSubmit = evt => {
    evt.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = evt => {
    const { value, name } = evt.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='sign-in__title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required />
          <FormInput
            name="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required />
          <div className='sign-in__buttons'>
            <Button type='submit'>Sign in</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn> {' '} Sign in with Google {' '}</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
