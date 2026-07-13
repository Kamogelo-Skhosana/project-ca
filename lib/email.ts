import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, name?: string) {
  await resend.emails.send({
    from: 'Project CA <welcome@projectca.dev>',
    to: email,
    subject: 'Welcome to Project CA!',
    html: `<p>Hi ${name || 'there'},</p><p>Start tracking your coding behavior today.</p>`,
  });
}

// Add other email functions as needed