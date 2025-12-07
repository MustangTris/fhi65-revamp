'use server'

import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

export async function sendContactEmail(prevState: unknown, formData: FormData) {
    console.log('--- sendContactEmail ACTION STARTED ---');
    console.log('FormData:', Object.fromEntries(formData));

    let success = false;

    try {
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        // Basic validation
        if (!data.firstName || !data.lastName || !data.email || !data.message) {
            console.log('Validation failed:', data);
            return { success: false, message: 'Missing required fields' };
        }

        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_PORT) {
            console.error('SMTP Environment Variables are missing');
            return { success: false, message: 'Server configuration error: SMTP settings are missing.' };
        }

        const port = Number(process.env.SMTP_PORT);
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: port,
            secure: port === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const htmlContent = `
            <h2>New Contact Message</h2>
            <table style="border-collapse: collapse; width: 100%;">
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px; font-weight: bold; width: 150px;">First Name</td>
                    <td style="padding: 10px;">${data.firstName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px; font-weight: bold; width: 150px;">Last Name</td>
                    <td style="padding: 10px;">${data.lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px; font-weight: bold; width: 150px;">Email</td>
                    <td style="padding: 10px;">${data.email}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px; font-weight: bold; width: 150px;">Phone</td>
                    <td style="padding: 10px;">${data.phone || '-'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px; font-weight: bold; width: 150px;">Message</td>
                    <td style="padding: 10px;">${data.message}</td>
                </tr>
            </table>
        `;

        const textContent = `
New Contact Message

First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || '-'}
Message: ${data.message}
`;

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'randy@fhi65.com',
            replyTo: data.email as string,
            subject: `New Contact Message from ${data.firstName} ${data.lastName}`,
            text: textContent,
            html: htmlContent,
        });

        success = true;
    } catch (error) {
        console.error('Failed to send email:', error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error details:', errorMessage);
        return { success: false, message: `Failed to send message: ${errorMessage}` };
    }

    if (success) {
        return { success: true, message: 'Thank you! Your message has been sent successfully.' };
    }
}
