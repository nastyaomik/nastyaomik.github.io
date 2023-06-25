import React from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser } from 'react-icons/fa';
import './contact.css';


const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Me</h2>
        <p className="section__subtitle">
            Let`s` <span>Talk About Ideas</span>
        </p>
        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap />
                    </span>
                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-data">North Tower, Toronto, Canada</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser />
                    </span>
                    <h3 className="contact__card-title">Freelance</h3>
                    <p className="contact__card-data">Available Right Now</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope />
                    </span>
                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">permikov134@yandex.ru</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook />
                    </span>
                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+7 977 991 80 74</p>
                </div>
            </div>
            <form className="contact__form">
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your full Name <b>*</b>
                        </label>
                        <input type="text" className="contact__form-input" />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your Email Address <b>*</b>
                        </label>
                        <input type="email" className="contact__form-input" />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your full Name <b>*</b>
                        </label>
                        <input type="text" className="contact__form-input" />
                    </div>
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">
                        Your Subject <b>*</b>
                    </label>
                    <input type="text" className="contact__form-input" />
                </div>
                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">
                        Your Message <b>*</b>
                    </label>
                    <textarea className='contact__form-input' />
                </div>
            </form>
        </div>
    </section>
  );
};

export default Contact;
