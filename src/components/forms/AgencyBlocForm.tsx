"use client";

import React, { useActionState } from 'react';
import { sendQuoteEmail } from '../../app/actions/send-quote';

const initialState = {
    message: '',
    success: false,
};

const AgencyBlocForm = () => {
    const [state, formAction, isPending] = useActionState(sendQuoteEmail, initialState);

    return (
        <div className="w-full max-w-md mx-auto">
            <style jsx>{`
                .abLeadForm input[type="text"],
                .abLeadForm select,
                .abLeadForm input[type="date"] {
                    width: 100%;
                    padding: 12px 16px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    font-size: 1rem;
                    max-width: 100%;
                    outline: none;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(4px);
                }
                
                .abLeadForm input[type="text"]:focus,
                .abLeadForm select:focus,
                .abLeadForm input[type="date"]:focus {
                    background: rgba(255, 255, 255, 0.8);
                    border-color: #005d9a;
                    box-shadow: 0 0 0 3px rgba(0, 93, 154, 0.1);
                }

                .abLeadForm label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 700;
                    color: #374151;
                    font-size: 0.875rem;
                }

                .abLeadForm button[type="submit"] {
                    width: 100%;
                    padding: 16px;
                    background: linear-gradient(to right, #005d9a, #1e9cd7);
                    color: white;
                    border-radius: 12px;
                    border: 0px;
                    font-size: 1.125rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }

                .abLeadForm button[type="submit"]:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }
                
                .abLeadForm button[type="submit"]:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .invalid-message {
                    display: none;
                    color: #ef4444;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    padding: 0.75rem;
                    background: #fee2e2;
                    border-radius: 0.5rem;
                }
                
                .abLeadForm:has(:user-invalid) .invalid-message {
                    display: block;
                }
                
                .abLeadForm input:user-invalid,
                .abLeadForm select:user-invalid {
                    border-color: #ef4444;
                }
            `}</style>

            <form
                autoComplete="off"
                action={formAction}
                className="abLeadForm space-y-6"
            >
                {state?.message && !state?.success && (
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                        {state.message}
                    </div>
                )}

                <p id='invalidMessage' className='invalid-message'>Please review the form.</p>

                <div>
                    <label htmlFor='firstName'>First Name (required)</label>
                    <input type='text' name='firstName' id='firstName' required aria-required='true' placeholder="John" />
                </div>

                <div>
                    <label htmlFor='middleInitial'>Middle Name</label>
                    <input type='text' name='middleInitial' id='middleInitial' placeholder="M" />
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name (required)</label>
                    <input type='text' name='lastName' id='lastName' required aria-required='true' placeholder="Doe" />
                </div>

                <div>
                    <label htmlFor='street1'>Street 1</label>
                    <input type='text' name='street1' id='street1' placeholder="123 Main St" />
                </div>

                <div>
                    <label htmlFor='street2'>Street 2</label>
                    <input type='text' name='street2' id='street2' placeholder="Apt 4B" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor='city'>City</label>
                        <input type='text' name='city' id='city' placeholder="La Quinta" />
                    </div>
                    <div>
                        <label htmlFor='stateAbbrev'>State</label>
                        <input type='text' name='stateAbbrev' id='stateAbbrev' placeholder="CA" />
                    </div>
                </div>

                <div>
                    <label htmlFor='zip'>Zip</label>
                    <input type='text' name='zip' id='zip' placeholder="92253" />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' placeholder="john@example.com" />
                </div>

                <div>
                    <label htmlFor='cellPhone'>Cell Phone</label>
                    <input type='text' name='cellPhone' id='cellPhone' placeholder="(555) 123-4567" />
                </div>

                <div>
                    <label htmlFor='birthDate'>Date of Birth</label>
                    <input type='date' name='birthDate' id='birthDate' />
                </div>

                <div>
                    <label htmlFor='custom_Gender'>Gender</label>
                    <select name='custom_Gender' id='custom_Gender'>
                        <option value=''></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-action pt-4">
                    <button type="submit" disabled={isPending} aria-describedby="invalidMessage">
                        {isPending ? 'Sending...' : 'Get My Free Quote'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AgencyBlocForm;
