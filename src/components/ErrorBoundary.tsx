import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex justify-center mb-8"
            >
              <AlertTriangle className="w-24 h-24 text-[#FF2B2B]" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2B2B] via-[#FF00FF] to-[#00CED1]">
              Oops! Something Went Wrong
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              We encountered an unexpected error. Don't worry, our team has been notified.
            </p>

            {this.state.error && (
              <div className="mb-8 p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
                <p className="text-sm text-gray-300 font-mono">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-[#FF2B2B] text-white shadow-[0_0_15px_rgba(255,43,43,0.5)] hover:shadow-[0_0_30px_rgba(255,43,43,0.8)] transition-shadow"
              >
                <RefreshCcw className="w-5 h-5" />
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gray-800 text-white border border-gray-700 hover:border-[#00CED1] transition-colors"
              >
                Go Home
              </motion.button>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
