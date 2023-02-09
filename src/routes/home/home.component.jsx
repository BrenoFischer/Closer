import Button from '../../components/button/button.component';
import './home.styles.scss';

const Home = () => {
    const HomeHeader = () => {
        return(
            <header className="header">
                <div className='header__container'>
                    <h1 className='header__title'>A dedicated team to grow your company</h1>
                    <p className='header__paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <div className="buttons-container">
                        <Button title="Social Enterprises" />
                        <Button title="Corporates" />
                        <Button title="Partnership" />
                    </div>
                </div>
            </header>
        );
    }

    return(
        <HomeHeader />
    );
}

export default Home;