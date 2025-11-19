# Implementation Guide - Developer Onboarding

> **Audience:** This document is for developers joining the project. It contains technical details, known issues, and implementation specifics.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Current State & Architecture](#current-state--architecture)
3. [Quick Start](#quick-start)
4. [Development Environment Setup](#development-environment-setup)
5. [Code Structure & Patterns](#code-structure--patterns)
6. [Known Issues & Bugs](#known-issues--bugs)
7. [Common Errors & Solutions](#common-errors--solutions)
8. [Feature Implementation Status](#feature-implementation-status)
9. [Testing Guide](#testing-guide)
10. [Deployment Checklist](#deployment-checklist)
11. [Contributing Guidelines](#contributing-guidelines)

---

## Project Overview

### What is this project?

**Agricultural Revolution Initiative** is a React-based web application showcasing plant communication technology through electromagnetic wave analysis. It's a case study project developed for AIESEC-IITD and MAIT collaboration.

### Tech Stack Summary

```
Frontend:  React 18 + TypeScript + Vite
Styling:   Tailwind CSS + Framer Motion
Routing:   React Router DOM v6
Email:     EmailJS (client-side email service)
PDF:       jsPDF (certificate generation)
Notifications: React Hot Toast
Charts:    Recharts
```

### Project Type

- **Frontend-only** application (no backend server)
- **Client-side email** via EmailJS (no server needed for form submission)
- **Static site** that can be deployed to any hosting platform
- **Progressive**: Can be extended with backend later (see `docs/BACKEND_SETUP.md`)

---

## Current State & Architecture

### What's Implemented ✅

1. **UI/UX (100% Complete)**
   - All pages designed and responsive
   - Smooth animations with Framer Motion
   - Modern glassmorphism design
   - Mobile-first approach

2. **Core Features (100% Complete)**
   - Video popup integration (Hero section)
   - Form submission with EmailJS
   - PDF certificate generation
   - Toast notifications
   - Error boundaries
   - 404 page
   - Loading states

3. **Data Flow**
   ```
   User fills form → Client validates
   → EmailJS sends email → jsPDF generates certificate
   → Certificate downloads → Email sent with attachment
   → Success toast notification
   ```

### What's NOT Implemented ❌

1. **Backend/Database**
   - No data persistence
   - No user authentication
   - No admin dashboard
   - No analytics storage

2. **Advanced Features**
   - No search functionality
   - No filtering/sorting
   - No user profiles
   - No real-time updates
   - No file uploads (except PDF generation)

3. **Testing**
   - No unit tests
   - No integration tests
   - No E2E tests
   - Manual testing only

### Architecture Decisions

**Why No Backend?**
- Faster development for prototype
- Lower hosting costs (static site)
- EmailJS handles email needs
- Can add backend later without major refactor

**Why EmailJS?**
- Free tier (200 emails/month)
- No server configuration needed
- Built-in email templates
- Direct browser-to-email communication

**Why jsPDF?**
- Client-side PDF generation
- No server processing needed
- Instant certificate download
- Customizable PDF design

---

## Quick Start

### Prerequisites Check

```bash
# Check Node.js version (need 18+)
node --version

# Check npm version
npm --version

# If Node < 18, install Node 18 or higher
# Use nvm (recommended): nvm install 18 && nvm use 18
```

### 5-Minute Setup

```bash
# 1. Clone repository
git clone https://github.com/Shivoo29/AIESEC_CASE_STUDY.git
cd AIESEC_CASE_STUDY

# 2. Install dependencies (takes ~2-3 minutes)
npm install

# 3. Copy environment variables
cp .env.example .env

# 4. Start development server
npm run dev

# 5. Open browser
# http://localhost:5173
```

### Without EmailJS (For Quick Testing)

The app will run without EmailJS credentials, but:
- Form submission will fail
- Email won't be sent
- Certificate will still download
- You'll see error toasts

**To test forms without EmailJS:**
- Comment out the `emailjs.send()` call in `src/pages/JoinPage.tsx:131-135`
- Keep the certificate generation working

---

## Development Environment Setup

### Required Tools

```bash
# 1. Node.js 18+ (LTS recommended)
node --version  # Should be v18.x.x or higher

# 2. npm or yarn
npm --version   # Should be 9.x.x or higher

# 3. Git
git --version   # Any recent version

# 4. Code Editor (VS Code recommended)
code --version
```

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",           // ESLint
    "esbenp.prettier-vscode",           // Prettier
    "bradlc.vscode-tailwindcss",        // Tailwind CSS IntelliSense
    "styled-components.vscode-styled-components", // CSS in JS
    "ms-vscode.vscode-typescript-next"  // TypeScript
  ]
}
```

### Environment Variables Setup

**Required Variables:**

```env
# EmailJS (REQUIRED for form submission)
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx

# Optional
VITE_YOUTUBE_VIDEO_ID=dQw4w9WgXcQ
VITE_APP_NAME=Agricultural Revolution Initiative
VITE_APP_URL=http://localhost:5173
```

**How to get EmailJS credentials:**

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up (free)
3. Add email service (Gmail/Outlook/etc.)
4. Create email template (see `docs/EMAILJS_SETUP.md`)
5. Copy Service ID, Template ID, and Public Key
6. Paste into `.env` file

**Without EmailJS:** The app runs but forms won't work.

---

## Code Structure & Patterns

### Directory Structure

```
src/
├── components/          # Reusable components
│   ├── About.tsx           # About section (3 cards)
│   ├── ErrorBoundary.tsx   # Error handling wrapper
│   ├── FeatureCard.tsx     # Reusable feature card
│   ├── Features.tsx        # Features grid
│   ├── Hero.tsx            # Hero with video popup
│   ├── Navbar.tsx          # Navigation bar
│   ├── Technology.tsx      # Tech showcase
│   └── VideoPopup.tsx      # YouTube embed modal
├── data/
│   └── team.ts             # Team member data (centralized)
├── pages/               # Full pages
│   ├── AboutPage.tsx       # Team page
│   ├── FeaturesPage.tsx    # Features page
│   ├── HomePage.tsx        # Landing (combines multiple components)
│   ├── JoinPage.tsx        # Registration form (COMPLEX)
│   ├── NotFoundPage.tsx    # 404 page
│   └── TechnologyPage.tsx  # Technology with charts
├── App.tsx              # Router + Toaster setup
├── main.tsx             # Entry point + ErrorBoundary
└── index.css            # Global Tailwind styles
```

### Component Patterns

**1. Component Organization:**

```typescript
// Standard component structure
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  // Props interface
}

export default function ComponentName({ props }: Props) {
  // State
  const [state, setState] = useState();

  // Handlers
  const handleAction = () => {
    // ...
  };

  // Render
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  );
}
```

**2. Animation Pattern:**

```typescript
// Framer Motion standard pattern
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

**3. Tailwind Pattern:**

```typescript
// Use Tailwind utility classes
className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700"

// Use custom colors from tailwind.config.js
className="text-neon-magenta hover:bg-neon-cyan/20"
```

### Key Files to Understand

#### 1. `src/pages/JoinPage.tsx` (Most Complex)

**What it does:**
- Form submission with validation
- EmailJS integration
- PDF certificate generation
- Loading states
- Error handling

**Key functions:**
```typescript
generateCertificate()  // Creates PDF using jsPDF
handleSubmit()         // Main form submission logic
handleChange()         // Form input handling
```

**Critical logic:**
```typescript
// Line 104-159: handleSubmit function
// This is where email sending and PDF generation happen
// Most likely place for errors
```

#### 2. `src/App.tsx` (Router Setup)

**What it does:**
- React Router configuration
- Toast notification setup
- Route definitions

**Routes:**
```typescript
/ → HomePage
/about → AboutPage
/features → FeaturesPage
/technology → TechnologyPage
/join → JoinPage
* → NotFoundPage (404)
```

#### 3. `src/components/Hero.tsx` (Video Integration)

**What it does:**
- Hero section
- Video popup state management
- Button click handling

**Video popup logic:**
```typescript
const [isVideoOpen, setIsVideoOpen] = useState(false);

// Button opens popup
onClick={() => setIsVideoOpen(true)}

// VideoPopup component handles display
<VideoPopup isOpen={isVideoOpen} onClose={...} videoId={...} />
```

#### 4. `src/data/team.ts` (Centralized Data)

**Why this file exists:**
- Team data was duplicated in AboutPage.tsx
- Centralized for easier updates
- Single source of truth

**Usage:**
```typescript
import { teamMembers } from '../data/team';

teamMembers.map(member => ...)
```

---

## Known Issues & Bugs

### 🐛 Current Bugs

#### 1. EmailJS Attachment Size Limit

**Issue:** EmailJS has a 500KB limit for attachments. Large certificates may fail to send.

**Location:** `src/pages/JoinPage.tsx:131-135`

**Error Message:**
```
Failed to submit application. Please try again or contact support.
```

**Solution:**
```typescript
// Compress PDF or reduce quality
const doc = new jsPDF({
  compress: true  // Add this option
});
```

**Workaround:** Certificate still downloads locally even if email fails.

---

#### 2. Environment Variables Not Loading

**Issue:** After changing `.env`, variables don't update.

**Cause:** Vite caches environment variables at build time.

**Solution:**
```bash
# Stop dev server (Ctrl+C)
# Restart dev server
npm run dev
```

**Prevention:** Always restart dev server after `.env` changes.

---

#### 3. Build Warning: Large Chunk Size

**Issue:** Build shows warning about chunks larger than 500 KB.

**Warning Message:**
```
Some chunks are larger than 500 kB after minification.
```

**Location:** `dist/assets/index-*.js` (~1.1 MB)

**Impact:** Slower initial page load on slow connections.

**Solution (TODO):**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['recharts'],
          pdf: ['jspdf'],
        },
      },
    },
  },
});
```

**Status:** Low priority - doesn't affect functionality.

---

#### 4. Console Warning: Browserslist Outdated

**Issue:** Build shows browserslist warning.

**Warning Message:**
```
Browserslist: caniuse-lite is outdated.
```

**Solution:**
```bash
npx update-browserslist-db@latest
```

**Status:** Fixed in latest build, but may reappear.

---

### ⚠️ Potential Issues (Not Yet Bugs)

#### 1. EmailJS Free Tier Limit

**Risk:** Only 200 emails/month on free tier.

**What happens when limit reached:**
- Form submissions fail
- Users get error toast
- Certificate still downloads

**Monitoring:** Check EmailJS dashboard regularly.

**Solution if limit reached:**
- Upgrade EmailJS plan ($7/month for 1000 emails)
- Implement backend with own email service

---

#### 2. No Rate Limiting on Form

**Risk:** Spam submissions possible.

**Impact:**
- Waste EmailJS quota
- Spam inbox
- No cost impact (EmailJS handles rate limiting)

**TODO:** Add client-side rate limiting
```typescript
// Suggestion: Add cooldown timer
const [lastSubmit, setLastSubmit] = useState(0);

