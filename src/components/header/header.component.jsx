import React from 'react';
import { Link } from 'react-router-dom'; 
import { auth } from '../../utils/firebase.js';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = ({ currentUser }) => (
    <div className='header'> 
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
            <Link className='option' to='/signin'>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='signin'>Sign In</Link>
                }
            </Link>
        </div>
    </div>
)

export default Header;