/**
 * Email service for sending emails from form submissions
 *
 * Supported email services:
 * 1. Resend (recommended for serverless): https://resend.com
 * 2. SendGrid: https://sendgrid.com
 * 3. Mailgun: https://www.mailgun.com
 * 4. SMTP (any email provider)
 *
 * Set one of these environment variables based on your chosen service:
 * - RESEND_API_KEY for Resend
 * - SENDGRID_API_KEY for SendGrid
 * - MAILGUN_API_KEY and MAILGUN_DOMAIN for Mailgun
 * - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS for SMTP
 */

import nodemailer from 'nodemailer';

type EmailParams = {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
};

/**
 * Send email using the configured email service
 */
export async function sendEmail(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  const { RESEND_API_KEY, SENDGRID_API_KEY, MAILGUN_API_KEY, MAILGUN_DOMAIN, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  // Try Resend first (recommended for serverless)
  if (RESEND_API_KEY) {
    return sendViaResend(params);
  }

  // Try SendGrid
  if (SENDGRID_API_KEY) {
    return sendViaSendGrid(params);
  }

  // Try Mailgun
  if (MAILGUN_API_KEY && MAILGUN_DOMAIN) {
    return sendViaMailgun(params);
  }

  // Try SMTP (works for Gmail, SendGrid SMTP, custom mail servers, etc.)
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return sendViaSmtp(params);
  }

  const errorMessage =
    'No email provider configured. Set RESEND_API_KEY, SENDGRID_API_KEY, MAILGUN_API_KEY+MAILGUN_DOMAIN, or SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS.';

  console.error('📧 Email delivery failed:', errorMessage);
  console.error('To:', params.to);
  console.error('From:', params.from);
  console.error('Subject:', params.subject);

  return {
    success: false,
    error: errorMessage,
  };
}

/**
 * Send email via Resend API
 */
async function sendViaResend(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: params.from,
        to: params.to,
        subject: params.subject,
        html: params.html,
        reply_to: params.replyTo,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        error: error.message || 'Failed to send email via Resend',
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Resend error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Send email via SendGrid API
 */
async function sendViaSendGrid(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: params.to }],
          },
        ],
        from: { email: params.from },
        subject: params.subject,
        content: [
          {
            type: 'text/html',
            value: params.html,
          },
        ],
        reply_to: params.replyTo ? { email: params.replyTo } : undefined,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return {
        success: false,
        error: `SendGrid error: ${error}`,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `SendGrid error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Send email via Mailgun API
 */
async function sendViaMailgun(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const formData = new URLSearchParams();
    formData.append('from', params.from);
    formData.append('to', params.to);
    formData.append('subject', params.subject);
    formData.append('html', params.html);
    if (params.replyTo) {
      formData.append('h:Reply-To', params.replyTo);
    }

    const response = await fetch(
      `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
        },
        body: formData,
      },
    );

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        error: `Mailgun error: ${error.message || 'Failed to send email'}`,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Mailgun error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Send email via SMTP using nodemailer.
 */
async function sendViaSmtp(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
    await transporter.sendMail({
      from: params.from,
      to: params.to,
      replyTo: params.replyTo,
      subject: params.subject,
      html: params.html,
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `SMTP error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
