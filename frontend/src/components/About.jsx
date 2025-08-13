import { motion } from 'framer-motion';
import { Target, Eye, Users, Zap, Star, CheckCircle } from 'lucide-react';

import storefrontImage from '../assets/wiring.jpg';

const About = () => {
    const fadeInAnimation = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true }
    };

    const historyData = [
        {
            year: "1977",
            title: "Started with Collaboration",
            text: "We started as partnership company as service & traders with the name of Bharath Electricals till 2002.",
        },
        {
            year: "2002",
            title: "Evolved as an Individual",
            text: "After completion of 25yrs of partnership new company started as Engenix.",
        },
        {
            year: "2021",
            title: "Revamp for the Future",
            text: "Company emerged as Engenix to elevate our level upto global market level.",
        },
    ];

    return (
        <section id="about" className="bg-white">
            {/* HEADER BANNER */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center py-16">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    50 Years of Excellence
                </motion.h1>
                <motion.p
                    className="mt-4 max-w-3xl mx-auto text-lg text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Providing the Best Electrical & Automation Engineering Design Solutions since 2002.
                </motion.p>
            </div>

            <div className="container mx-auto px-6 py-16 md:py-24 space-y-24">
                {/* WHO WE ARE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeInAnimation}>
                        <div className="flex items-center text-indigo-600 mb-4">
                            <Zap className="h-8 w-8 mr-3" />
                            <h2 className="text-3xl font-bold">Who We Are</h2>
                        </div>
                        <div className="text-gray-600 space-y-4 text-lg">
                            <p>
                                <b>Engenix</b> is established in 2002 with the vision to provide the Best Electrical & Automation engineering Design solution for Cement Plant, Steel Plant, Oil & Gas Plant, and more. We also supply All Types of Industrial Electrical Components & Consumables goods.
                            </p>
                            <div>
                                <h3 className="font-semibold text-gray-800 mt-6 mb-2">Expertise in Software for Electrical Design:</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>E PLAN</li>
                                    <li>Autocad</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mt-6 mb-2">Our Concept:</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>To provide End to End solution for large projects</li>
                                    <li>Single Point responsibility tailored to satisfy project requirement</li>
                                    <li>Encompasses all major functions in Project: Design, Engineering, Supply</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 0.2 }}>
                        <img
                            src={storefrontImage}
                            alt="Engenix storefront"
                            className="rounded-2xl shadow-xl w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>

                {/* HISTORY SECTION */}
                <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20 rounded-2xl shadow-lg">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our History</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            A journey of dedication, innovation, and growth spanning over four decades.
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full rounded"></div>

                        {historyData.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`mb-16 flex items-center w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div className="w-1/2 px-6">
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition">
                                        <h3 className="text-2xl font-bold text-indigo-600">{item.year} - {item.title}</h3>
                                        <p className="mt-2 text-lg text-gray-600">{item.text}</p>
                                    </div>
                                </div>
                                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full border-4 border-white shadow-lg">
                                    <span className="text-white font-bold">{index + 1}</span>
                                </div>
                                <div className="w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Vision and Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div {...fadeInAnimation} className="bg-green-50 p-8 rounded-2xl border border-green-200">
                        <div className="flex items-center text-green-600 mb-4">
                            <Eye className="h-8 w-8 mr-3" />
                            <h2 className="text-3xl font-bold">Our Vision</h2>
                        </div>
                        <p className="text-lg text-gray-600">
                            To be the technology partner of choice for forward looking customers by collaboratively transforming technology into business advantage.
                        </p>
                    </motion.div>
                    <motion.div
                        {...fadeInAnimation}
                        transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
                        className="bg-red-50 p-8 rounded-2xl border border-red-200"
                    >
                        <div className="flex items-center text-red-600 mb-4">
                            <Target className="h-8 w-8 mr-3" />
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-lg text-gray-600">
                            We will provide our clients with technically excellent and innovative solutions with an emphasis on quality, integrity, costs, responsiveness, and timeliness.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div {...fadeInAnimation} className="bg-gray-100 p-8 md:p-12 rounded-2xl">
                    <div className="text-center mb-10">
                        <div className="flex justify-center items-center text-indigo-600 mb-4">
                            <Star className="h-10 w-10" />
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
                        <div className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 mr-3 mt-1" /><span>Customer satisfaction & loyalty</span></div>
                        <div className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 mr-3 mt-1" /><span>Operate with integrity & accountability</span></div>
                        <div className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 mr-3 mt-1" /><span>Organizational & individual growth</span></div>
                        <div className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 mr-3 mt-1" /><span>Technical excellence with professional ethics</span></div>
                        <div className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 mr-3 mt-1" /><span>Value openness, trust & respect</span></div>
                        <div className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 mr-3 mt-1" /><span>Promote innovation & leadership</span></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
