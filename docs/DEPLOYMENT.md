# Deployment Guide

This guide covers deploying the Agricultural Revolution Initiative project to production.

## Table of Contents

1. [Frontend Deployment](#frontend-deployment)
2. [Backend Deployment](#backend-deployment)
3. [Environment Variables](#environment-variables)
4. [Custom Domain Setup](#custom-domain-setup)
5. [CI/CD Pipeline](#cicd-pipeline)

---

## Frontend Deployment

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Built for React/Vite projects
- Automatic HTTPS
- Global CDN
- Zero configuration
- Free tier generous

**Steps:**

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via GitHub** (recommended):
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

3. **Add Environment Variables** in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_YOUTUBE_VIDEO_ID=your_video_id
     ```

4. **Deploy**:
   - Push to `main` branch
   - Vercel auto-deploys

**Using CLI:**
```bash
cd AIESEC_CASE_STUDY
vercel
# Follow prompts
```

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain
- Update DNS records as instructed

---

### Option 2: Netlify

**Steps:**

1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add environment variables in Site Settings
5. Deploy

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### Option 3: GitHub Pages

**Steps:**

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/AIESEC_CASE_STUDY/',
  // ... other config
});
```

3. Update `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings

---

## Backend Deployment

### Option 1: Railway (Recommended)

**Why Railway:**
- Easy Node.js deployment
- Free $5/month credit
- PostgreSQL/MongoDB support
- Auto-deploy from GitHub

**Steps:**

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project → Deploy from GitHub
4. Select your repository
5. Add PostgreSQL/MongoDB from Railway dashboard
6. Add environment variables:
   ```
   PORT=5000
   MONGODB_URI=<auto-filled by Railway>
   JWT_SECRET=your_secret
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-password
   FRONTEND_URL=https://your-frontend.vercel.app
   ```
7. Deploy

**Railway.toml** (optional):
```toml
[build]
  builder = "NIXPACKS"

[deploy]
  startCommand = "npm run start"
  restartPolicyType = "ON_FAILURE"
  restartPolicyMaxRetries = 10
```

---

### Option 2: Render

**Steps:**

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Build Command**: `cd backend && npm install && npm run build`
   - **Start Command**: `cd backend && npm start`
5. Add environment variables
6. Deploy

---

### Option 3: Vercel Serverless Functions

Convert your Express backend to serverless functions:

**api/registration.ts:**
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import Registration from '../backend/src/models/Registration';
import { connectDatabase } from '../backend/src/config/database';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDatabase();
    // ... your registration logic
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

---

## Environment Variables

### Production Environment Variables

**Frontend (.env.production):**
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
VITE_APP_NAME=Agricultural Revolution Initiative
VITE_APP_URL=https://your-domain.com
VITE_YOUTUBE_VIDEO_ID=your_video_id
VITE_API_URL=https://your-backend.railway.app
```

**Backend (.env.production):**
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=super_secure_secret_key_min_32_characters
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
FRONTEND_URL=https://your-domain.com
```

### Security Best Practices

1. **Never commit `.env` files**
2. **Use strong secrets** (32+ characters)
3. **Different credentials per environment**
4. **Rotate secrets regularly**
5. **Use secret management tools** (AWS Secrets Manager, HashiCorp Vault)

---

## Custom Domain Setup

### Vercel Custom Domain

1. Go to Project Settings → Domains
2. Add your domain (e.g., `agrirevolution.com`)
3. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for propagation (up to 48 hours)

### SSL Certificate

- Automatically provided by Vercel/Netlify/Railway
- Free Let's Encrypt certificates
- Auto-renewal

---

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Performance Optimization

### Build Optimization

**vite.config.ts:**
```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          animations: ['framer-motion'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
```

### Caching Strategy

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Monitoring & Analytics

### Error Tracking

**Install Sentry:**
```bash
npm install @sentry/react
```

**src/main.tsx:**
```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: import.meta.env.MODE,
});
```

### Analytics

**Google Analytics:**
```bash
npm install react-ga4
```

**Plausible Analytics** (privacy-friendly):
Add to `index.html`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Post-Deployment Checklist

- [ ] All environment variables set correctly
- [ ] HTTPS enabled and working
- [ ] Custom domain configured (if applicable)
- [ ] Email functionality tested
- [ ] Certificate generation working
- [ ] Form submission successful
- [ ] 404 page working
- [ ] Mobile responsiveness verified
- [ ] Performance metrics checked (Lighthouse)
- [ ] SEO meta tags present
- [ ] Analytics tracking working
- [ ] Error monitoring configured
- [ ] Database backups scheduled
- [ ] Domain auto-renewal enabled

---

## Rollback Procedure

### Vercel Rollback

1. Go to Deployments tab
2. Find previous successful deployment
3. Click "Promote to Production"

### Railway Rollback

1. Go to Deployments
2. Select previous deployment
3. Click "Redeploy"

---

## Troubleshooting

### Build Failures

**Check build logs** in your deployment platform
**Common issues:**
- Missing environment variables
- TypeScript errors
- Dependency conflicts

**Fix:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Runtime Errors

- Check browser console
- Check deployment logs
- Verify environment variables
- Test API endpoints with Postman

---

## Support

For deployment issues:
- Check documentation of your deployment platform
- Review this guide
- Open an issue on GitHub
- Contact the development team

**Happy Deploying! 🚀**
