"use client";
import React from 'react';

interface PasswordGateProps { children: React.ReactNode }

function getEnvPassword() {
  const value = import.meta.env.VITE_SITE_PASSWORD as string | undefined;
  return (typeof value === 'string' && value.length > 0) ? value : undefined;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [input, setInput] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState('');
  const [unlocked, setUnlocked] = React.useState(false);

  React.useEffect(() => {
    const hasEnv = !!getEnvPassword();
    const persisted = sessionStorage.getItem('site:unlocked') === 'true';
    if (!hasEnv) {
      setUnlocked(true);
      return;
    }
    if (persisted) setUnlocked(true);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = getEnvPassword();
    if (!target) {
      setUnlocked(true);
      return;
    }
    if (input === target) {
      sessionStorage.setItem('site:unlocked', 'true');
      setUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  if (unlocked) return <>{children}</>;

  const hasEnv = !!getEnvPassword();

  return (
    <div className="gate-container">
      <div className="gate-card">
        <h1 className="gate-title">Enter password</h1>
        {!hasEnv && (
          <p className="gate-hint">Protection is not configured.</p>
        )}
        <form onSubmit={onSubmit} className="gate-form" autoComplete="off">
          <label htmlFor="gate-password" className="gate-label">Password</label>
          <div className="gate-input-wrap">
            <input
              id="gate-password"
              type={show ? 'text' : 'password'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="gate-input"
              required
            />
            <button
              type="button"
              className="gate-toggle"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? 'Hide password' : 'Show password'}
            >{show ? 'Hide' : 'Show'}</button>
          </div>
          {error && <p className="gate-error" role="alert">{error}</p>}
          <button type="submit" className="accent-btn gate-submit">Unlock</button>
        </form>
      </div>
    </div>
  );
}