if (Date.now() - lastSubmit < 60000) {
  toast.error('Please wait 1 minute between submissions');
  return;
}
```

---

#### 3. No Form Validation Library

**Current:** Only HTML5 validation (`required` attribute).

**Risk:**
- Email format validation weak
- No phone number validation
- No cross-field validation

**Example issue:**
```typescript
// This passes HTML5 validation but is invalid
email: "test@test"  // No TLD
```

**TODO:** Add validation library (Zod, Yup)
```typescript
import * as z from 'zod';

const schema = z.object({
  email: z.string().email(),
  // ...
});
```

---

#### 4. PDF Generation Memory Usage

**Risk:** Large PDFs can cause memory issues in browser.

**Current:** Simple text-based PDF (~50KB).

**Future risk if adding images:**
- Images increase PDF size significantly
- May hit EmailJS 500KB limit
- May cause browser to slow down

**Prevention:** Keep PDFs text-only or use compressed images.

---

## Common Errors & Solutions

### Error 1: Module Not Found

**Error:**
```bash
Error: Cannot find module 'react-hot-toast'
```

**Cause:** Dependencies not installed.

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

### Error 2: Port Already in Use

**Error:**
```bash
Port 5173 is already in use
```

**Solution:**
```bash
# Option 1: Kill process on port 5173
# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Option 2: Use different port
npm run dev -- --port 3000
```

---

### Error 3: TypeScript Errors After Pulling

**Error:**
```bash
Type 'X' is not assignable to type 'Y'
```

**Cause:** TypeScript version mismatch or outdated types.

**Solution:**
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache

# Reinstall
npm install

# Restart VS Code
# Command Palette > "TypeScript: Restart TS Server"
```

