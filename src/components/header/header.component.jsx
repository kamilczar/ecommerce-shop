import React from 'react';
import { Link } from 'react-router-dom'; 
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => (
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
                Sign in
            </Link>
        </div>
    </div>
)

export default Header;