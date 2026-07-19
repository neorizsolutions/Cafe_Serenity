'use client';

import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

interface CheckoutContextType {
  isOpen: boolean;
  selectedPlan: string;
  openCheckout: (planName?: string) => void;
  closeCheckout: () => void;
  setSelectedPlan: (planName: string) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const router = useRouter();

  const openCheckout = (planName?: string) => {
    const target = planName || 'value-box';
    setSelectedPlan(target);
    router.push(`/checkout?plan=${encodeURIComponent(target)}`);
  };

  const closeCheckout = () => {
    setIsOpen(false);
  };

  return (
    <CheckoutContext.Provider
      value={{
        isOpen,
        selectedPlan,
        openCheckout,
        closeCheckout,
        setSelectedPlan,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
