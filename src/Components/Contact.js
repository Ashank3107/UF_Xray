import React, { useState } from 'react';
import contactImg from './Imgs/Contact_us.jpg';
import './CSS/contact.css'
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        desc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add API call or form submission logic here
    };

    return (
        <div className="flex flex-col items-center my-8 w-3/4 mx-auto bg-gradient-to-r p-8 rounded-lg shadow-xl">
            {/* Image Section */}
            <div className="flex justify-center my-8 w-full">
                <img src={contactImg} alt="Contact" className="w-1/2 rounded-lg shadow-lg" />
            </div>

            {/* Contact Form and Query Section */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
                {/* Contact Form Section */}
                <div className="w-full md:w-2/3 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-orange-600 text-center mb-6">Get in Touch</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="relative">
                            <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <input
                                type="text"
                                name="name"
                                placeholder="NAME"
                                className="w-full pl-10 pr-4 py-3 border-2 border-orange-500 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                className="w-full pl-10 pr-4 py-3 border-2 border-orange-500 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <i className="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="PHONE NUMBER"
                                className="w-full pl-10 pr-4 py-3 border-2 border-orange-500 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <i className="fas fa-pencil-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <textarea
                                name="desc"
                                placeholder="MESSAGE"
                                className="w-full pl-10 pr-4 py-3 border-2 border-orange-500 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 h-32 shadow-sm"
                                value={formData.desc}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit"  className="custom-btn">
                            Submit
                        </button>


                    </form>
                </div>
                <div className="w-full md:w-1/3 p-6 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-black">Got a Query?</h1>
                    <p className="text-lg text-gray-700 mt-4 leading-relaxed">Contact us today to explore our digital software offerings and experience unparalleled technological solutions for your business. Let's elevate your digital experience together.</p>
                </div>
            </div>
        </div>
    );
}