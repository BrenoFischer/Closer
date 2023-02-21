import Footer from '../../components/footer/footer.components';

import AboutImg from '../../assets/about-header-img.png';
import Logo from '../../assets/logo-color.png';

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

    const AboutDescription = () => {
        return(
            <main className='about-description'>
                <div className='about-description__wrapper'>
                    <h3 className='about-description__title'>What is Closer?</h3>
                    <div className='about-description__paragraph-wrapper'>
                        <p className='about-description__paragraph'><b>CLOSER</b> is bringing the social enterprise community together - making connections and sharing stories, experiences and ideas.</p>
                        <br/>
                        <br/>
                        <p className='about-description__paragraph'> We think you're going to get something special from being a part of the Social Impact Ireland online community hub. Part of our role is to bring this unique community together, to create for themselves, guided by themselves, a strong community - one where each is respected for who they are, where learnings can be shared, mutual support offered, successes shared and difficult moments eased.</p>
                        <br/>
                        <br/>
                        <p className='about-description__paragraph'>Join <b>CLOSER</b> today and say Hello to the social enterprise community around Ireland and further.</p>
                    </div>
                </div>
                <div>
                    <img className='about-description__img' src={Logo} alt="Closer Logo" />
                </div>
            </main>
        );
    }

    const YoutubeEmbed = () => (
        <div className="about-video">
            <iframe 
                width="560" 
                height="315"
                src="https://www.youtube.com/embed/j-fVMDp0rZA" 
                title="Closer video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    );

    return(
        <>
            <AboutHeader />
            <AboutDescription />
            <YoutubeEmbed />
            <Footer />
        </>
    );
}

export default About;