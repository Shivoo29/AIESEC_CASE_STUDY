import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { jsPDF } from 'jspdf';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  fundingAmount: string;
  message: string;
}

export default function JoinPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    role: '',
    fundingAmount: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const generateCertificate = (name: string, role: string, organization: string) => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Background gradient effect
    doc.setFillColor(17, 24, 39); // gray-900
    doc.rect(0, 0, 297, 210, 'F');

    // Border
    doc.setDrawColor(255, 43, 43); // red accent
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    // Inner border
    doc.setDrawColor(0, 206, 209); // cyan accent
    doc.setLineWidth(0.5);
    doc.rect(15, 15, 267, 180);

    // Title
    doc.setFontSize(40);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATE OF PARTICIPATION', 148.5, 50, { align: 'center' });

    // Subtitle
    doc.setFontSize(16);
    doc.setTextColor(200, 200, 200);
    doc.text('Agricultural Revolution Initiative', 148.5, 65, { align: 'center' });

    // This certifies that
    doc.setFontSize(14);
    doc.setTextColor(180, 180, 180);
    doc.text('This certifies that', 148.5, 85, { align: 'center' });

    // Name
    doc.setFontSize(32);
    doc.setTextColor(255, 0, 255); // magenta accent
    doc.setFont('helvetica', 'bold');
    doc.text(name, 148.5, 105, { align: 'center' });

    // From organization
    doc.setFontSize(14);
    doc.setTextColor(180, 180, 180);
    doc.setFont('helvetica', 'normal');
    doc.text(`from ${organization}`, 148.5, 117, { align: 'center' });

    // Body text
    doc.setFontSize(12);
    doc.text(`has joined as a ${role.charAt(0).toUpperCase() + role.slice(1)} in our mission`, 148.5, 130, { align: 'center' });
    doc.text('to revolutionize plant communication through', 148.5, 140, { align: 'center' });
    doc.text('electromagnetic wave analysis and neural interface technology.', 148.5, 150, { align: 'center' });

    // Date
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    doc.setFontSize(11);
    doc.setTextColor(150, 150, 150);
    doc.text(`Issued on: ${currentDate}`, 148.5, 170, { align: 'center' });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('AIESEC-IITD × MAIT × EDC', 148.5, 185, { align: 'center' });
    doc.text('Dynamic Researchers Uniting for Great Solutions (DRUGS)', 148.5, 192, { align: 'center' });

    // Save the PDF
    return doc;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Generate certificate
      const certificate = generateCertificate(
        formData.name,
        formData.role,
        formData.organization
      );

      // Convert PDF to base64
      const pdfBase64 = certificate.output('datauristring').split(',')[1];

      // Prepare email parameters
      const emailParams = {
        to_email: formData.email,
        to_name: formData.name,
        from_name: 'Agricultural Revolution Initiative',
        organization: formData.organization,
        role: formData.role,
        funding_amount: formData.fundingAmount || 'Not specified',
        message: formData.message || 'No additional message',
        certificate_attachment: pdfBase64
      };

      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams
      );

      // Download certificate locally
      certificate.save(`Certificate_${formData.name.replace(/\s+/g, '_')}.pdf`);

      // Show success message
      toast.success('Application submitted successfully! Check your email for confirmation and certificate.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        fundingAmount: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit application. Please try again or contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-8 text-white text-center">
          Join the Agricultural Revolution
        </h1>
        <p className="text-xl text-gray-400 mb-16 text-center">
          Be part of the future of agriculture and help us revolutionize plant communication
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6 p-8 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              >
                <option value="">Select a role</option>
                <option value="researcher">Researcher</option>
                <option value="farmer">Farmer</option>
                <option value="investor">Investor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-300 mb-2">
                Funding Amount (Optional)
              </label>
              <input
                type="number"
                id="fundingAmount"
                name="fundingAmount"
                value={formData.fundingAmount}
                onChange={handleChange}
                placeholder="Enter amount in USD"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                placeholder="Tell us how you'd like to contribute..."
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            type="submit"
            disabled={isLoading}
            className={`w-full px-8 py-4 rounded-full bg-neon-magenta/20 text-neon-magenta border border-neon-magenta hover:bg-neon-magenta/30 transition-colors flex items-center justify-center gap-2 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              'Submit Application'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}