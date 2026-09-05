import { createFileRoute } from '@tanstack/react-router';
import { sendEmail } from '../../lib/email';

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            name?: string;
            email?: string;
            message?: string;
          };

          const { name, email, message } = body;

          if (!name || !email || !message) {
            return Response.json(
              { success: false, statusMessage: 'Missing required fields' },
              { status: 400 },
            );
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            return Response.json(
              { success: false, statusMessage: 'Invalid email format' },
              { status: 400 },
            );
          }

          const recipientEmail = 'kvenkateshk2004@gmail.com';
          const fromEmail = process.env.SMTP_FROM_EMAIL || 'noreply@icaidiet26.tech';

          const adminResult = await sendEmail({
            to: recipientEmail,
            from: fromEmail,
            subject: `ICAIDIET'26 Enquiry from ${name}`,
            html: `
              <h2>New Enquiry Received</h2>
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <h3>Message:</h3>
              <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Received at: ${new Date().toLocaleString()}</small></p>
            `,
            replyTo: email,
          });

          const userResult = await sendEmail({
            to: email,
            from: fromEmail,
            subject: "We've received your enquiry — ICAIDIET'26",
            html: `
              <h2>Thank you for your enquiry!</h2>
              <p>Dear ${escapeHtml(name)},</p>
              <p>Thank you for reaching out to us regarding ICAIDIET'26. We have received your message and will get back to you as soon as possible.</p>
              <p><strong>Your enquiry:</strong></p>
              <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
              <hr>
              <p>Best regards,<br>ICAIDIET'26 Team</p>
              <p><small>International Conference on AI-Driven Innovation in Engineering & Technology</small></p>
            `,
          });

          if (!adminResult.success || !userResult.success) {
            const failureReason = adminResult.error || userResult.error || 'Unable to send the enquiry email.';

            console.error('Contact form email failed:', failureReason);
            return Response.json(
              {
                success: false,
        statuicaidiet26
              },
              { status: 500 },
            );
          }

          console.log('Contact form submission:', {
            name,
            email,
            timestamp: new Date().toISOString(),
            emailResults: {
              adminEmail: adminResult.success,
              userEmail: userResult.success,
            },
          });

          return Response.json({
            success: true,
            message: 'Thank you for your enquiry. We will get back to you shortly!',
          });
        } catch (error) {
          console.error('Contact form error:', error);
          return Response.json(
            { success: false, statusMessage: 'Please directly contact with icaidiet26@gmail.com' },
            { status: 500 },
          );
        }
      },
    },
  },
});

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

