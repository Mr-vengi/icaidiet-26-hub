import { createFileRoute } from '@tanstack/react-router';
import { sendEmail } from '../../lib/email';

export const Route = createFileRoute('/api/register')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            fullName?: string;
            email?: string;
            phoneNumber?: string;
            institution?: string;
            category?: string;
            country?: string;
          };

          const { fullName, email, phoneNumber, institution, category, country } = body;

          if (!fullName || !email || !phoneNumber || !institution || !category || !country) {
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

          const registrationId = `ICAIDIET26-${Date.now()}`;
          const recipientEmail = 'kvenkateshk2004@gmail.com';
          const fromEmail = process.env.SMTP_FROM_EMAIL || 'noreply@icaidiet26.tech';

          const userResult = await sendEmail({
            to: email,
            from: fromEmail,
            subject: "Registration Confirmed — ICAIDIET'26",
            html: `
              <h2>Registration Confirmation</h2>
              <p>Dear ${escapeHtml(fullName)},</p>
              <p>Thank you for registering for ICAIDIET'26! Your registration has been successfully received.</p>

              <h3>Registration Details:</h3>
              <ul>
                <li><strong>Registration ID:</strong> ${registrationId}</li>
                <li><strong>Name:</strong> ${escapeHtml(fullName)}</li>
                <li><strong>Email:</strong> ${escapeHtml(email)}</li>
                <li><strong>Institution:</strong> ${escapeHtml(institution)}</li>
                <li><strong>Category:</strong> ${escapeHtml(category)}</li>
                <li><strong>Country:</strong> ${escapeHtml(country)}</li>
              </ul>

              <h3>Conference Details:</h3>
              <ul>
                <li><strong>Conference Name:</strong> ICAIDIET'26 — International Conference on AI-Driven Innovation in Engineering & Technology</li>
                <li><strong>Dates:</strong> 20th & 21st November 2026</li>
                <li><strong>Mode:</strong> Hybrid (Online & Offline)</li>
                <li><strong>Location:</strong> Muthayammal Engineering College, Tamil Nadu, India</li>
              </ul>

              <h3>Next Steps:</h3>
              <p>Please keep your registration ID for future reference. You will receive further communications regarding the conference schedule, payment details, and conference materials.</p>

              <p>For any queries, please contact us:</p>
              <ul>
                <li>Email: icaidiet26@gmail.com</li>
                <li>Phone: +91 89034 44955 / +91 76039 23049</li>
              </ul>

              <p>Best regards,<br>ICAIDIET'26 Team</p>
              <p><small>International Conference on AI-Driven Innovation in Engineering & Technology</small></p>
            `,
          });

          const adminResult = await sendEmail({
            to: recipientEmail,
            from: fromEmail,
            subject: `New Registration: ${fullName} — ICAIDIET'26`,
            html: `
              <h2>New Registration Received</h2>
              <p><strong>Registration ID:</strong> ${registrationId}</p>

              <h3>Participant Details:</h3>
              <ul>
                <li><strong>Name:</strong> ${escapeHtml(fullName)}</li>
                <li><strong>Email:</strong> ${escapeHtml(email)}</li>
                <li><strong>Phone:</strong> ${escapeHtml(phoneNumber)}</li>
                <li><strong>Institution:</strong> ${escapeHtml(institution)}</li>
                <li><strong>Category:</strong> ${escapeHtml(category)}</li>
                <li><strong>Country:</strong> ${escapeHtml(country)}</li>
                <li><strong>Registration Time:</strong> ${new Date().toLocaleString()}</li>
              </ul>
            `,
            replyTo: email,
          });

          if (!userResult.success || !adminResult.success) {
            const failureReason = userResult.error || adminResult.error || 'Unable to send registration email.';

            console.error('Registration email failed:', failureReason);
            return Response.json(
              {
                success: false,
                statusMessage: 'Registration was received but the confirmation email could not be delivered. Please try again later or contact icaidiet26@gmail.com.',
              },
              { status: 500 },
            );
          }

          console.log('Registration submission:', {
            registrationId,
            fullName,
            email,
            phoneNumber,
            institution,
            category,
            country,
            timestamp: new Date().toISOString(),
            emailResults: {
              userEmail: userResult.success,
              adminEmail: adminResult.success,
            },
          });

          return Response.json({
            success: true,
            message: 'Registration successful! A confirmation email has been sent to your registered email address.',
            registrationId,
          });
        } catch (error) {
          console.error('Registration form error:', error);
          return Response.json(
            { success: false, statusMessage: 'Failed to process registration. Please try again later.' },
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

