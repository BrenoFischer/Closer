import { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

import Logo from '../../assets/logo-color.png';

import './navigation.styles.scss';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const LinksList = ({ phoneLink="" }) => (
        <>
            <Link className={`navigation__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to='/'>Home</Link>
            <Link className={`navigation__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to='/about'>About Closer</Link>
            <Link className={`navigation__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to='/'>Social Enterprise</Link>
            <Link className={`navigation__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to='/'>Corporates</Link>
            <Link className={`navigation__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to='/'>Partnership</Link>
            <Link className={`navigation__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to='/contact'>Contact</Link>
        </>
    )

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
                            <LinksList phoneLink='navigation__phone-link' />
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