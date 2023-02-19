import { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

import Logo from '../../assets/logo-color.png';

import './navigation.styles.scss';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <nav className='navigation'>
                <Link className='navigation__logo-container' to='/'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <div className='navigation__burger-menu' onClick={toggleMenu}>
                    {menuOpen ? (
                        <>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </>
                    ):
                    (
                        <div className='navigation__menu-open'>
                            <span className='close-bar'></span>
                            <span className='close-bar-bottom'></span>
                            {/* <ul className='navigation__links-container--phone'>
                                <Link className='navigation__link' to='/'>Home</Link>
                                <Link className='navigation__link' to='/'>About Closer</Link>
                                <Link className='navigation__link' to='/'>Social Enterprise</Link>
                                <Link className='navigation__link' to='/'>Corporates</Link>
                                <Link className='navigation__link' to='/'>Partnership</Link>
                                <Link className='navigation__link' to='/'>Contact</Link>
                            </ul> */}
                        </div>
                    )}
                </div>
                <ul className='navigation__links-container'>
                    <Link className='navigation__link' to='/'>Home</Link>
                    <Link className='navigation__link' to='/'>About Closer</Link>
                    <Link className='navigation__link' to='/'>Social Enterprise</Link>
                    <Link className='navigation__link' to='/'>Corporates</Link>
                    <Link className='navigation__link' to='/'>Partnership</Link>
                    <Link className='navigation__link' to='/'>Contact</Link>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;