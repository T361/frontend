// components/ForgotPassword.jsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send reset link to `email`
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-card backdrop-blur-lg border-primary/20 shadow-card">
      <div className="p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Forgot Password
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Enter your email and we’ll send you a reset link
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-11 sm:h-12 text-sm sm:text-base"
            size="lg"
          >
            Send Reset Link
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={onBack}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Back to Sign In
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}

ForgotPassword.propTypes = {
  onBack: PropTypes.func.isRequired,
};
