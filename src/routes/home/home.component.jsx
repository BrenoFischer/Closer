import { BsFillPlayCircleFill } from 'react-icons/bs';

import Button from '../../components/button/button.component';
import './home.styles.scss';

const Home = () => {
    const HomeHeader = () => {
        return(
            <header className='header'>
                <div className='header__container'>
                    <h1 className='header__title'>A dedicated team to grow your company</h1>
                    <p className='header__paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <div className='buttons-container'>
                        <Button title='Social Enterprises' />
                        <Button title='Corporates' />
                        <Button title='Partnership' />
                    </div>
                </div>
            </header>
        );
    }
    
    const HomeEnterpriseSection = () => {
        return(
            <section className='enterprise-section'>
                <h2 className='enterprise-section__title'>Social Enterprise</h2>
                <div className='enterprise-section__wrapper'>
                    <div className='enterprise-section__img-container'>
                        <div className='enterprise-section__icon-box'>
                            <BsFillPlayCircleFill />
                        </div>
                    </div>
                    <div className='enterprise-section__text-container'>
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
            <section className='corporate-section'>
                <h2 className='corporate-section__title'>Corporates</h2>
                <div className='corporate-section__wrapper'>
                    <div className='corporate-section__img-container'>
                        <div className='corporate-section__icon-box'>
                            <BsFillPlayCircleFill />
                        </div>
                    </div>
                    <div className='corporate-section__text-container'>
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
            </main>
        </>
    );
}

export default Home;