---

### Error 4: Tailwind Classes Not Working

**Symptom:** Styles not applying, classes not autocompleting.

**Cause:** Tailwind not configured properly or custom classes not defined.

**Solution:**
```bash
# 1. Check tailwind.config.js exists
cat tailwind.config.js

# 2. Restart dev server
npm run dev

# 3. Check index.css has Tailwind directives
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
```

**For custom colors:**
```typescript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'neon-magenta': '#FF00FF',
      'neon-cyan': '#00CED1',
      // ... etc
    }
  }
}
```

---

### Error 5: EmailJS "Unauthorized" Error

**Error in console:**
```
EmailJS error: Unauthorized (401)
```

**Causes:**
1. Wrong Public Key
2. Service/Template ID mismatch
3. EmailJS account not verified

**Solution:**
```bash
# 1. Check .env file
cat .env

# 2. Verify credentials match EmailJS dashboard
# https://dashboard.emailjs.com/

# 3. Restart dev server
npm run dev
```

**Debug code:**
```typescript
// Add logging to JoinPage.tsx
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

---

### Error 6: PDF Not Downloading

**Symptom:** Form submits but PDF doesn't download.

**Cause:** Browser blocking download or jsPDF error.

**Solution:**
```typescript
// Check browser console for errors
// Look for jsPDF errors

