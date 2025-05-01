
'use client'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Head from 'next/head';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import Loader from '../../components/loader/Loader';

const Contact = () => {
    const setting = useSelector((state) => state.setting);
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="contact-us" className="contact-section">
            <Head>
                <title>{t('contact_us')} - Kashmir Trout</title>
            </Head>
            {setting.setting === null ? (
                <Loader screen="full" />
            ) : (
                <div className="contact-container">
                    <div className="contact-wrapper">
                        <div className="contact-header">
                            <h2>Get in Touch</h2>
                            <p>We'd love to hear from you. Please fill out this form.</p>
                        </div>

                        <div className="contact-grid">
                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <div className="contact-info-items">
                                    <div className="contact-info-item">
                                        <Phone className="icon" />
                                        <span>+91 6005833945</span>
                                    </div>
                                    <div className="contact-info-item">
                                        <Mail className="icon" />
                                        <span>kashmirtrout.in@gmail.com</span>
                                    </div>
                                    <div className="contact-info-item">
                                        <MapPin className="icon" size={98} />
                                        <span> Main road, Opposite Shah Neelam colony, Budshah Nagar, Natipora, Srinagar, Jammu and Kashmir 190015</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-grid">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                        <div className="full-width">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>
                                        <div className="full-width">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                placeholder="Your Message"
                                                required
                                            />
                                        </div>
                                        <div className="full-width">
                                            <button type="submit">
                                                <span>Send Message</span>
                                                <Send className="icon" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
