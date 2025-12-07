'use client';

import React, { useActionState } from 'react';
import { sendContactEmail } from '../../app/actions/send-contact';

const initialState = {
    message: '',
    success: false,
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

    return (
        <form action={formAction} className="space-y-6">
            {state?.message && !state?.success && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    {state.message}
                </div>
            )}
            {state?.success && (
                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm text-gray-900 placeholder-gray-500"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm text-gray-900 placeholder-gray-500"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm text-gray-900 placeholder-gray-500"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm text-gray-900 placeholder-gray-500"
                    placeholder="(555) 123-4567"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-[#005d9a] focus:border-transparent outline-none transition-all backdrop-blur-sm text-gray-900 placeholder-gray-500"
                    placeholder="How can we help you?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="flare-button w-full bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isPending ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
