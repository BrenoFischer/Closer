import { Outlet, Link } from 'react-router-dom';

import Logo from '../../assets/logo-color.png';

import './navigation.styles.scss';

const Navigation = () => {
    return(
        <>
            <nav className='navigation'>
                <Link className='navigation__logo-container' to='/'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <a href="#" className='navigation__burger-menu'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
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