import { useState, useRef } from 'react';

import Footer from '../../components/footer/footer.components';
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


const Contact = () => {
    const form = useRef();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { firstName, lastName, email, phone, subject, message } = formFields;


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }


    const ContactHeader = () => {
        return(
            <header className='contact-header'>
                <div className='contact-header__container'>
                    <h1 className='contact-header__title'>Get in touch</h1>
                    <p className='contact-header__paragraph'>For further information on CLOSER don’t hesitate to contact through any of the following methods.</p>
                </div>
            </header>
        );
    }

    return(
        <>
            <ContactHeader />
            <form className='form' ref={form}>
                <div className='form__input-set'>
                    <FormInput 
                        label="First Name: "
                        type="text"
                        required 
                        onChange={handleInputChange} 
                        name="firstName" 
                        value={firstName}
                    />
                    <div className='margin-left-medium'>
                        <FormInput 
                            label="Last Name: "
                            type="text"
                            required 
                            onChange={handleInputChange} 
                            name="lastName" 
                            value={lastName}
                        />
                    </div>
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
                    <div className='margin-left-medium'>
                        <FormInput 
                            label="Telephone: "
                            type="tel"
                            onChange={handleInputChange} 
                            name="phone" 
                            value={phone}
                        />
                    </div>
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
                    <button className='form__submit-button'>Send Message</button>
                </div>
            </form>
            <Footer />
        </>
    );
}

export default Contact;