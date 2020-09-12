import React from 'react';
import FormInput from './../form-input//form-input.component';

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
        <h2 className=''>I already have an account</h2>
        <span className=''>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required />
          <label htmlFor="email">Email</label>
          <FormInput
            name="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignIn;
