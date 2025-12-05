
import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Accessibility Statement",
    description: "Foulds Health Insurance Agency is committed to digital accessibility. Read our statement on WCAG 2.0 AA compliance and our ongoing efforts.",
    alternates: {
        canonical: '/accessibility',
    },
};

const AccessibilityPage = () => {
    return (
        <div className="bg-[#f0f9ff] min-h-screen pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-[#005d9a] mb-8">Accessibility Statement</h1>

                    <div className="prose prose-blue max-w-none text-gray-600">
                        <p className="mb-4">
                            Foulds Health Insurance Agency is committed to facilitating the accessibility and usability of its website for all people with or without disabilities.
                        </p>
                        <p className="mb-4">
                            Foulds Health Insurance Agency strives to maintain compliance with the World Wide Web’s Consortium’s Web Content Accessibility Guidelines 2.0 Level AA (WCAG 2.0 AA) on our website, and:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>We have built our website using standard-compliant HTML and CSS</li>
                            <li>The website content is structured in a logical manner using informative headings and labels where relevant</li>
                            <li>There is consistent navigation across the website</li>
                            <li>Images have alternative text.</li>
                        </ul>

                        <p className="mb-4">
                            Please be aware that WCAG 2.0 AA Guidelines are evolving and our efforts to comply with these guidelines are ongoing.
                        </p>

                        <p className="mb-4">
                            If, at any time, you have specific questions or concerns about the accessibility of any particular Web page on Foulds Health Insurance Agency please contact Foulds Health Insurance Agency via email (<a href="mailto:randy@fhi65.com" className="text-[#1e9cd7] hover:underline">randy@fhi65.com</a>) or call us at: 760.346.6565. Foulds Health Insurance Agency will make all reasonable efforts in order to update the page(s) and ensure their accessibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessibilityPage;
