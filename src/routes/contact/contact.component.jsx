import Footer from '../../components/footer/footer.components';
import './contact.styles.scss';

const Contact = () => {
    const ContactHeader = () => {
        return(
            <header className='contact-header'>
                <div className='contact-header__container'>
                    <h1 className='contact-header__title'>Get in touch</h1>
                    <p className='contact-header__paragraph'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                </div>
            </header>
        );
    }

    return(
        <>
            <ContactHeader />
            <h1>Contact</h1>
            <Footer />
        </>
    );
}

export default Contact;