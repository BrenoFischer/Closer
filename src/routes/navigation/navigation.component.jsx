import { Outlet, Link } from 'react-router-dom';

import Logo from '../../assets/logo-color.png';

import './navigation.styles.scss';

const Navigation = () => {
    return(
        <>
            <div className='navigation'>
                <Link className='navigation__logo-container' to='/'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <ul className='navigation__links-container'>
                    <Link className='navigation__link' to='/'>Home</Link>
                    <Link className='navigation__link' to='/'>About Closer</Link>
                    <Link className='navigation__link' to='/'>Social Enterprise</Link>
                    <Link className='navigation__link' to='/'>Corporates</Link>
                    <Link className='navigation__link' to='/'>Partnership</Link>
                    <Link className='navigation__link' to='/'>Contact</Link>
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;