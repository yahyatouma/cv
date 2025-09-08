"use client";
import React from 'react';

export function FloatingWhatsApp({ phone, message = 'Hallo! Ich interessiere mich.' }: { phone: string; message?: string }) {
  if (!phone) return null;
  const cleaned = phone.replace(/\D/g, '');
  const href = `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
  return (
    <a className="wa-fab" href={href} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 3.9A10 10 0 0 0 3.4 17.7L2 22l4.4-1.2A10 10 0 1 0 20 3.9ZM12 20a8 8 0 0 1-4-.9l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 20Zm4.6-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.9 1-.2.2-.3.2-.6.1s-1.1-.4-2-1.2a7.6 7.6 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.6l.4-.5c.1-.2.1-.3.2-.5s0-.3 0-.5 0-.5-.2-.7c-.2-.2-.6-.2-.8-.2h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4c.2.3 2.3 3.4 5.6 4.6.8.3 1.5.5 2 .6.8.2 1.5.2 2 .1.6-.1 1.4-.6 1.6-1.2.2-.6.2-1.2.2-1.2 0-.2-.1-.3-.3-.4Z"/>
      </svg>
    </a>
  );
}
