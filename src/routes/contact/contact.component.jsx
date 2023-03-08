import { useState, useRef } from 'react';

import Fade from 'react-reveal/Fade';

import { FiCheckCircle } from 'react-icons/fi';
import { RxCrossCircled, RxCross2 } from 'react-icons/rx';

import emailjs from '@emailjs/browser';

import Footer from '../../components/footer/footer.components';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

import './contact.styles.scss';

const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
}

/*
This Component is an individual Input for the Contact Form.

Props:
- label: string - the label name
- addClass: string - string to be added to input className, changing input style
- isTextArea: boolean - determine if its a textarea element or input element
- otherProps: {
    type: string - type of input element
    required: boolean - if input is required or not for the form
    onChange: function - function that handles input text change 
    name: string - input name that connects to label
    value: [type of input] - string: the value of the input field
}
*/
const FormInput = ({ label, addClass="", isTextArea=false, ...otherProps }) => (
    <div className='form__input'>
        <label className='form__input-label'>
            {label}
            {otherProps.required &&
                <span>*</span>
            }
        </label>
        {
            isTextArea ?
                <textarea 
                    className={`form__input-field ${addClass}`}
                    {...otherProps}
                />
            :
                <input 
                    className={`form__input-field ${addClass}`}
                    {...otherProps}
                />
        }
    </div>
);


const ContactHeader = () => (
        <header className='contact-header'>
            <Fade>
                <div className='contact-header__container'>
                    <h1 className='contact-header__title'>Get in touch</h1>
                    <p className='contact-header__paragraph'>For further information on CLOSER don't hesitate to contact through any of the following methods.</p>
                </div>
            </Fade>
        </header>
);


/* 
Component that returns a sticky message box on top of page
- the message box content depends on the emailError boolean
- if the emailError variable is false, the box shows a success message
- otherswise, it shows an error message with no further details of the error
*/
const TempMessageBox = ({handleCloseMessageBox, messageError}) => {
    const ErrorMessageBox = () => (
        <>
            <div className='message-box__icon-box-error'>
                <RxCrossCircled />
            </div>
            <div className='message-box__text-box'>
                <h2 className='message-box__title-error'>An error has ocurred - message was not sent</h2>
                <p>Sorry about that! Please, contact us sending an e-mail to: email@address.com</p>
            </div>
        </>
    );

    const SuccessMessageBox = () => (
        <>
            <div className='message-box__icon-box'>
                <FiCheckCircle />
            </div>
            <div className='message-box__text-box'>
                <h2 className='message-box__title'>E-mail sent with success</h2>
                <p>Thank you for the message! We'll reply as soon as possible :)</p>
            </div>
        </>
    );

        return (
            <div className='message-box'>
                <div className='message-box__exit' onClick={handleCloseMessageBox}>
                    <RxCross2 />
                </div>
                <div className='message-box__wrap'>
                    { !messageError ?
                        <SuccessMessageBox />
                    :
                        <ErrorMessageBox />
                    }
                </div>
            </div>
        );
}


const Contact = () => {
    const form = useRef();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [loadingVisible, setLoadingVisible] = useState(false);
    const [messageBoxVisible, setMessageBoxVisible] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const { firstName, lastName, email, phone, subject, message } = formFields;


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };


    const handleCloseMessageBox = () => {
        setMessageBoxVisible(false);
    }

    const sendMessage = (event) => {
        const messageBoxTimer = 15000;
        event.preventDefault();
        setLoadingVisible(true);

        emailjs.sendForm('service_4n0kkhy', 'template_bbrsitd', form.current, '4Y4-IJ2hC5NM0ZrdC')
            .then((result) => {
                setMessageBoxVisible(true);
                setTimeout(() => setMessageBoxVisible(false), messageBoxTimer); //this will set message box hidden after messageBoxTimer seconds
                setFormFields(defaultFormFields);
                setLoadingVisible(false);
            }, (error) => {
                setEmailError(true);
                setTimeout(() => {
                    setMessageBoxVisible(false)
                    setEmailError(false);
                }, messageBoxTimer);
                setMessageBoxVisible(true);
                setLoadingVisible(false);
            });
    };


    return(
        <>
            <ContactHeader />
            <form className='form' ref={form} onSubmit={sendMessage}>
                <div className='form__input-set'>
                    <FormInput 
                        label="First Name: "
                        type="text"
                        required 
                        onChange={handleInputChange} 
                        name="firstName" 
                        value={firstName}
                    />
                    <FormInput 
                        label="Last Name: "
                        type="text"
                        required 
                        onChange={handleInputChange} 
                        name="lastName" 
                        value={lastName}
                    />
                </div>
                <div className='form__input-set'>
                    <FormInput 
                        label="Email Address: "
                        type="email"
                        required 
                        onChange={handleInputChange} 
                        name="email" 
                        value={email}
                    />
                    <FormInput 
                        label="Telephone: "
                        type="tel"
                        onChange={handleInputChange} 
                        name="phone" 
                        value={phone}
                    />
                </div>
                <div className='form__input-set'>
                    <FormInput 
                        label="Subject: "
                        type="text"
                        addClass="subject"
                        required 
                        onChange={handleInputChange} 
                        name="subject" 
                        value={subject}
                    />
                </div>
                <div className='form__input-set'>
                    <FormInput 
                        label="Message: "
                        isTextArea={true}
                        addClass="textarea"
                        rows="4"
                        cols="50"
                        required 
                        onChange={handleInputChange} 
                        name="message" 
                        value={message}
                    />
                </div>
                <div className='form__submit-button-container'>
                    {
                        loadingVisible ? 
                            <div className='form__spinner-container'><LoadingSpinner /></div>
                        :
                            <button className='form__submit-button'>Send Message</button>
                    }
                </div>
                {messageBoxVisible &&
                    <TempMessageBox handleCloseMessageBox={handleCloseMessageBox} messageError={emailError} />
                }
            </form>
            <Footer />
        </>
    );
}

export default Contact;