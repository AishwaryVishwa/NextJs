import React from 'react';
import Time from '../components/Time';

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-6">Effective Date: <span className="font-semibold">[Insert Date]</span></p>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
                <p className="text-gray-700">Welcome to <span className="font-semibold">[Your Website Name]</span> ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website <span className="font-semibold">[Insert Website URL]</span>.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided voluntarily.</li>
                    <li><strong>Non-Personal Information:</strong> Browser type, IP address, device information, and browsing behavior collected through cookies and analytics tools.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>To provide and improve our services.</li>
                    <li>To personalize your experience.</li>
                    <li>To communicate with you about updates, promotions, and support.</li>
                    <li>To analyze website usage and trends.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Sharing of Information</h2>
                <p className="text-gray-700">We do not sell, trade, or rent your personal information. However, we may share your information with:</p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Third-party service providers assisting in website operation and analytics.</li>
                    <li>Law enforcement if required by law or to protect our rights.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700">We use cookies to enhance user experience, analyze traffic, and serve relevant ads. You can manage cookie preferences through your browser settings.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Data Security</h2>
                <p className="text-gray-700">We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Your Rights</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Access, update, or delete your personal information.</li>
                    <li>Opt out of marketing communications.</li>
                    <li>Disable cookies through browser settings.</li>
                </ul>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Third-Party Links</h2>
                <p className="text-gray-700">Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">9. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">10. Contact Us</h2>
                <p className="text-gray-700">For any questions or concerns regarding this Privacy Policy, please contact us at <span className="font-semibold">[Insert Contact Information]</span>.</p>
            </section>
            <Time/>
        </div>
    );
}
