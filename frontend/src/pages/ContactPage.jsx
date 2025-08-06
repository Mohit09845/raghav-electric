import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; 
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react'; 

import contactBanner from '../assets/contact-banner.jpg';

const API_URL = import.meta.env.VITE_API_URL;

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    // 2. Add states for loading, submission status, and errors
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, error: false, message: '' });

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // 3. Update handleSubmit to use axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: false, error: false, message: '' });

        try {
            // Send a POST request to your backend
            await axios.post(`${API_URL}/message`, formData);

            setSubmitStatus({ success: true, error: false, message: 'Thank you! Your message has been sent.' });
            setFormData({ name: '', email: '', message: '' }); // Clear form on success
        } catch (error) {
            console.error('Failed to send message:', error);
            setSubmitStatus({ success: false, error: true, message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
            // Hide the status message after a few seconds
            setTimeout(() => {
                setSubmitStatus({ success: false, error: false, message: '' });
            }, 5000);
        }
    };

    const handleScrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeInAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true }
    };

    return (
        <div className="bg-white">
            {/* Hero Banner */}
            <div className="relative bg-cover bg-bottom text-white py-20 px-6" style={{ backgroundImage: `url(${contactBanner})` }}>
                <div className="absolute inset-0 bg-indigo-900/80"></div>
                <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Get in touch with us today</h1>
                        <p className="mt-4 text-lg text-indigo-200">Another strong prompt encouraging visitors to take action.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <button
                            onClick={handleScrollToForm}
                            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg"
                        >
                            Contact us now
                        </button>
                        <div className="flex items-center space-x-3">
                            <div className="bg-red-500 p-3 rounded-full">
                                <Phone className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <span className="text-indigo-200 text-sm">Call us</span>
                                <p className="text-white font-semibold text-lg">(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info & Map */}
                    <motion.div {...fadeInAnimation}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-gray-600">123 Electric Avenue, Pimpri-Chinchwad, Maharashtra, 411019</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Phone & WhatsApp</h3>
                                    <a href="tel:+911234567890" className="text-gray-600 hover:text-indigo-600">+91 (123) 456-7890</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="mailto:contact@raghav.com" className="text-gray-600 hover:text-indigo-600">contact@raghavelectrical.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.63333339347!2d73.7812028!3d18.641323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b21013191573d5c!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1668523145678!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        ref={formRef}
                        className="bg-gray-50 p-8 rounded-lg shadow-lg"
                        {...fadeInAnimation}
                        transition={{ delay: 0.2, ...fadeInAnimation.transition }}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors disabled:bg-indigo-400">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            {submitStatus.message && (
                                <p className={`mt-4 text-center ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                                    {submitStatus.message}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
