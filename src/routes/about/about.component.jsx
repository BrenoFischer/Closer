import Footer from '../../components/footer/footer.components';

import AboutImg from '../../assets/about-header-img.png';

import './about.styles.scss';

const About = () => {
    const AboutHeader = () => {
        return(
            <header className='about-header'>
                <div className='about-header__text-container'>
                    <h2 className='about-header__title'>Welcome to Closer</h2>
                    <div className='about-header__paragraph-wrapper'>
                        <p className='about-header__paragraph'>Your online hub bringing the social enterprise community together</p>
                    </div>
                </div>
                <img className='about-header__img' src={AboutImg} alt="About" />
            </header>
        );
    }

    return(
        <>
            <AboutHeader />
            <div>Espaco</div>
            <Footer />
        </>
    );
}

export default About;