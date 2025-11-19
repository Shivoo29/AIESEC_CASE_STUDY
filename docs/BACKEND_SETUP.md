# Backend API Setup Guide

This guide will help you set up a custom backend for the Agricultural Revolution Initiative project. Currently, the project uses EmailJS for form submission, but you may want to implement a full backend for more control and features.

## Why Implement a Backend?

- **Database Storage**: Store user registrations, applications, and analytics
- **Authentication**: User login, JWT tokens, role-based access
- **Advanced Email**: Custom email templates, queuing, retry logic
- **File Storage**: Store certificates, profile pictures, documents
- **API Endpoints**: RESTful or GraphQL APIs for mobile apps
- **Analytics**: Track user behavior, form submissions, conversions
- **Admin Dashboard**: Manage users, applications, content

## Backend Architecture Options

### Option 1: Node.js + Express (Recommended)

**Stack:**
- Node.js + Express
- MongoDB or PostgreSQL
- Nodemailer for emails
- JWT for authentication
- Multer for file uploads

**Pros:**
- Same language as frontend (JavaScript/TypeScript)
- Large ecosystem
- Easy deployment (Vercel, Railway, Heroku)

**Cons:**
- May need more configuration for TypeScript

### Option 2: Python + FastAPI

**Stack:**
- Python + FastAPI
- PostgreSQL or MongoDB
- SendGrid/Mailgun for emails
- JWT for authentication

**Pros:**
- Clean, modern Python framework
- Automatic API documentation (Swagger)
- Great for ML/AI integration (plant analysis)

**Cons:**
- Different language from frontend
- Smaller ecosystem compared to Node.js

### Option 3: Serverless Functions

**Stack:**
- Vercel Functions / Netlify Functions
- Supabase or Firebase for database
- SendGrid for emails

**Pros:**
- No server management
- Pay-per-use pricing
- Auto-scaling

**Cons:**
- Cold start latency
- Vendor lock-in

---

## Implementation Guide: Node.js + Express Backend

### Step 1: Project Structure

Create a new `backend` folder:

```
AIESEC_CASE_STUDY/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   └── email.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   └── registrationController.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   └── Registration.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   └── registration.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   └── validation.ts
│   │   ├── utils/
│   │   │   ├── pdfGenerator.ts
│   │   │   └── emailService.ts
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
└── (existing frontend files)
```

### Step 2: Initialize Backend

```bash
# Navigate to project root
cd AIESEC_CASE_STUDY

# Create backend directory
mkdir backend
cd backend

# Initialize npm
npm init -y

# Install dependencies
npm install express cors dotenv mongoose nodemailer bcrypt jsonwebtoken
npm install -D typescript @types/express @types/cors @types/node @types/nodemailer @types/bcrypt @types/jsonwebtoken ts-node nodemon

# Initialize TypeScript
npx tsc --init
```

### Step 3: Backend Configuration Files

**backend/package.json**
```json
{
  "name": "agricultural-revolution-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

**backend/tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

**backend/.env**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agricultural_revolution
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Step 4: Core Backend Files

**backend/src/index.ts**
```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import registrationRoutes from './routes/registration';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/registration', registrationRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Connect to database and start server
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
```

**backend/src/config/database.ts**
```typescript
import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
```

**backend/src/models/Registration.ts**
```typescript
import mongoose, { Schema, Document } from 'mongoose';

interface IRegistration extends Document {
  name: string;
  email: string;
  organization: string;
  role: string;
  fundingAmount?: number;
  message?: string;
  certificateUrl?: string;
  createdAt: Date;
}

const RegistrationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  organization: { type: String, required: true },
  role: { type: String, required: true, enum: ['researcher', 'farmer', 'investor', 'other'] },
  fundingAmount: { type: Number },
  message: { type: String },
  certificateUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IRegistration>('Registration', RegistrationSchema);
