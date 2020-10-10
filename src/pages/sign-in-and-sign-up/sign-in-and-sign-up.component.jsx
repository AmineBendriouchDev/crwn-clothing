import React from 'react';

// Component Styles
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

// Import Components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// Component JSX
const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />

    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
