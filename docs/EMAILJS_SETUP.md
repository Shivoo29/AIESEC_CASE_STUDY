# EmailJS Setup Guide

This project uses EmailJS for sending emails with certificate attachments. Follow these steps to set up EmailJS for your application.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Navigate to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your provider
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template structure:

### Template Configuration

**Template Name:** `Agricultural Revolution Registration`

**Subject:** `Welcome to Agricultural Revolution Initiative - {{to_name}}`

**Content:**
```
Hello {{to_name}},

Thank you for joining the Agricultural Revolution Initiative!

Your Registration Details:
- Name: {{to_name}}
- Organization: {{organization}}
- Role: {{role}}
- Funding Amount: {{funding_amount}}
- Message: {{message}}

We're excited to have you on board as part of our mission to revolutionize plant communication through electromagnetic wave analysis and neural interface technology.

Your certificate of participation is attached to this email.

Best regards,
The Agricultural Revolution Team
AIESEC-IITD × MAIT × EDC

---
Dynamic Researchers Uniting for Great Solutions (DRUGS)
```

4. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## Step 6: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the Join page (`/join`)
3. Fill out the registration form
4. Submit and check:
   - Email received in inbox
   - Certificate PDF attached
   - All template variables populated correctly

## Troubleshooting

### Common Issues

**Error: "Service ID is required"**
- Ensure your `.env` file has the correct `VITE_EMAILJS_SERVICE_ID`
- Restart your dev server after changing `.env` files

**Error: "Template not found"**
- Double-check your `VITE_EMAILJS_TEMPLATE_ID`
- Ensure the template is saved and published in EmailJS

**Emails not sending**
- Check your EmailJS dashboard for quota limits (300 emails/month on free plan)
- Verify email service authentication hasn't expired
- Check browser console for detailed error messages

**Certificate not attaching**
- EmailJS free plan supports attachments up to 500KB
- Ensure the PDF generation is working (check browser downloads)

## EmailJS Pricing

- **Free Tier**: 200 emails/month
- **Personal**: 1,000 emails/month ($7/month)
- **Professional**: 10,000 emails/month ($25/month)

For production use with high volume, consider upgrading or implementing a custom backend email service.

## Security Best Practices

1. **Never commit `.env` to git** - It's already in `.gitignore`
2. **Use environment variables** - Never hardcode credentials
3. **Enable CAPTCHA** - Add reCAPTCHA to prevent spam (optional but recommended)
4. **Set up email templates** - Don't allow arbitrary template content from client
5. **Monitor usage** - Keep track of your monthly email quota

## Alternative Backend Solutions

If you need more advanced features, consider implementing a custom backend:

- **Node.js + Nodemailer**
- **Python + Flask + SendGrid**
- **Serverless Functions** (Vercel, Netlify, AWS Lambda)

See `BACKEND_SETUP.md` for backend implementation guides.
