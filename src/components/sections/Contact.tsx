import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

const Contact: React.FC = () =>
{
    const { personalInfo, socialLinks } = portfolioConfig;
    const [ formData, setFormData ] = useState( {
        name: '',
        email: '',
        subject: '',
        message: ''
    } );

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>
    {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.value
        } );
    };

    const handleSubmit = ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        // Create mailto link with form data
        const subject = encodeURIComponent( formData.subject );
        const body = encodeURIComponent(
            `Hi ${ personalInfo.name },\n\n${ formData.message }\n\nBest regards,\n${ formData.name }\n${ formData.email }`
        );
        window.location.href = `mailto:${ personalInfo.email }?subject=${ subject }&body=${ body }`;
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                I'm always open to discussing new opportunities, interesting projects,
                                or just having a chat about technology and development. Feel free to reach out!
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <Icon name="mail" size={20} className="text-primary-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <a
                                            href={`mailto:${ personalInfo.email }`}
                                            className="text-primary-600 hover:text-primary-700 transition-colors"
                                        >
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {personalInfo.phone && (
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <Icon name="phone" size={20} className="text-primary-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Phone</h4>
                                            <span className="text-gray-600">{personalInfo.phone}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <Icon name="location" size={20} className="text-primary-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Location</h4>
                                        <span className="text-gray-600">{personalInfo.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-4">Follow me on</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map( ( link ) => (
                                        <a
                                            key={link.platform}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors"
                                            aria-label={link.platform}
                                        >
                                            <Icon name={link.icon} size={20} />
                                        </a>
                                    ) )}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <Button type="submit" fullWidth size="lg">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;