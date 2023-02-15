import { BsFillPlayCircleFill } from 'react-icons/bs';

import Button from '../../components/button/button.component';
import Footer from '../../components/footer/footer.components';
import './home.styles.scss';

const Home = () => {
    const HomeHeader = () => {
        return(
            <header className='header'>
                <div className='header__container'>
                    <h1 className='header__title'>A dedicated team to grow your company</h1>
                    <p className='header__paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <div className='buttons-container'>
                        <Button title='Social Enterprises' color="orange" />
                        <Button title='Corporates' color="blue" />
                        <Button title='Partnership' color="green" />
                    </div>
                </div>
            </header>
        );
    }
    
    const HomeEnterpriseSection = () => {
        return(
            <section className='home-section enterprise-section'>
                <h2 className='home-section__title'>Social Enterprise</h2>
                <div className='home-section__wrapper'>
                    <div className='home-section__img-container'>
                        <div className='home-section__icon-box'>
                            <BsFillPlayCircleFill />
                        </div>
                    </div>
                    <div className='home-section__text-container'>
                        <p>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. </p>
                        <h3>Feature One</h3>
                        <p>By creating a visual guide along the way, the designer or developer can get input from the other people.</p>
                        <h3>Feature Two</h3>
                        <p>By creating a visual guide along the way, the designer or developer.</p>
                    </div>
                </div>
            </section>
        );
    }

    const HomeCorporateSection = () => {
        return(
            <section className='home-section corporate-section'>
                <h2 className='home-section__title'>Corporates</h2>
                <div className='home-section__wrapper'>
                    <div className='home-section__text-container invert-text'>
                        <p>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. </p>
                        <h3>Feature One</h3>
                        <p>By creating a visual guide along the way, the designer or developer can get input from the other people.</p>
                        <h3>Feature Two</h3>
                        <p>By creating a visual guide along the way, the designer or developer.</p>
                    </div>
                    <div className='home-section__img-container invert-img'>
                        <div className='home-section__icon-box'>
                            <BsFillPlayCircleFill />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const HomePartnershipsSection = () => {
        return(
            <section className='home-section partsnerships-section'>
                <h2 className='home-section__title'>Partnerships</h2>
                <div className='home-section__wrapper'>
                    <div className='home-section__img-container'>
                        <div className='home-section__icon-box'>
                            <BsFillPlayCircleFill />
                        </div>
                    </div>
                    <div className='home-section__text-container'>
                        <p>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. </p>
                        <h3>Feature One</h3>
                        <p>By creating a visual guide along the way, the designer or developer can get input from the other people.</p>
                        <h3>Feature Two</h3>
                        <p>By creating a visual guide along the way, the designer or developer.</p>
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