```

**backend/src/controllers/registrationController.ts**
```typescript
import { Request, Response } from 'express';
import Registration from '../models/Registration';
import { generateCertificatePDF } from '../utils/pdfGenerator';
import { sendWelcomeEmail } from '../utils/emailService';

export const submitRegistration = async (req: Request, res: Response) => {
  try {
    const { name, email, organization, role, fundingAmount, message } = req.body;

    // Check if already registered
    const existing = await Registration.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create registration
    const registration = new Registration({
      name,
      email,
      organization,
      role,
      fundingAmount,
      message
    });

    await registration.save();

    // Generate certificate
    const certificatePDF = await generateCertificatePDF(name, role, organization);

    // Send welcome email with certificate
    await sendWelcomeEmail(email, name, certificatePDF);

    res.status(201).json({
      success: true,
      message: 'Registration successful! Check your email for confirmation.',
      data: registration
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
};

export const getAllRegistrations = async (req: Request, res: Response) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });
    res.json({ success: true, data: registrations });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
};
```

**backend/src/routes/registration.ts**
```typescript
import express from 'express';
import { submitRegistration, getAllRegistrations } from '../controllers/registrationController';

const router = express.Router();

router.post('/', submitRegistration);
router.get('/', getAllRegistrations);

export default router;
```

**backend/src/utils/emailService.ts**
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendWelcomeEmail = async (
  to: string,
  name: string,
  certificatePDF: Buffer
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `Welcome to Agricultural Revolution Initiative - ${name}`,
    html: `
      <h1>Welcome to Agricultural Revolution Initiative!</h1>
      <p>Dear ${name},</p>
      <p>Thank you for joining our mission to revolutionize plant communication through electromagnetic wave analysis and neural interface technology.</p>
      <p>Your certificate of participation is attached to this email.</p>
      <br>
      <p>Best regards,<br>
      The Agricultural Revolution Team<br>
      AIESEC-IITD × MAIT × EDC</p>
    `,
    attachments: [
      {
        filename: `Certificate_${name.replace(/\s+/g, '_')}.pdf`,
        content: certificatePDF,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
};
```

### Step 5: Update Frontend to Use Backend

**src/pages/JoinPage.tsx** (modify the handleSubmit function):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch('http://localhost:5000/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success('Application submitted successfully! Check your email for confirmation and certificate.');
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        fundingAmount: '',
        message: ''
      });
    } else {
      toast.error(data.error || 'Failed to submit application');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Failed to submit application. Please try again or contact support.');
  } finally {
    setIsLoading(false);
  }
};
```

### Step 6: Running the Full Stack

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

---

## Deployment

### Backend Deployment Options

1. **Railway** (Recommended)
   - Connect GitHub repo
   - Auto-deploy on push
   - Free tier available

2. **Render**
   - Free tier with auto-sleep
   - Easy setup

3. **Vercel/Netlify**
   - Serverless functions
   - Free tier

4. **AWS/Google Cloud**
   - More control
   - Pay-as-you-go

### Database Hosting

1. **MongoDB Atlas** - Free 512MB cluster
2. **Supabase** - Free PostgreSQL
3. **PlanetScale** - Free MySQL

---

## Security Checklist

- [ ] Environment variables secured
- [ ] CORS configured properly
- [ ] Input validation on all endpoints
- [ ] Rate limiting implemented
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] HTTPS in production
- [ ] JWT secret is strong and secure
- [ ] Password hashing (bcrypt)
- [ ] Error messages don't expose sensitive info

---

## Next Steps

1. Implement authentication (JWT)
2. Add admin dashboard
3. Implement role-based access control
4. Add file upload for documents
5. Implement analytics tracking
6. Add rate limiting
7. Set up monitoring (Sentry, DataDog)
8. Write API tests
9. Set up CI/CD pipeline
10. Add API documentation (Swagger)

For questions or issues, refer to the main README or open an issue on GitHub.
