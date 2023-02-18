import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Logo from '../../assets/logo-white.png';

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
                    <div className='footer__social-icon-container'>
                        <Link className='footer__social-icon' to='/'><FaFacebookF /></Link>
                    </div>
                    <div className='footer__social-icon-container'>
                        <Link className='footer__social-icon' to='/'><FaTwitter /></Link>
                    </div>
                    <div className='footer__social-icon-container'>
                        <Link className='footer__social-icon' to='/'><FaInstagram /></Link>
                    </div>
                    <div className='footer__social-icon-container'>
                        <Link className='footer__social-icon' to='/'><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
            <div className='footer__lower-wrapper'>
                <p>Copyright © 2023 Closer | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;