import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import EnterpriseFigure from '../../assets/enterprise-home-figure.png';
import CorporateFigure from '../../assets/corporates-home-figure.png';
import PartnershipsFigure from '../../assets/partnership-home-figure.png';

import Button from '../../components/button/button.component';
import Footer from '../../components/footer/footer.components';
import './home.styles.scss';

const Home = () => {
    const HomeHeader = () => {
        return(
            <header className='header'>
                <Fade>
                    <div className='header__container'>
                        <h1 className='header__title'>A dedicated team to grow your company</h1>
                        <p className='header__paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                        <div className='buttons-container'>
                            <div className='button-wrapper'>
                                <Button title='Social Enterprises' color="orange" />
                            </div>
                            <div className='button-wrapper'>
                                <Button title='Corporates' color="blue" />
                            </div>
                            <div className='button-wrapper'>
                                <Button title='Partnership' color="green" />
                            </div>
                        </div>
                    </div>
                </Fade>
            </header>
        );
    }
    
    const HomeEnterpriseSection = () => {
        return(
            <section className='home-section enterprise-section'>
                <Slide left>
                    <h2 className='home-section__title'>Social Enterprise</h2>
                </Slide>
                <div className='home-section__wrapper'>
                        <div className='home-section__img-container'>
                            <Slide left>
                                <img className='home-section__img' src={EnterpriseFigure} alt="Enterprise" />
                            </Slide>
                        </div>
                        <div className='home-section__text-container'>
                            <Slide right>
                                <p>Lorem ipsum dolor sit amet consectetur. Duis etiam dolor leo aliquet nulla. Sit tellus elit pellentesque curabitur nunc velit purus risus in. Egestas et at tempus nunc est morbi. Sapien ornare pellentesque.</p>
                                <h3>Feature One</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. In sagittis sit condimentum diam in lacus. Aliquet viverra velit duis enim lacus sit sit praesent purus.</p>
                                <h3>Feature Two</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. In sagittis sit condimentum diam in lacus. Aliquet viverra velit duis enim lacus sit sit praesent purus.</p>
                            </Slide>
                            <div className='home-section__button-container'>
                                <Fade right>
                                    <Button title='Social Enterprises' color="orange" />
                                </Fade>
                            </div>
                        </div>
                </div>
            </section>
        );
    }

    const HomeCorporateSection = () => {
        return(
            <section className='home-section corporate-section'>
                <Slide left>
                    <h2 className='home-section__title'>Corporates</h2>
                </Slide>
                <div className='home-section__wrapper invert-wrapper'>
                    <div className='home-section__text-container invert-text'>
                        <Slide left>
                            <p>Lorem ipsum dolor sit amet consectetur. Duis etiam dolor leo aliquet nulla. Sit tellus elit pellentesque curabitur nunc velit purus risus in. Egestas et at tempus nunc est morbi. Sapien ornare pellentesque.</p>
                            <h3>Feature One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. In sagittis sit condimentum diam in lacus. Aliquet viverra velit duis enim lacus sit sit praesent purus.</p>
                            <h3>Feature Two</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. In sagittis sit condimentum diam in lacus. Aliquet viverra velit duis enim lacus sit sit praesent purus.</p>
                        </Slide>
                        <div className='home-section__button-container'>
                            <Fade left>
                                <Button title='Corporates' color="blue" />
                            </Fade>
                        </div>
                    </div>
                    <div className='home-section__img-container invert-img'>
                        <Slide right>
                            <img className='home-section__img' src={CorporateFigure} alt="Corporates" />
                        </Slide>
                    </div>
                </div>
            </section>
        );
    }

    const HomePartnershipsSection = () => {
        return(
            <section className='home-section partsnerships-section'>
                <Slide left>
                    <h2 className='home-section__title'>Partnerships</h2>
                </Slide>
                <div className='home-section__wrapper'>
                        <div className='home-section__img-container'>
                            <Slide left>
                                <img className='home-section__img' src={PartnershipsFigure} alt="Partnerships" />
                            </Slide>
                        </div>
                        <div className='home-section__text-container'>
                            <Slide right>
                                <p>Lorem ipsum dolor sit amet consectetur. Duis etiam dolor leo aliquet nulla. Sit tellus elit pellentesque curabitur nunc velit purus risus in. Egestas et at tempus nunc est morbi. Sapien ornare pellentesque.</p>
                                <h3>Feature One</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. In sagittis sit condimentum diam in lacus. Aliquet viverra velit duis enim lacus sit sit praesent purus.</p>
                                <h3>Feature Two</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. In sagittis sit condimentum diam in lacus. Aliquet viverra velit duis enim lacus sit sit praesent purus.</p>
                            </Slide>
                            <div className='home-section__button-container'>
                                <Fade right>
                                    <Button title='Partnerships' color="green" />
                                </Fade>
                            </div>
                        </div>
                </div>
            </section>
        );
    }

    return(
        <>
            <HomeHeader />
            <main>
                <HomeEnterpriseSection />
                <HomeCorporateSection />
                <HomePartnershipsSection />
            </main>
            <Footer />
        </>
    );
}

export default Home;