import { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

import Logo from '../../assets/logo-color.png';

import './navigation.styles.scss';


const LinksList = () => (
    <>
        <Link className='navigation__link' to='/'>Home</Link>
        <Link className='navigation__link' to='/about'>About Closer</Link>
        <Link className='navigation__link' to='/'>Social Enterprise</Link>
        <Link className='navigation__link' to='/'>Corporates</Link>
        <Link className='navigation__link' to='/'>Partnership</Link>
        <Link className='navigation__link' to='/contact'>Contact</Link>
    </>
)

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
                    {menuOpen ?
                        (<>
                            <span className='close-bar'></span>
                            <span className='close-bar-bottom'></span>
                        </>)
                    :
                        (<>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>    
                        </>)
                    }
                </div>
                {menuOpen ?
                    (<div className='navigation__menu-open'>
                        <ul className='navigation__links-container--phone'>
                            <LinksList />
                        </ul> 
                    </div>)
                :
                    (<></>)
                }

                <ul className='navigation__links-container'>
                    <LinksList />
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;