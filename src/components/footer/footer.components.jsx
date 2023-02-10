import { Link } from 'react-router-dom';

import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

import Logo from '../../assets/logo-color.png';

import './footer.styles.scss';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer__upper-wrapper'>
                <div className='footer__logo-container'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='footer__links-container'>
                    <ul className='footer__links-container'>
                        <Link className='footer__link' to='/'>Home</Link>
                        <Link className='footer__link' to='/'>About Closer</Link>
                        <Link className='footer__link' to='/'>Social Enterprise</Link>
                        <Link className='footer__link' to='/'>Corporates</Link>
                        <Link className='footer__link' to='/'>Partnership</Link>
                        <Link className='footer__link' to='/'>Contact</Link>
                    </ul>
                </div>
            </div>
            <div className='footer__medium-wrapper'>
                <div className='footer__social-container'>
                    <Link className='footer__social-icon' to='/'><FaFacebookSquare /></Link>
                    <Link className='footer__social-icon' to='/'><FaTwitterSquare /></Link>
                    <Link className='footer__social-icon' to='/'><FaInstagramSquare /></Link>
                    <Link className='footer__social-icon' to='/'><FaLinkedin /></Link>
                </div>
            </div>
            <div className='footer__lower-wrapper'>
                <p>Copyright © 2023 Closer | All Rights</p><p>Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;