// Test PDF generation separately
const testPDF = () => {
  const doc = new jsPDF();
  doc.text('Test', 10, 10);
  doc.save('test.pdf');
};

testPDF();  // Should download immediately
```

**Browser settings:**
- Check if browser blocks automatic downloads
- Allow downloads for localhost

---

### Error 7: Framer Motion Warnings

**Warning in console:**
```
Warning: Can't perform a React state update on an unmounted component
```

**Cause:** Animation running when component unmounts.

**Solution:** Usually harmless, but to fix:
```typescript
useEffect(() => {
  // Animation logic

  return () => {
    // Cleanup
  };
}, []);
```

---

## Feature Implementation Status

### ✅ Completed Features

| Feature | Status | File | Notes |
|---------|--------|------|-------|
| Video Popup | ✅ | `Hero.tsx`, `VideoPopup.tsx` | YouTube embed |
| Form Submission | ✅ | `JoinPage.tsx` | EmailJS |
| Certificate PDF | ✅ | `JoinPage.tsx` | jsPDF |
| Email Sending | ✅ | `JoinPage.tsx` | EmailJS |
| Toast Notifications | ✅ | `App.tsx` | react-hot-toast |
| Loading States | ✅ | `JoinPage.tsx` | Spinner |
| Error Boundaries | ✅ | `ErrorBoundary.tsx`, `main.tsx` | Crash protection |
| 404 Page | ✅ | `NotFoundPage.tsx` | Custom design |
| Responsive Design | ✅ | All components | Mobile-first |
| Animations | ✅ | All components | Framer Motion |
| Data Charts | ✅ | `TechnologyPage.tsx` | Recharts |

### 🚧 Incomplete Features (Future Work)

| Feature | Priority | Complexity | Files to Create |
|---------|----------|------------|-----------------|
| Unit Tests | Medium | Medium | `*.test.tsx` |
| Backend API | Low | High | `backend/` folder |
| User Auth | Low | High | Backend required |
| Admin Dashboard | Low | High | Backend required |
| Database | Low | High | Backend required |
| Real-time Updates | Low | High | WebSockets |
| Search Functionality | Low | Medium | New component |
| Dark Mode Toggle | Low | Low | `App.tsx` |
| Multi-language | Low | High | i18n setup |

---

## Testing Guide

### Manual Testing Checklist

**Run before every PR:**

```bash
# 1. Build check
npm run build

