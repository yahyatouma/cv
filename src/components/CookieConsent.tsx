"use client";
import React from 'react';

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const ok = localStorage.getItem('cookie:accepted') === 'true';
    if (!ok) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie:accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-bar" role="dialog" aria-live="polite">
      <div className="cookie-text">Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung stimmen Sie der Verwendung von Cookies zu.</div>
      <div className="cookie-actions">
        <a className="cookie-link" href="#" onClick={(e)=>e.preventDefault()}>Datenschutzerklärung</a>
        <button className="accent-btn cookie-accept" onClick={accept}>Akzeptieren</button>
      </div>
    </div>
  );
}
