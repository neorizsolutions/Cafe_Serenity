'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, ChevronLeft, User, Phone, Mail, MapPin, 
  CreditCard, CheckCircle2, Loader2, Download, Home, ShoppingBag, 
  Utensils, Calendar, Check, ShieldAlert, Sparkles, Building, Briefcase
} from 'lucide-react';
import { useCheckout } from '@/context/CheckoutContext';
import { CONTACT_DETAILS } from '@/constants';

const PLAN_OPTIONS = [
  {
    id: 'Weight Loss Plan',
    title: 'Weight Loss Plan',
    description: 'Calorie-deficit menu formulated to burn fat and maintain muscle.',
    pricePerMeal: 199,
    badge: 'Best Seller',
    calories: '350 kcal',
    protein: '24g Prot'
  },
  {
    id: 'High Protein & Gym',
    title: 'High Protein & Gym',
    description: 'High-protein boxes to support muscle growth and recovery.',
    pricePerMeal: 249,
    badge: 'Fitness Focus',
    calories: '600 kcal',
    protein: '45g Prot'
  },
  {
    id: 'Diabetic Friendly',
    title: 'Diabetic Friendly',
    description: 'Low-glycemic meals designed to prevent insulin spikes.',
    pricePerMeal: 219,
    badge: 'Clinical Diet',
    calories: '400 kcal',
    protein: '26g Prot'
  },
  {
    id: 'Corporate Lunch',
    title: 'Corporate Lunch',
    description: 'Portion-regulated energy lunches delivered to your office desk.',
    pricePerMeal: 199,
    badge: 'Office Pack',
    calories: '450 kcal',
    protein: '30g Prot'
  }
];

const DURATION_OPTIONS = [
  { id: 'weekly', title: 'Weekly Plan', label: '7 Days Program', discountPct: 5, labelBadge: 'Save 5%' },
  { id: 'monthly', title: 'Monthly Plan', label: '30 Days Program', discountPct: 15, labelBadge: 'Best Value (15% Off)' },
  { id: 'custom', title: 'Custom Duration', label: '14 Days Target', discountPct: 10, labelBadge: '10% Off' }
];

const TIME_SLOTS = [
  { id: 'morning', label: 'Breakfast Slot (7:00 AM - 9:00 AM)' },
  { id: 'afternoon', label: 'Lunch Slot (11:30 AM - 1:30 PM)' },
  { id: 'evening', label: 'Dinner Slot (6:30 PM - 8:30 PM)' }
];

const KOCHI_AREAS = [
  'Kakkanad', 'Infopark', 'Edappally', 'Vyttila', 'Kaloor', 
  'Thrikkakara', 'Kadavanthra', 'Panampilly Nagar', 'Marine Drive', 'Palarivattom'
];