# 2. No console errors
# Open http://localhost:5173
# Check browser console (F12)
# Should see no red errors

# 3. Test all routes
# Navigate to each page
# Check for errors

# 4. Test form
# Fill out /join form
# Submit
# Check email received (if EmailJS configured)
# Check certificate downloaded

# 5. Test responsive
# Open DevTools (F12)
# Toggle device toolbar (Ctrl+Shift+M)
# Test mobile, tablet, desktop
```

### Testing Without EmailJS

```typescript
// src/pages/JoinPage.tsx

// Comment out email sending (line 131-135)
/*
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  emailParams
);
*/

// Certificate and toasts will still work
```

### Browser Testing

**Test in:**
- Chrome (primary)
- Firefox
- Safari (if on Mac)
- Edge

**Known issues:**
- Safari sometimes blocks PDF downloads (security setting)

---

## Deployment Checklist

### Pre-Deployment

```bash
# 1. Run build
npm run build

# 2. Check build output
ls -la dist/

# 3. Test production build locally
npm run preview
# Open http://localhost:4173

# 4. Check environment variables
# Ensure all VITE_ variables are set in hosting platform

# 5. Test form submission
# Submit test form
# Verify email received
# Verify certificate downloads
```

### Environment Variables for Production

**Required in hosting platform (Vercel/Netlify/etc.):**

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
VITE_YOUTUBE_VIDEO_ID=dQw4w9WgXcQ
```

### Post-Deployment Testing

```bash
# 1. Test production URL
# Navigate to deployed site

# 2. Check all pages load
# /, /about, /features, /technology, /join

# 3. Test form submission
# Fill and submit /join form
# Verify email received

# 4. Check 404 page
# Navigate to /nonexistent-page
# Should show custom 404

# 5. Test on mobile device
# Open on real phone
# Test all functionality
```

---

## Contributing Guidelines

### Before Starting Work

1. **Pull latest code:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Check existing issues:**
   - Look for related issues on GitHub
   - Comment if you're working on it

### Code Style

**TypeScript:**
```typescript
// Use interfaces for props
interface Props {
  name: string;
}

// Use arrow functions for components
const Component = ({ name }: Props) => {
  // ...
};

// Or function declaration
function Component({ name }: Props) {
  // ...
}
```

**Naming Conventions:**
```
Components:  PascalCase (HomePage.tsx)
Functions:   camelCase (handleSubmit)
Files:       PascalCase for components, camelCase for utils
CSS Classes: kebab-case (via Tailwind)
```

**Import Order:**
```typescript
// 1. React
import React, { useState } from 'react';

// 2. Third-party
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

// 3. Local
import { teamMembers } from '../data/team';
```

### Commit Messages

**Format:**
```bash
git commit -m "type: description"

# Types:
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting
refactor: Code restructure
test:     Add tests
chore:    Maintenance
```

**Examples:**
```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve PDF download issue on Safari"
git commit -m "docs: update IMPLEMENTATION.md with new errors"
```

### Pull Request Process

1. **Test your changes:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Update documentation:**
   - Add to IMPLEMENTATION.md if fixing known issue
   - Update README.md if adding user-facing feature

3. **Create PR:**
   - Title: Clear description
   - Body: What changed and why
   - Link related issues

