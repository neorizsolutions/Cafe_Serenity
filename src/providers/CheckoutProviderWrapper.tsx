'use client';

import React from 'react';
import { CheckoutProvider } from '@/context/CheckoutContext';
import CheckoutModal from '@/components/checkout/CheckoutModal';

export default function CheckoutProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutProvider>
      {children}
      <CheckoutModal />
    </CheckoutProvider>
  );
}
