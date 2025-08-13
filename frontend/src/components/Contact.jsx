import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.post(`${API_URL}/message`, formData);
            setSubmitStatus({ message: 'Thank you! Your message has been sent.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send message:', error);
            setSubmitStatus({ message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitStatus({ message: '' });
            }, 5000);
        }
    };

    const fadeInAnimation = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: true }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    {...fadeInAnimation}
                >
                    <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600">Have a question or a project in mind? We'd love to hear from you.</p>
                </motion.div>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-gray-600">123, Tenkasi Rd, Sankarankovil, Tamil Nadu 627756</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Phone & WhatsApp</h3>
                                    <a href="tel:+919876543210" className="text-gray-600 hover:text-indigo-600">+91 99948 24697</a>
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
                        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                // --- UPDATED MAP URL ---
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.678643030381!2d77.5519468731496!3d9.449552082268044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e9d1616c62e5%3A0x17620481d05bd96!2s841%2C%20280%2C%20Tenkasi%20Rd%2C%20South%20Sammanthapuram%2C%20Rajapalayam%2C%20Tamil%20Nadu%20626117!5e0!3m2!1sen!2sin!4v1755071545498!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors disabled:bg-indigo-400">
                                    {isSubmitting ? (<><Loader2 className="h-5 w-5 animate-spin" /><span>Sending...</span></>) : (<><Send className="h-5 w-5" /><span>Send Message</span></>)}
                                </button>
                            </div>
                            {submitStatus.message && (<p className={`mt-4 text-center ${submitStatus.message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>{submitStatus.message}</p>)}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
