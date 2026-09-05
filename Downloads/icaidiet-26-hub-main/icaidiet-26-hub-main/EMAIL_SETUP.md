# Email Configuration Guide for ICAIDIET'26

This guide explains how to set up email sending for the registration and contact forms in ICAIDIET'26.

## Quick Start

The application supports multiple email services. Choose one and configure it using environment variables.

### Supported Email Services

1. **Resend** (Recommended for serverless)
2. **SendGrid**
3. **Mailgun**
4. **SMTP** (Gmail, custom SMTP, SendGrid SMTP, Postmark SMTP, etc.)

## Option 1: Resend (Recommended)

Resend is modern, easy to use, and works great with serverless platforms.

### Setup Steps:

1. Sign up at https://resend.com
2. Get your API key from the dashboard
3. Add to your environment variables:

```bash
RESEND_API_KEY=your_resend_api_key_here
SMTP_FROM_EMAIL=noreply@icaidiet26.tech
CONTACT_EMAIL=icaidiet26@gmail.com
REGISTRATION_EMAIL=icaidiet26@gmail.com
```

## Option 2: SendGrid

SendGrid provides reliable email delivery at scale.

### Setup Steps:

1. Sign up at https://sendgrid.com
2. Generate an API key from Settings > API Keys
3. Add to your environment variables:

```bash
SENDGRID_API_KEY=your_sendgrid_api_key_here
SMTP_FROM_EMAIL=noreply@icaidiet26.tech
CONTACT_EMAIL=icaidiet26@gmail.com
REGISTRATION_EMAIL=icaidiet26@gmail.com
```

## Option 3: Mailgun

Mailgun offers excellent email infrastructure.

### Setup Steps:

1. Sign up at https://www.mailgun.com
2. Get your API Key and Domain from the dashboard
3. Add to your environment variables:

```bash
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=mail.yourdomain.com
SMTP_FROM_EMAIL=noreply@icaidiet26.tech
CONTACT_EMAIL=icaidiet26@gmail.com
REGISTRATION_EMAIL=icaidiet26.gmail.com
```

## Environment Variables Reference

### Required Variables:
- `RESEND_API_KEY` or `SENDGRID_API_KEY` or `MAILGUN_API_KEY+MAILGUN_DOMAIN` or `SMTP_HOST+SMTP_USER+SMTP_PASS` (choose one)
- `SMTP_FROM_EMAIL`: Sender email address (e.g., `noreply@icaidiet26.tech`)
- `CONTACT_EMAIL`: Admin email for contact form submissions (e.g., `icaidiet26@gmail.com`)
- `REGISTRATION_EMAIL`: Admin email for registration submissions (optional, defaults to `CONTACT_EMAIL`)

### SMTP Example:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_EMAIL=noreply@icaidiet26.tech
```

### Deployment Platforms

#### Vercel
1. Go to Settings > Environment Variables
2. Add the email service variables
3. Redeploy

#### Netlify
1. Go to Site settings > Build & deploy > Environment
2. Add the email service variables
3. Redeploy

#### Cloudflare Pages
1. Go to Settings > Environment variables
2. Add the email service variables
3. Redeploy

#### Self-hosted (Node.js)
Create a `.env` file in the project root:

```env
RESEND_API_KEY=your_api_key_here
SMTP_FROM_EMAIL=noreply@icaidiet26.tech
CONTACT_EMAIL=icaidiet26@gmail.com
REGISTRATION_EMAIL=icaidiet26@gmail.com
```

## Testing Email Functionality

### Test Contact Form:
1. Fill out the "Quick Enquiry" form
2. Submit it
3. Check your inbox for:
   - Admin notification at `CONTACT_EMAIL`
   - User confirmation at the provided email

### Test Registration Form:
1. Fill out the "Registration Form" in the Fees section
2. Submit it
3. Check your inbox for:
   - Admin notification at `REGISTRATION_EMAIL`
   - User confirmation with Registration ID

## Troubleshooting

### No emails received?
1. Check console logs: `npm run dev` and look for error messages
2. Verify environment variables are set correctly
3. Check spam/junk folder
4. Test with a different email service

### Email service specific issues:

**Resend:**
- Verify API key is correct
- Check sender email is verified in Resend dashboard
- Ensure from email matches your domain

**SendGrid:**
- Verify API key has Mail Send permission
- Check from email is valid
- Ensure domain is verified (if using custom domain)

**Mailgun:**
- Verify API key is correct
- Ensure domain is verified
- Check domain sandbox settings

## What Gets Sent

### Registration Email Flow:
1. **User receives:** Registration confirmation with Registration ID and conference details
2. **Admin receives:** New registration notification with all participant details

### Contact Form Email Flow:
1. **User receives:** Thank you message confirming receipt of enquiry
2. **Admin receives:** Full message with user reply-to address

## Security Considerations

- Never commit API keys to git
- Use environment variables for all sensitive data
- Keep API keys secret and rotate them regularly
- Use strong email credentials
- Enable SPF, DKIM, and DMARC for your sending domain

## Development Mode

If no email service is configured, emails will be logged to console. This is useful for local development.

## Support

For more information:
- Resend: https://resend.com/docs
- SendGrid: https://sendgrid.com/docs
- Mailgun: https://documentation.mailgun.com
