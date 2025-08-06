// app/reset-password/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Eye, EyeOff } from 'lucide-react';
import './page.css';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (password && password.length < 8) {
      setError('Password must be at least 8 characters long');
    } else if (password && confirm && password !== confirm) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  }, [password, confirm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      // TODO: perform password update
      console.log('Update Password:', { password });
    }
  };

  return (
    <main className="reset-container">
      <div className="reset-header">
        <h1 className="logo">Playistan</h1>
        <span className="tagline">Football Ground Booking • Islamabad</span>
      </div>

      <Card className="reset-card">
        <div className="reset-title">
          <h2>Create New Password</h2>
          <p>Enter your new password below</p>
        </div>

        <form onSubmit={handleSubmit} className="reset-form">
          {/* New Password */}
          <div className="field">
            <label>New Password</label>
            <div className="relative">
              <Lock className="icon" />
              <Input
                type={showPass ? 'text' : 'password'}
                placeholder="Enter new password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="pl-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(v => !v)}
                className="toggle-icon"
              >
                {showPass ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="field">
            <label>Confirm Password</label>
            <div className="relative">
              <Lock className="icon" />
              <Input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm new password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                className="pl-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(v => !v)}
                className="toggle-icon"
              >
                {showConfirm ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {error && <p className="error-text">{error}</p>}

          <Button
            type="submit"
            className="w-full mt-4 update-btn"
            size="lg"
            disabled={!!error}
          >
            Update Password
          </Button>
        </form>
      </Card>

      <footer className="reset-footer">
        © 2024 Playistan. Premium football grounds in the heart of Islamabad.
      </footer>
    </main>
  );
}
