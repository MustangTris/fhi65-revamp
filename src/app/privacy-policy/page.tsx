
import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read the Foulds Health Insurance Privacy Policy to understand how we collect, use, and protect your personal information.",
    alternates: {
        canonical: '/privacy-policy',
    },
};

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-[#f0f9ff] min-h-screen pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-[#005d9a] mb-8">Privacy Policy</h1>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Our Contact Information</h2>
                            <p>
                                Foulds Health Insurance Agency<br />
                                78010 Main Street, Suite 208<br />
                                La Quinta, CA 92253
                            </p>
                        </section>

                        <section>
                            <p>
                                Foulds Health Insurance Agency recognizes that when you choose to provide us with personal information about yourself or your business, you trust us to treat it responsibly.
                            </p>
                            <p>
                                This Privacy Policy explains the types of personal information that fhi65.com collects about you, how we use, share, and protect this personal information, and the choices you can make about how we use and share this personal information.
                            </p>
                            <p>
                                It is important that you read this Privacy Policy carefully, because anytime you use our website you consent to the practices we describe in this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Information Covered by this Privacy Policy</h2>
                            <p>
                                This Privacy Policy is applicable to information collected by Foulds Health Insurance Agency and its affiliated companies. This includes information collected:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Through websites, mobile applications, credit applications and other online services that refer or link to this Privacy Policy.</li>
                                <li>Through the other business functions of Foulds Health Insurance Agency, such as by customer service representatives.</li>
                            </ul>
                            <p className="mt-2">
                                Our website may at times link to third-party websites and services that are outside our control. We are not responsible for the security or privacy of any information collected by such third parties. You should exercise caution, and review the privacy statements applicable to such third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Information We Collect</h2>
                            <p>We may collect information about you and others and the computer or device you use to access our Services in a variety of ways:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>You may provide us information directly.</li>
                                <li>We may collect information about you when you use our website, make purchases, view our online advertisements, or apply for credit.</li>
                                <li>We may collect additional information about you in accordance with applicable law.</li>
                            </ul>
                            <p className="mt-2">The manner of our collection and the type of information collected may vary by location to accommodate local legal requirements.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-[#00152e] mb-2">Information you provide us directly</h3>
                            <p>The following are examples of information you may provide us directly:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Name</li>
                                <li>E-mail address, physical address and/or zip code, and phone number.</li>
                                <li>Username or password.</li>
                                <li>Age or birthdate, gender, occupation, and other demographic information.</li>
                                <li>Credit card or other payment information.</li>
                                <li>Other information about you, your business your family or others, such as in connection with applications for credit terms.</li>
                            </ul>
                            <p className="mt-2">You can choose not to provide us with certain types of information, but doing so may affect your ability to use some features of our website.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-[#00152e] mb-2">Information we collect when you use our website</h3>
                            <p>We collect information about your computer or device and your online activity, including through the use of standard Internet technologies, such as cookies, web beacons, and local stored objects. The following are examples of the types of information that we may collect:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Your browser type and operating system.</li>
                                <li>IP address and/or device ID.</li>
                                <li>Your browsing behavior on our website, such as the amount of time spent viewing our online production information, the links you click within our website, and the purchases and transactions you make through the website.</li>
                                <li>Foulds Health Insurance Agency e-mails you open and/or forward.</li>
                                <li>Foulds Health Insurance Agency offers or links you connect to via e-mails.</li>
                                <li>Depending on your device settings, location information, such as your mobile device’s GPS signal or information about nearby Wi-Fi access points and cell towers</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Use of Information</h2>
                            <p>We may use the information we collect about you:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>To provide you with services, products, or other materials you request.</li>
                                <li>To communicate with you about our products, services, and promotions.</li>
                                <li>To customize your experience with our product or service offerings, including by providing you with relevant advertising.</li>
                                <li>To manage and improve your shopping experiences and our products, services or offerings, including analyzing the use of website, and determining the effectiveness of our advertising.</li>
                                <li>To protect the security and integrity of our website or other information.</li>
                                <li>To enforce our legal rights.</li>
                                <li>Otherwise with your consent.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Sharing of Information</h2>
                            <p>fhi65.com may disclose your information in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>To other Parties When Required by Law or as Necessary to Protect Our Services.</strong> There may be instances when we disclose your information to other parties to comply with the law, prevent fraud, or protect the rights/safety of fhi65.com and its affiliates.</li>
                                <li><strong>To other Parties In Connection With A Corporate Transaction.</strong> We may disclose information in case of a merger or sale.</li>
                                <li><strong>To other Parties With Your Consent Or At Your Request.</strong></li>
                                <li><strong>Non-Personal Information.</strong> We may share aggregated, non-identifying data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Cookies, Web Beacons, and Other Internet Technologies</h2>
                            <p>We may use cookies, web beacons and similar technologies. By using our website, you consent to our use of these technologies.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Security of Data</h2>
                            <p>We have in place numerous procedures to safeguard all data, including your information, to keep such matters secure. However, please note that although we take reasonable steps to protect your information, no website or computer is completely secure.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-[#00152e] mb-3">Changes to This Privacy Policy</h2>
                            <p>We reserve the right, at our discretion, to modify, add, or remove portions of this Privacy Policy at any time. You should revisit this Privacy Policy periodically to ensure that you are aware of our current privacy practices.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
