'use server'

import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

export async function sendQuoteEmail(prevState: unknown, formData: FormData) {
    let success = false;

    try {
        const data = {
            firstName: formData.get('firstName'),
            middleInitial: formData.get('middleInitial'),
            lastName: formData.get('lastName'),
            street1: formData.get('street1'),
            street2: formData.get('street2'),
            city: formData.get('city'),
            stateAbbrev: formData.get('stateAbbrev'),
            zip: formData.get('zip'),
            email: formData.get('email'),
            cellPhone: formData.get('cellPhone'),
            birthDate: formData.get('birthDate'),
            gender: formData.get('custom_Gender'),
        };


        // Basic validation
        if (!data.firstName || !data.lastName || !data.email || !data.cellPhone) {
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
            <h2>New Quote Request</h2>
            <table style="border-collapse: collapse; width: 100%;">
                ${Object.entries(data).map(([key, value]) => `
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold; width: 150px;">${key}</td>
                        <td style="padding: 10px;">${value || '-'}</td>
                    </tr>
                `).join('')}
            </table>
        `;

        const textContent = `
New Quote Request

${Object.entries(data).map(([key, value]) => `${key}: ${value || '-'}`).join('\n')}
`;

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'randy@fhi65.com',
            replyTo: data.email as string,
            subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
            text: textContent,
            html: htmlContent,
        });

        success = true;
    } catch (error) {
        console.error('Failed to send email:', error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error details:', errorMessage);
        return { success: false, message: `Failed to send quote request: ${errorMessage}` };
    }

    if (success) {
        redirect('/thank-you');
    }
}