export default function CheckoutModal() {
  const { isOpen, selectedPlan, closeCheckout, setSelectedPlan } = useCheckout();

  // State fields
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState('weekly');
  const [customDays, setCustomDays] = useState(14);
  const [meals, setMeals] = useState<Record<string, boolean>>({
    breakfast: false,
    lunch: true,
    dinner: false
  });
  const [dietType, setDietType] = useState('non-veg');
  const [proteinPref, setProteinPref] = useState('normal');
  const [deliverySlot, setDeliverySlot] = useState('afternoon');

  // Customer Details Form
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Kochi',
    locality: 'Kakkanad',
    pincode: '682030',
    instructions: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Payment Screen
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [paymentState, setPaymentState] = useState<'idle' | 'processing' | 'success'>('idle');
  const [orderInfo, setOrderInfo] = useState({
    orderId: '',
    transactionId: '',
    invoiceNum: '',
    deliveryDate: ''
  });

  // Keep chosen plan state synced with provider
  useEffect(() => {
    if (selectedPlan && isOpen) {
      // Find valid option
      const exists = PLAN_OPTIONS.some(p => p.id === selectedPlan);
      if (!exists) {
        // Default to first if clicked plan is custom/not listed
        setSelectedPlan(PLAN_OPTIONS[0].id);
      }
    } else if (isOpen && !selectedPlan) {
      setSelectedPlan(PLAN_OPTIONS[0].id);
    }
  }, [selectedPlan, isOpen]);

  // Reset checkout states when opening
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setPaymentState('idle');
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Pricing calculations
  const activePlanObj = PLAN_OPTIONS.find(p => p.id === selectedPlan) || PLAN_OPTIONS[0];
  const pricePerMeal = activePlanObj.pricePerMeal;

  const totalDays = duration === 'weekly' ? 7 : duration === 'monthly' ? 30 : customDays;
  const selectedMealsCount = Object.values(meals).filter(Boolean).length;
  const totalMeals = totalDays * (selectedMealsCount || 1);

  const rawSubtotal = pricePerMeal * totalMeals;
  const activeDiscountPct = DURATION_OPTIONS.find(d => d.id === duration)?.discountPct || 0;
  const discountAmount = Math.round((rawSubtotal * activeDiscountPct) / 100);
  
  // Delivery Fee: Free for monthly, flat ₹99 for weekly/custom
  const deliveryFee = duration === 'monthly' ? 0 : 99;
  const gstAmount = Math.round((rawSubtotal - discountAmount) * 0.05); // 5% GST
  const grandTotal = rawSubtotal - discountAmount + deliveryFee + gstAmount;

  // Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Full Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,12}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.address.trim()) newErrors.address = 'Delivery Address is required';
    if (!form.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(form.pincode.trim())) {
      newErrors.pincode = 'Enter a valid 6-digit pin code (e.g. 682030)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 3 && selectedMealsCount === 0) {
      alert('Please select at least one meal time (Breakfast, Lunch, or Dinner)');
      return;
    }
    if (step === 4) {
      if (!validateForm()) return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  // Simulate payment processing
  const handlePayment = () => {
    setPaymentState('processing');
    
    // Create random details
    const orderId = `ALKP-${Math.floor(100000 + Math.random() * 900000)}-KC`;
    const transactionId = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}-KC`;
    const invoiceNum = `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Estimate delivery starting: next Monday or 2 days from now
    const delivery = new Date();
    delivery.setDate(delivery.getDate() + 2);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const deliveryDateStr = delivery.toLocaleDateString('en-US', options);

    setTimeout(() => {
      setOrderInfo({
        orderId,
        transactionId,
        invoiceNum,
        deliveryDate: deliveryDateStr
      });
      setPaymentState('success');
    }, 2000);
  };

  // Printable Dummy Invoice
  const printDummyInvoice = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Alakapuri Invoice - ${orderInfo.orderId}</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 40px; line-height: 1.5; }
            .invoice-box { max-width: 800px; margin: auto; padding: 30px; border: 1px solid #eee; box-shadow: 0 0 10px rgba(0,0,0,.05); }
            .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1e6040; padding-bottom: 20px; }
            .logo { font-size: 24px; font-weight: bold; color: #1e6040; }
            .badge { background: #d1fae5; color: #065f46; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 40px 0; }
            .section-title { font-weight: bold; color: #1e6040; border-bottom: 1px solid #eee; padding-bottom: 8px; margin-bottom: 12px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th { background: #f9fafb; text-align: left; padding: 12px; border-bottom: 2px solid #eee; }
            td { padding: 12px; border-bottom: 1px solid #eee; }
            .totals { float: right; width: 300px; margin-top: 30px; }
            .totals table td { border: none; padding: 6px 12px; }
            .grand-total { font-weight: bold; color: #1e6040; font-size: 18px; }
            .footer-note { text-align: center; color: #6b7280; font-size: 11px; margin-top: 80px; border-top: 1px dashed #ccc; padding-top: 20px; }
            @media print {
              body { padding: 0; }
              .invoice-box { border: none; box-shadow: none; }
            }
          </style>
        </head>
        <body onload="window.print()">
          <div class="invoice-box">
            <div class="header">
              <div>
                <div class="logo">ALAKAPURI HEALTHY MEALS</div>
                <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">Kochi Healthy Diet Subscription Drops</div>
              </div>
              <div class="badge">PAID</div>
            </div>
            
            <div class="details">
              <div>
                <div class="section-title">Invoice To:</div>
                <strong>${form.name}</strong><br/>
                ${form.address}<br/>
                ${form.locality}, ${form.city} - ${form.pincode}<br/>
                Tel: ${form.phone}<br/>
                Email: ${form.email}
              </div>
              <div>
                <div class="section-title">Order Info:</div>
                Invoice No: <strong>${orderInfo.invoiceNum}</strong><br/>
                Order ID: ${orderInfo.orderId}<br/>
                Transaction ID: ${orderInfo.transactionId}<br/>
                Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br/>
                Estimated Delivery Start: <strong>${orderInfo.deliveryDate}</strong>
              </div>
            </div>

            <div class="section-title">Subscription Description</div>
            <table>
              <thead>
                <tr>
                  <th>Item / Meal Plan</th>
                  <th>Duration</th>
                  <th style="text-align: center;">Meals / Day</th>
                  <th style="text-align: right;">Base Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>${activePlanObj.title}</strong><br/>
                    <span style="font-size: 11px; color:#6b7280;">Diet preference: ${dietType.toUpperCase()} (${proteinPref} protein), Delivery slot: ${deliverySlot}</span>
                  </td>
                  <td>${totalDays} Days</td>
                  <td style="text-align: center;">${selectedMealsCount} (${Object.keys(meals).filter(m => meals[m]).join(', ')})</td>
                  <td style="text-align: right;">₹${pricePerMeal} / meal</td>
                </tr>
              </tbody>
            </table>

            <div class="totals">
              <table>
                <tr>
                  <td>Subtotal:</td>
                  <td style="text-align: right;">₹${rawSubtotal}</td>
                </tr>
                <tr>
                  <td>Discount (${activeDiscountPct}%):</td>
                  <td style="text-align: right; color: #059669;">-₹${discountAmount}</td>
                </tr>
                <tr>
                  <td>Delivery Fee:</td>
                  <td style="text-align: right;">₹${deliveryFee}</td>
                </tr>
                <tr>
                  <td>GST (5%):</td>
                  <td style="text-align: right;">₹${gstAmount}</td>
                </tr>
                <tr class="grand-total">
                  <td>Grand Total:</td>
                  <td style="text-align: right;">₹${grandTotal}</td>
                </tr>
              </table>
            </div>
            
            <div style="clear: both;"></div>
            
            <div class="footer-note">
              This invoice is a dummy document generated dynamically for frontend demonstration purposes.<br/>
              No real payments were processed. Alakapuri Healthy Meals Kochi Kitchen Sourcing Team.
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={paymentState === 'processing' ? undefined : closeCheckout}
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
      />

      {/* Main Container */}
      <AnimatePresence mode="wait">
        {paymentState === 'idle' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] bg-white dark:bg-neutral-900 sm:rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
              <div>
                <h2 className="text-lg font-black text-foreground tracking-tight flex items-center gap-1.5">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Configure Your Diet Plan
                </h2>
                <p className="text-[11px] text-muted-foreground font-medium">Hygienic portion-controlled boxes delivered to your doorstep in Kochi.</p>
              </div>
              <button 
                onClick={closeCheckout} 
                className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-muted-foreground transition-colors"
                aria-label="Close Checkout"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Stepper progress */}
            <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-900 overflow-x-auto whitespace-nowrap">
              <div className="flex items-center justify-between min-w-[500px] text-xs font-bold text-muted-foreground">
                {[
                  { stepNum: 1, label: 'Plan' },
                  { stepNum: 2, label: 'Subscription' },
                  { stepNum: 3, label: 'Preferences' },
                  { stepNum: 4, label: 'Details' },
                  { stepNum: 5, label: 'Checkout' }
                ].map((s) => (
                  <div key={s.stepNum} className="flex items-center gap-2">
                    <span className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                      step >= s.stepNum 
                        ? 'bg-primary text-white scale-110 shadow-sm' 
                        : 'bg-neutral-100 dark:bg-neutral-800 text-muted-foreground'
                    }`}>
                      {step > s.stepNum ? <Check className="h-3 w-3" strokeWidth={3} /> : s.stepNum}
                    </span>
                    <span className={step === s.stepNum ? 'text-primary' : ''}>{s.label}</span>
                    {s.stepNum < 5 && (
                      <span className={`h-0.5 w-12 rounded transition-all ${
                        step > s.stepNum ? 'bg-primary' : 'bg-neutral-200 dark:bg-neutral-800'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Body Section */}
            <div className="flex-grow overflow-y-auto p-6 max-h-[50vh] sm:max-h-[60vh]">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-left mb-2">
                    <h3 className="text-sm font-black text-foreground">Select a Goal-Oriented Diet Program</h3>
                    <p className="text-xs text-muted-foreground">Prices calculated based on portion weights and active ingredients.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PLAN_OPTIONS.map((plan) => (
                      <div 
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`group relative rounded-2xl border p-4 cursor-pointer flex flex-col justify-between gap-3 transition-all duration-300 hover:border-primary/45 ${
                          selectedPlan === plan.id 
                            ? 'border-primary bg-primary/[0.02] dark:bg-primary/[0.01] shadow-sm' 
                            : 'border-neutral-200 dark:border-neutral-800 hover:shadow-sm'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="inline-flex rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider">
                              {plan.badge}
                            </span>
                            <span className="text-xs font-bold text-muted-foreground">{plan.calories} | {plan.protein}</span>
                          </div>
                          <h4 className="text-sm font-black text-foreground">{plan.title}</h4>
                          <p className="text-[11px] text-muted-foreground line-clamp-2">{plan.description}</p>
                        </div>
                        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-850 flex items-center justify-between text-xs">
                          <span className="font-bold text-foreground">₹{plan.pricePerMeal} / meal</span>
                          <span className={`h-5 w-5 rounded-full flex items-center justify-center transition-all ${
                            selectedPlan === plan.id ? 'bg-primary text-white' : 'border border-neutral-300 dark:border-neutral-700'
                          }`}>
                            {selectedPlan === plan.id && <Check className="h-3 w-3" strokeWidth={3} />}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-left">
                    <h3 className="text-sm font-black text-foreground">Select Subscription Program Duration</h3>
                    <p className="text-xs text-muted-foreground">Longer commitments lock in wholesale kitchen discounts.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {DURATION_OPTIONS.map((opt) => (
                      <div 
                        key={opt.id}
                        onClick={() => setDuration(opt.id)}
                        className={`group relative rounded-2xl border p-5 cursor-pointer flex flex-col justify-between gap-3 text-center transition-all duration-300 ${
                          duration === opt.id 
                            ? 'border-primary bg-primary/[0.02] dark:bg-primary/[0.01]' 
                            : 'border-neutral-200 dark:border-neutral-800 hover:border-primary/20'
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="inline-flex rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider">
                            {opt.labelBadge}
                          </span>
                          <h4 className="text-sm font-black text-foreground mt-2">{opt.title}</h4>
                          <p className="text-xs text-muted-foreground">{opt.label}</p>
                        </div>
                        <div className="pt-3 flex justify-center">
                          <span className={`h-5 w-5 rounded-full flex items-center justify-center transition-all ${
                            duration === opt.id ? 'bg-primary text-white' : 'border border-neutral-300 dark:border-neutral-700'
                          }`}>
                            {duration === opt.id && <Check className="h-3 w-3" strokeWidth={3} />}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {duration === 'custom' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 max-w-md mx-auto space-y-3"
                    >
                      <label className="block text-xs font-bold text-foreground">Define Custom Program Days (7 to 60 days)</label>
                      <div className="flex items-center gap-3">
                        <input 
                          type="range" 
                          min="7" 
                          max="60" 
                          value={customDays} 
                          onChange={(e) => setCustomDays(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                        />
                        <span className="text-sm font-black text-primary whitespace-nowrap">{customDays} Days</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-left">
                    <h3 className="text-sm font-black text-foreground">Configure Culinary Preferences</h3>
                    <p className="text-xs text-muted-foreground">Customize delivery slots, proteins, and daily dispatches.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Meal Times */}
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-foreground uppercase tracking-wider">Select Daily Meals</label>
                      <div className="space-y-2">
                        {['breakfast', 'lunch', 'dinner'].map((m) => (
                          <div 
                            key={m}
                            onClick={() => setMeals(prev => ({ ...prev, [m]: !prev[m] }))}
                            className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                              meals[m] 
                                ? 'border-primary bg-primary/[0.01]' 
                                : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/50'
                            }`}
                          >
                            <span className="text-xs font-black text-foreground capitalize flex items-center gap-2">
                              <Utensils className="h-3.5 w-3.5 text-primary" />
                              {m} Menu
                            </span>
                            <span className={`h-5 w-5 rounded flex items-center justify-center transition-all ${
                              meals[m] ? 'bg-primary text-white' : 'border border-neutral-350 dark:border-neutral-650'
                            }`}>
                              {meals[m] && <Check className="h-3 w-3" strokeWidth={3} />}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-5">
                      {/* Diet Type */}
                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wider">Dietary Class</label>
                        <div className="flex gap-3">
                          {['veg', 'non-veg'].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setDietType(type)}
                              className={`flex-1 py-3 text-xs font-black rounded-xl border capitalize transition-all ${
                                dietType === type 
                                  ? 'border-primary bg-primary text-white' 
                                  : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 text-foreground'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Protein Preference */}
                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wider">Protein Preference</label>
                        <select 
                          value={proteinPref} 
                          onChange={(e) => setProteinPref(e.target.value)}
                          className="w-full p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                        >
                          <option value="normal">Normal Healthy Portions</option>
                          <option value="extra">Extra Lean Protein (Chicken/Fish) (+₹30/meal)</option>
                          <option value="paneer">Paneer/Tofu Sourcing Only</option>
                        </select>
                      </div>

                      {/* Delivery Time Slot */}
                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wider">Preferred Delivery Slot</label>
                        <select
                          value={deliverySlot}
                          onChange={(e) => setDeliverySlot(e.target.value)}
                          className="w-full p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                        >
                          {TIME_SLOTS.map(t => (
                            <option key={t.id} value={t.id}>{t.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-left">
                    <h3 className="text-sm font-black text-foreground">Provide Customer Delivery Coordinates</h3>
                    <p className="text-xs text-muted-foreground">Deliveries strictly available in Kochi zones only.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/60" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full pl-9 p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      {errors.name && <span className="text-[10px] text-red-500 font-bold block">{errors.name}</span>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">WhatsApp Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/60" />
                        <input
                          type="tel"
                          placeholder="Phone Number (e.g. 9876543210)"
                          value={form.phone}
                          onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full pl-9 p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      {errors.phone && <span className="text-[10px] text-red-500 font-bold block">{errors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/60" />
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={form.email}
                          onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full pl-9 p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      {errors.email && <span className="text-[10px] text-red-500 font-bold block">{errors.email}</span>}
                    </div>

                    {/* Pincode */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">Kochi Delivery Pincode</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/60" />
                        <input
                          type="text"
                          placeholder="682030"
                          value={form.pincode}
                          onChange={(e) => setForm(prev => ({ ...prev, pincode: e.target.value }))}
                          className="w-full pl-9 p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      {errors.pincode && <span className="text-[10px] text-red-500 font-bold block">{errors.pincode}</span>}
                    </div>

                    {/* Locality Selector */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">Delivery Neighborhood</label>
                      <select
                        value={form.locality}
                        onChange={(e) => setForm(prev => ({ ...prev, locality: e.target.value }))}
                        className="w-full p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                      >
                        {KOCHI_AREAS.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>

                    {/* City (Fixed) */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">Active Hub City</label>
                      <input
                        type="text"
                        value="Kochi (Kerala)"
                        disabled
                        className="w-full p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 text-muted-foreground outline-none select-none"
                      />
                    </div>

                    {/* Address Detail */}
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">Complete Doorstep Address</label>
                      <textarea
                        placeholder="Apartment Number, Floor, Building Name, Street / Landmark details"
                        rows={2}
                        value={form.address}
                        onChange={(e) => setForm(prev => ({ ...prev, address: e.target.value }))}
                        className="w-full p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none resize-none"
                      />
                      {errors.address && <span className="text-[10px] text-red-500 font-bold block">{errors.address}</span>}
                    </div>

                    {/* Instructions */}
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="block text-xs font-bold text-foreground">Delivery Instructions (Optional)</label>
                      <input
                        type="text"
                        placeholder="E.g., Leave with guard, Ring bell, Call before delivery"
                        value={form.instructions}
                        onChange={(e) => setForm(prev => ({ ...prev, instructions: e.target.value }))}
                        className="w-full p-3 text-xs font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <div className="text-left">
                    <h3 className="text-sm font-black text-foreground">Review Summary & Complete Order</h3>
                    <p className="text-xs text-muted-foreground">Secure layout validation for demo checkout flow.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: Summary */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 space-y-4">
                        <h4 className="text-xs font-black text-foreground uppercase tracking-wider border-b border-neutral-200 dark:border-neutral-800 pb-2">Program Details</h4>
                        
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-muted-foreground block text-[10px] font-bold uppercase">Selected Plan</span>
                            <span className="font-extrabold text-foreground">{activePlanObj.title}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block text-[10px] font-bold uppercase">Duration</span>
                            <span className="font-extrabold text-foreground">{totalDays} Days ({duration.toUpperCase()})</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block text-[10px] font-bold uppercase">Preferences</span>
                            <span className="font-extrabold text-foreground capitalize">{dietType} ({proteinPref} Prot)</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block text-[10px] font-bold uppercase">Delivery Coordinates</span>
                            <span className="font-extrabold text-foreground line-clamp-1">{form.locality}, {form.city}</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-muted-foreground block text-[10px] font-bold uppercase">Active Meal Times</span>
                            <span className="font-extrabold text-foreground capitalize">
                              {Object.keys(meals).filter(k => meals[k]).join(', ')} ({totalMeals} Total Meals)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Payment Methods Selection */}
                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-foreground uppercase tracking-wider">Select Payment Channel</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {[
                            { id: 'upi', label: 'UPI / GooglePay', desc: 'Instant verification' },
                            { id: 'card', label: 'Credit Card', desc: 'Visa, MasterCard, Amex' },
                            { id: 'debit', label: 'Debit Card', desc: 'Rupay, Maestro' },
                            { id: 'netbank', label: 'Net Banking', desc: 'All Indian Banks' },
                            { id: 'wallet', label: 'Wallets', desc: 'Paytm, PhonePe' },
                            { id: 'cod', label: 'Cash on Delivery', desc: 'Pay at kitchen drop' }
                          ].map((pay) => (
                            <div 
                              key={pay.id}
                              onClick={() => setPaymentMethod(pay.id)}
                              className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                                paymentMethod === pay.id 
                                  ? 'border-primary bg-primary/[0.01]' 
                                  : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/50'
                              }`}
                            >
                              <div className="flex justify-center mb-1">
                                <CreditCard className={`h-4 w-4 ${paymentMethod === pay.id ? 'text-primary' : 'text-muted-foreground/60'}`} />
                              </div>
                              <span className="block text-[11px] font-extrabold text-foreground">{pay.label}</span>
                              <span className="block text-[9px] text-muted-foreground">{pay.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Bill Breakdown */}
                    <div className="lg:col-span-5">
                      <div className="p-5 rounded-2xl border border-primary/10 bg-primary/[0.01] dark:bg-card/30 space-y-4">
                        <h4 className="text-xs font-black text-foreground uppercase tracking-wider border-b border-neutral-200 dark:border-neutral-800 pb-2">Grand Total Bill</h4>
                        
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between text-muted-foreground">
                            <span>Subtotal ({totalMeals} meals):</span>
                            <span>₹{rawSubtotal}</span>
                          </div>
                          {discountAmount > 0 && (
                            <div className="flex justify-between text-emerald-600 font-bold">
                              <span>Promo Discount ({activeDiscountPct}%):</span>
                              <span>-₹{discountAmount}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-muted-foreground">
                            <span>Kochi Delivery drops:</span>
                            <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground border-b border-dashed border-neutral-200 dark:border-neutral-800 pb-2">
                            <span>GST (5%):</span>
                            <span>₹{gstAmount}</span>
                          </div>
                          <div className="flex justify-between text-base font-black text-foreground pt-2">
                            <span>Grand Total:</span>
                            <span className="text-primary">₹{grandTotal}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={handlePayment}
                            className="w-full py-3 bg-primary hover:bg-primary/95 text-white text-xs font-black rounded-xl shadow transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
                          >
                            <span>Place Demo Order (₹{grandTotal})</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                          <span className="block text-[9px] text-center text-muted-foreground mt-3 font-semibold">
                            🔒 SSL Encrypted Frontend Sandbox. No actual payments processed.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Actions Footer */}
            <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 flex items-center justify-between">
              <button
                onClick={handlePrevStep}
                disabled={step === 1}
                className="px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-xl text-xs font-bold text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Back
              </button>
              
              {step < 5 ? (
                <button
                  onClick={handleNextStep}
                  className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow hover:bg-primary/95 transition-all flex items-center gap-1"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <span className="text-[10px] font-bold text-muted-foreground">Review Details & Click Pay</span>
              )}
            </div>
          </motion.div>
        )}

        {/* Processing State */}
        {paymentState === 'processing' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-3xl p-8 text-center shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center gap-5 z-10 select-none"
          >
            <div className="relative">
              <div className="h-16 w-16 rounded-full border-4 border-neutral-100 dark:border-neutral-800 border-t-primary animate-spin" />
              <Loader2 className="absolute inset-0 m-auto h-6 w-6 text-primary animate-pulse" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-black text-foreground">Processing Secure Sandbox Payment</h3>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
                Contacting secure simulation server... Verifying portion allocation in Kochi active kitchen.
              </p>
            </div>
          </motion.div>
        )}

        {/* Success / Receipt / Printable Invoice Screen */}
        {paymentState === 'success' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl h-full sm:h-auto sm:max-h-[90vh] bg-white dark:bg-neutral-900 sm:rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden z-10"
          >
            <div className="p-6 overflow-y-auto max-h-[80vh] space-y-6">
              {/* Confirmed Icon */}
              <div className="flex flex-col items-center text-center gap-2 pb-2">
                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-foreground tracking-tight">Subscription Confirmed!</h3>
                <p className="text-xs text-muted-foreground">Thank you for choosing Alakapuri Healthy Meals, {form.name}!</p>
              </div>

              {/* Order Meta Data */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 text-xs">
                <div>
                  <span className="text-muted-foreground block text-[9px] font-bold uppercase">Order ID</span>
                  <strong className="font-extrabold text-foreground select-all">{orderInfo.orderId}</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[9px] font-bold uppercase">Transaction ID</span>
                  <strong className="font-extrabold text-foreground select-all">{orderInfo.transactionId}</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[9px] font-bold uppercase">Active Meal Plan</span>
                  <strong className="font-extrabold text-foreground">{activePlanObj.title}</strong>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[9px] font-bold uppercase">Delivery Start Estimate</span>
                  <strong className="font-extrabold text-primary">{orderInfo.deliveryDate}</strong>
                </div>
              </div>

              {/* Address details */}
              <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2 text-xs">
                <span className="text-muted-foreground block text-[9px] font-bold uppercase">Delivery Dispatch Address</span>
                <p className="font-extrabold text-foreground leading-relaxed">
                  {form.address}, {form.locality}, {form.city} - {form.pincode}
                </p>
                {form.instructions && (
                  <p className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1 bg-neutral-100 dark:bg-neutral-850 px-2 py-1 rounded">
                    <span>Note:</span> "{form.instructions}"
                  </p>
                )}
              </div>

              {/* Summary breakdown box */}
              <div className="p-4 rounded-2xl border border-primary/10 bg-primary/[0.01] space-y-3 text-xs">
                <span className="text-muted-foreground block text-[9px] font-bold uppercase">Subscription Receipt Details</span>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-muted-foreground">
                    <span>{totalDays} Days Program ({selectedMealsCount} meals/day)</span>
                    <span>₹{rawSubtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Promo Discount ({activeDiscountPct}%):</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <span>GST (5%):</span>
                    <span>₹{gstAmount}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground border-b border-dashed border-neutral-200 dark:border-neutral-800 pb-1.5">
                    <span>Kochi Delivery partner drops:</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-foreground pt-1.5">
                    <span>Grand Total:</span>
                    <span className="text-primary">₹{grandTotal}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions footer */}
            <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
              <button
                onClick={printDummyInvoice}
                className="w-full sm:w-auto px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-xl text-xs font-bold text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="h-4 w-4" />
                <span>Download Invoice</span>
              </button>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={closeCheckout}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-xs font-bold text-foreground rounded-xl transition-colors flex items-center justify-center gap-1"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Shop Plans</span>
                </button>
                <button
                  onClick={closeCheckout}
                  className="flex-1 sm:flex-initial px-4 py-2 bg-primary hover:bg-primary/95 text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-1"
                >
                  <Home className="h-4 w-4" />
                  <span>Go Home</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