4. **Wait for review:**
   - Address feedback
   - Make requested changes

---

## Debugging Tips

### 1. Check Browser Console

**Always first step:**
- Press F12
- Click Console tab
- Look for red errors

**Common errors to look for:**
```
404: File not found
CORS: Cross-origin error
TypeError: Cannot read property 'X' of undefined
```

### 2. Check Network Tab

**For email issues:**
- F12 > Network tab
- Submit form
- Look for EmailJS request
- Check response status (should be 200)

### 3. Add Console Logs

**Strategic logging:**
```typescript
// At function entry
console.log('handleSubmit called', formData);

// Before API calls
console.log('Sending email...', emailParams);

// After API calls
console.log('Email sent successfully');

// In catch blocks
console.error('Error:', error);
```

### 4. React DevTools

**Install extension:**
- Chrome: React Developer Tools
- Firefox: React Developer Tools

**Usage:**
- F12 > Components tab
- Inspect component state
- Check props

### 5. Environment Variable Debug

**Check if variables load:**
```typescript
console.log('All env vars:', import.meta.env);

// Should see:
// {
//   VITE_EMAILJS_SERVICE_ID: "service_xxx",
//   ...
// }
```

**If undefined:**
- Check variable name starts with `VITE_`
- Restart dev server
- Check `.env` file exists in root

---

## Performance Tips

### Current Performance

**Lighthouse Scores (target):**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

### Optimization TODO

1. **Code Splitting:**
   ```typescript
   // Use lazy loading
   const AboutPage = lazy(() => import('./pages/AboutPage'));
   ```

2. **Image Optimization:**
   ```typescript
   // Use WebP format
   // Add loading="lazy"
   <img src="image.webp" loading="lazy" alt="..." />
   ```

3. **Bundle Size:**
   ```bash
   # Analyze bundle
   npm run build
   npx vite-bundle-visualizer
   ```

---

## Quick Reference

### Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Git
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to remote

# Troubleshooting
rm -rf node_modules package-lock.json && npm install  # Fresh install
npx update-browserslist-db@latest                     # Update browserslist
```

### File Locations

```
Form logic:          src/pages/JoinPage.tsx
Email config:        .env
Routes:              src/App.tsx
Team data:           src/data/team.ts
Styles:              src/index.css, tailwind.config.js
Build output:        dist/
Documentation:       docs/
```

### Important URLs

```
Dev Server:          http://localhost:5173
EmailJS Dashboard:   https://dashboard.emailjs.com/
Repository:          https://github.com/Shivoo29/AIESEC_CASE_STUDY
```

---

## Getting Help

### When Stuck

1. **Check this document** - Most common issues covered
2. **Check browser console** - Look for error messages
3. **Check EmailJS dashboard** - For email issues
4. **Check existing issues** - Someone may have had same problem
5. **Ask team** - Reach out to team leads

### Resources

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **jsPDF Docs:** https://github.com/parallax/jsPDF
- **React Docs:** https://react.dev/
- **Vite Docs:** https://vitejs.dev/
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/

### Contact

- **Team Lead:** Shivam Kumar Jha - 2004skj@gmail.com
- **GitHub Issues:** https://github.com/Shivoo29/AIESEC_CASE_STUDY/issues

---

## Final Notes

### Project Status: Production Ready ✅

- All features implemented
- Build succeeds
- No critical bugs
- Documentation complete
- Ready to deploy

### Next Steps for New Developers

1. Complete setup (15 minutes)
2. Read this document (30 minutes)
3. Explore codebase (1 hour)
4. Make small change and test (1 hour)
5. Deploy to Vercel (15 minutes)

**Total onboarding time: ~3 hours**

### Remember

- Always test before committing
- Check browser console for errors
- Restart dev server after `.env` changes
- Ask questions early
- Document any new issues you find

---

**Last Updated:** 2025-11-19
**Version:** 1.0.0
**Maintained by:** Team DRUGS
