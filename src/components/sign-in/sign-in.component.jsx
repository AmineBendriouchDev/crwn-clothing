import React from 'react';

// Firebase
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

// Component Styles
import { SignInContainer, SignInTitle, SignInBtns } from './sign-in.styles';

// Import Components
import FormInput from '../form-input/form-input.component';
import Btn from '../btn/btn.component';

// Component JSX
class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label='Email'
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label='Password'
          />

          <SignInBtns>
            <Btn type='submit'>Sign In</Btn>

            <Btn onClick={signInWithGoogle} type='button' isGoogleSignIn>
              Sign In with Google
            </Btn>
          </SignInBtns>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
