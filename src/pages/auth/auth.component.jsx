import React from 'react';
import './auth.style.scss';

import SignInComponent from '../../components/sign-in/sign-in.component';
import SignUpComponent from '../../components/sign-up/sign-up.component';

const AuthPage = () => (
    <div className='auth-component'>
        <SignInComponent />
        <SignUpComponent />
    </div>
);

export default AuthPage;