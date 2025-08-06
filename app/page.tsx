// app/page.jsx
'use client';

import { useState } from 'react';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import ForgotPassword from '@/components/ForgotPassword';
import './page.css';

export default function HomePage() {
  const [view, setView] = useState<'login' | 'signup' | 'forgot'>('login');

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      {view === 'login' && (
        <Login
          onToggleMode={() => setView('signup')}
          onForgot={() => setView('forgot')}
        />
      )}
      {view === 'signup' && (
        <Signup onToggleMode={() => setView('login')} />
      )}
      {view === 'forgot' && (
        <ForgotPassword onBack={() => setView('login')} />
      )}
    </main>
  );
}
