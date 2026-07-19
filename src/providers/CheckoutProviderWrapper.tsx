'use client';

import React from 'react';
import { CheckoutProvider } from '@/context/CheckoutContext';

export default function CheckoutProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutProvider>
      {children}
    </CheckoutProvider>
  );
}
