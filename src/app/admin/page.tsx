'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { addArticle } from '../actions';

const initialState = {
    message: '',
    success: false,
};

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [state, formAction] = useFormState(addArticle, initialState);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration
        if (password === 'FHI65Admin') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h1 className="text-2xl font-bold text-[#005d9a] mb-6 text-center">Admin Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005d9a] outline-none"
                                placeholder="Enter password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#005d9a] text-white font-bold py-3 rounded-lg hover:bg-[#1e9cd7] transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 lg:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-[#005d9a] px-8 py-6 flex justify-between items-center">
                        <h1 className="text-white text-xl font-bold">Post New Article</h1>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="text-blue-100 hover:text-white text-sm font-medium"
                        >
                            Logout
                        </button>
                    </div>

                    <div className="p-8">
                        {state.message && (
                            <div className={`mb-6 p-4 rounded-lg ${state.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                {state.message}
                            </div>
                        )}

                        <form action={formAction} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Article Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005d9a] outline-none"
                                    placeholder="e.g., Medicare Changes for 2025"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                                    <input
                                        type="text"
                                        name="date"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005d9a] outline-none"
                                        placeholder="e.g., October 15, 2024"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                                    <select
                                        name="category"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005d9a] outline-none"
                                    >
                                        <option value="">Select a category...</option>
                                        <option value="Medicare Updates">Medicare Updates</option>
                                        <option value="Education">Education</option>
                                        <option value="Enrollment">Enrollment</option>
                                        <option value="Wellness">Wellness</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Short Excerpt</label>
                                <textarea
                                    name="excerpt"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005d9a] outline-none"
                                    placeholder="A brief summary that appears on the news list page..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Content</label>
                                <textarea
                                    name="content"
                                    required
                                    rows={10}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005d9a] outline-none font-mono text-sm"
                                    placeholder="Write your article content here..."
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md"
                                >
                                    Publish Article
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
