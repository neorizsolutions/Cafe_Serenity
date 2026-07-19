'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronLeft, ChevronRight, User, Phone, Mail, MapPin, 
  CreditCard, CheckCircle2, Loader2, Download, Home, ShoppingBag, 
  Utensils, Calendar, Check, ShieldAlert, Sparkles, Building, Briefcase, Info,
  Flame, Award, Heart, Star, Edit, ShieldCheck
} from 'lucide-react';
import Container from '@/components/common/Container';
import Typography from '@/components/common/Typography';
import { CONTACT_DETAILS } from '@/constants';

const PLAN_OPTIONS = [
  {
    id: 'value-box',
    title: '₹69 Flagship Value Box',
    description: 'Our signature portion-controlled calorie-mapped value lunch box.',
    pricePerMeal: 69,
    badge: 'Flagship Value',
    calories: '420 kcal',
    protein: '22g Prot',
    carbs: '55g Carbs',
    fat: '12g Fat',
    isFlagship: true,
    highlights: 'RO filtered preparation, cold-pressed oils, zero food preservatives.',
    deliveryAvailability: 'Daily,Kakannad Hub & Infopark IT Corridor',
    benefits: [
      'Extremely affordable, premium kitchen parameters',
      'Portion-scaled to prevent midday work sluggishness',
      'Packed in eco-friendly biodegradable hot-lock boxes'
    ],
    reviews: [
      { author: 'Ajith K.', rating: 5, comment: 'Saves me ₹200 daily. The rice and chicken curry are clean and non-greasy!' },
      { author: 'Sneha M.', rating: 5, comment: 'Infopark desk drop is extremely punctual. Great daily lunch value.' }
    ]
  },
  {
    id: 'Weight Loss Plan',
    title: 'Weight Loss Plan',
    description: 'Calorie-deficit menu formulated to burn fat and maintain muscle.',
    pricePerMeal: 199,
    badge: 'Best Seller',
    calories: '350 kcal',
    protein: '24g Prot',
    carbs: '35g Carbs',
    fat: '10g Fat',
    highlights: 'Zero refined sugar, low carbohydrate grains, fat-burn vegetables.',
    deliveryAvailability: 'All areas in Kochi (Morning, Afternoon, Evening)',
    benefits: [
      'Dietitian-approved calorie caps (under 400 kcal)',
      'High soluble dietary fiber indexes to maintain fullness',
      'Lean protein loading to preserve skeletal muscle mass'
    ],
    reviews: [
      { author: 'Rahul R.', rating: 5, comment: 'Lost 4 kgs in three weeks. The low-carb salad choices are actually tasty!' },
      { author: 'Diya Joseph', rating: 4.8, comment: 'Excellent fiber meal schedules. Punctual delivery in Vyttila.' }
    ]
  },
  {
    id: 'High Protein & Gym',
    title: 'High Protein & Gym',
    description: 'High-protein boxes to support muscle growth and recovery.',
    pricePerMeal: 249,
    badge: 'Fitness Focus',
    calories: '600 kcal',
    protein: '45g Prot',
    carbs: '65g Carbs',
    fat: '14g Fat',
    highlights: 'Premium chicken breast cuts, egg-white loaded macros, complex carbs.',
    deliveryAvailability: 'All Kochi limits (Morning & Evening drops available)',
    benefits: [
      'Optimal recovery muscle load (45g protein minimum)',
      'Cooked with minimum cold-pressed oils and local whole grains',
      'Ideal post-workout or pre-workout diet configurations'
    ],
    reviews: [
      { author: 'Sreejith P.', rating: 5, comment: 'Perfect protein loading for gym cycles. Zero prep work required.' },
      { author: 'Abhishek K.', rating: 5, comment: 'Egg whites and clean chicken portions are perfectly scaled.' }
    ]
  },
  {
    id: 'Diabetic Friendly',
    title: 'Diabetic Friendly',
    description: 'Low-glycemic meals designed to prevent insulin spikes.',
    pricePerMeal: 219,
    badge: 'Clinical Diet',
    calories: '400 kcal',
    protein: '26g Prot',
    carbs: '40g Carbs',
    fat: '11g Fat',
    highlights: 'Complex whole grains, heart-friendly pulses, low insulin indexes.',
    deliveryAvailability: 'All Kochi limits (Afternoon and Dinner deliveries)',
    benefits: [
      'Strictly excludes high glycemic items and processed flour',
      'Slow-digesting carbohydrate sources to stabilize blood glucose',
      'Clinically checked by our local medical advisors'
    ],
    reviews: [
      { author: 'Valsala Devi', rating: 5, comment: 'My post-prandial blood sugar has remained stable since starting Alakapuri.' },
      { author: 'Thomas Kurian', rating: 4.9, comment: 'Healthy diabetic alternative. Hearty meals without insulin spikes.' }
    ]
  },
  {
    id: 'Corporate Lunch',
    title: 'Corporate Lunch',
    description: 'Portion-regulated energy lunches delivered to your office desk.',
    pricePerMeal: 199,
    badge: 'Office Pack',
    calories: '450 kcal',
    protein: '30g Prot',
    carbs: '50g Carbs',
    fat: '12g Fat',
    highlights: 'Energy boosting local curries, portioned carbs, executive packaging.',
    deliveryAvailability: 'Infopark, Kakkanad Civil Station, Kaloor, Kadavanthra',
    benefits: [
      'Delivered straight to desk hot-lock packaging systems',
      'Special team billings and easy subscription pauses',
      'Boosts brain stamina and removes heavy carb afternoon fatigue'
    ],
    reviews: [
      { author: 'Nikhil G.', rating: 4.8, comment: 'Punctual desk delivery at Infopark. The corporate bulk setup is very smooth.' },
      { author: 'Anjali V.', rating: 5, comment: 'Clean ingredients. Perfect lunch pack for long IT shifts.' }
    ]
  },
  {
    id: 'Family Meal Plan',
    title: 'Family Meal Plan',
    description: 'Wholesome, home-style dinner boxes for the entire household.',
    pricePerMeal: 179,
    badge: 'Household Fit',
    calories: '550 kcal',
    protein: '28g Prot',
    carbs: '60g Carbs',
    fat: '13g Fat',
    highlights: 'Varied daily vegetable menus, home-style cooking, kid-friendly spices.',
    deliveryAvailability: 'All Kakkanad, Edappally, and Vyttila neighborhoods',
    benefits: [
      'Saves cooking prep time for working couple families',
      'Diverse daily menu calendar (curries, local grains, fresh salads)',
      'FSSAI certified clean cooking guidelines'
    ],
    reviews: [
      { author: 'Meera & family', rating: 5, comment: ' Dinner problem solved! Extremely healthy and kids love the taste too.' },
      { author: 'George V.', rating: 4.9, comment: 'Wholesome homestyle dinners. Very convenient subscription rollover.' }
    ]
  },
  {
    id: 'Balanced Diet Box',
    title: 'Balanced Diet Box',
    description: 'The perfect everyday healthy box designed for active families and IT professionals.',
    pricePerMeal: 169,
    badge: 'Stable Energy',
    calories: '450 kcal',
    protein: '26g Prot',
    carbs: '55g Carbs',
    fat: '12g Fat',
    highlights: 'RO filtered prep, low sodium, whole wheat and local grains.',
    deliveryAvailability: 'All Kochi areas (Breakfast, Lunch, Dinner drops)',
    benefits: [
      'Excellent everyday energy balance, home-style clean spices',
      'FSSAI certified preparation standards',
      'Unified corporate group discount billing paths'
    ],
    reviews: [
      { author: 'Binu S.', rating: 5, comment: 'Balanced Diet boxes are perfect for daily lunch. Feel energetic all afternoon.' },
      { author: 'Lekshmi Nair', rating: 4.9, comment: 'Wholesome everyday box. Very high quality local coconut oil prep.' }
    ]
  },
  {
    id: 'Kids Meal Plan',
    title: 'Kids Meal Plan',
    description: 'Wholesome, child-friendly nutrition boxes formulated to keep kids active and healthy.',
    pricePerMeal: 149,
    badge: 'Growth & Vitality',
    calories: '400 kcal',
    protein: '20g Prot',
    carbs: '50g Carbs',
    fat: '10g Fat',
    highlights: 'Mild local seasonings, zero chemical additives, high organic dairy calcium.',
    deliveryAvailability: 'All Kakkanad, Edappally, and Vyttila school drop routes',
    benefits: [
      'Fortified with child nutrition vitamins',
      'Easy finger-food style items, zero refined sugars',
      'FSSAI verified pure ingredient parameters'
    ],
    reviews: [
      { author: 'Ranjini H.', rating: 5, comment: 'My kids love the mild chicken wraps and fruit cups. A life saver for mornings!' },
      { author: 'Devika M.', rating: 4.8, comment: 'Healthy snacks and portioned meals for school. Highly recommended.' }
    ]
  },
  {
    id: 'Custom Plan',
    title: 'Custom Plan',
    description: 'Tailored dietary plans fully customized by our lead clinical nutritionists.',
    pricePerMeal: 299,
    badge: 'Clinical Tailored',
    calories: 'Dynamic kcal',
    protein: 'Dynamic Prot',
    carbs: 'Dynamic Carbs',
    fat: 'Dynamic Fat',
    highlights: 'Consultation callback within 2 hours, custom calorie mapping, customized macros.',
    deliveryAvailability: 'All active Kochi neighborhoods',
    benefits: [
      '1-on-1 WhatsApp dietitian review cycles',
      'Customized drop timing brackets',
      'Flexible menu modifications'
    ],
    reviews: [
      { author: 'Dr. Suresh Kumar', rating: 5, comment: 'Custom calorie mapping worked perfectly. Highly recommend their dietitian consult.' },
      { author: 'Fiona G.', rating: 5, comment: 'Clean proteins and carbs measured down to the gram. Absolutely excellent.' }
    ]
  }
];

const DURATION_OPTIONS = [
  { id: 'one-time', title: 'One Day Trial', label: 'Single Day Box Drop', discountPct: 0, labelBadge: 'No Contract' },
  { id: 'weekly', title: 'Weekly Plan', label: '7 Days Program (Mon - Sun)', discountPct: 5, labelBadge: 'Save 5%' },
  { id: 'monthly', title: 'Monthly Plan', label: '30 Days Program (Mon - Sun)', discountPct: 15, labelBadge: 'Best Value (15% Off)' }
];

const KOCHI_AREAS = [
  'Kakkanad', 'Infopark', 'Edappally', 'Vyttila', 'Kaloor', 
  'Thrikkakara', 'Kadavanthra', 'Panampilly Nagar', 'Marine Drive', 'Palarivattom'
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryPlan = searchParams.get('plan') || 'value-box';

  // STEPS STATE: 1: Choose/Details, 2: Customize, 3: Address, 4: Review, 5: Payment, 6: Confirmed
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPlanId, setSelectedPlanId] = useState('value-box');
  
  useEffect(() => {
    const planMatch = PLAN_OPTIONS.find(
      p => p.id.toLowerCase() === queryPlan.toLowerCase() || 
           p.title.toLowerCase() === queryPlan.toLowerCase() ||
           p.title.toLowerCase().includes(queryPlan.toLowerCase()) ||
           queryPlan.toLowerCase().includes(p.title.toLowerCase()) ||
           (queryPlan.toLowerCase().includes('weight') && p.id === 'Weight Loss Plan') ||
           (queryPlan.toLowerCase().includes('protein') && p.id === 'High Protein & Gym') ||
           (queryPlan.toLowerCase().includes('diabetic') && p.id === 'Diabetic Friendly') ||
           (queryPlan.toLowerCase().includes('corporate') && p.id === 'Corporate Lunch') ||
           (queryPlan.toLowerCase().includes('family') && p.id === 'Family Meal Plan') ||
           (queryPlan.toLowerCase().includes('balanced') && p.id === 'Balanced Diet Box') ||
           (queryPlan.toLowerCase().includes('kids') && p.id === 'Kids Meal Plan') ||
           (queryPlan.toLowerCase().includes('custom') && p.id === 'Custom Plan')
    );
    if (planMatch) {
      setSelectedPlanId(planMatch.id);
    }
  }, [queryPlan]);

  const activePlanObj = PLAN_OPTIONS.find(p => p.id === selectedPlanId) || PLAN_OPTIONS[0];

  // STEP 2: Customization state
  const [duration, setDuration] = useState('one-time');
  const [quantity, setQuantity] = useState(1);
  const [meals, setMeals] = useState<Record<string, boolean>>({
    breakfast: false,
    lunch: true,
    dinner: false
  });
  const [dietType, setDietType] = useState('non-veg');
  const [proteinPref, setProteinPref] = useState('normal');
  const [deliverySlot, setDeliverySlot] = useState('afternoon');
  const [deliveryDays, setDeliveryDays] = useState('all'); // all, weekdays
  const [specialNotes, setSpecialNotes] = useState('');

  // Sync default duration based on product
  useEffect(() => {
    if (activePlanObj.isFlagship) {
      setDuration('one-time');
      setMeals({ breakfast: false, lunch: true, dinner: false });
    } else {
      setDuration('weekly');
      setMeals({ breakfast: false, lunch: true, dinner: false });
    }
  }, [selectedPlanId]);

  // STEP 3: Customer Details Address state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    houseFlat: '',
    street: '',
    area: 'Kakkanad',
    city: 'Kochi',
    pincode: '682030',
    landmark: '',
    deliveryInstructions: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // STEP 5: Payment simulation state
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [paymentForm, setPaymentForm] = useState({
    cardNum: '',
    cardExpiry: '',
    cardCvv: '',
    upiId: '',
    netBank: 'SBI',
    walletType: 'Paytm'
  });
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({});
  const [paymentState, setPaymentState] = useState<'idle' | 'processing' | 'verifying' | 'success'>('idle');
  const [orderInfo, setOrderInfo] = useState({
    orderId: '',
    transactionId: '',
    invoiceNum: '',
    deliveryDate: ''
  });

  // Dynamic calculations
  const pricePerMeal = activePlanObj.pricePerMeal;
  const totalDays = duration === 'one-time' ? 1 : duration === 'weekly' ? 7 : 30;
  const selectedMealsCount = Object.values(meals).filter(Boolean).length;
  const totalMeals = totalDays * (selectedMealsCount || 1) * quantity;
  
  const rawSubtotal = pricePerMeal * totalMeals;
  const activeDiscountPct = DURATION_OPTIONS.find(d => d.id === duration)?.discountPct || 0;
  const discountAmount = Math.round((rawSubtotal * activeDiscountPct) / 100);
  
  // Delivery Fee: Free for monthly subscriptions, ₹30 for one day trial, ₹99 for weekly subscriptions
  const deliveryFee = duration === 'monthly' ? 0 : (duration === 'one-time' ? 30 : 99);
  const gstAmount = Math.round((rawSubtotal - discountAmount) * 0.05); // 5% GST
  const grandTotal = rawSubtotal - discountAmount + deliveryFee + gstAmount;

  // Navigation handlers
  const handleNextStep = () => {
    if (activeStep === 1) {
      setActiveStep(2);
      window.scrollTo(0, 0);
    } else if (activeStep === 2) {
      if (Object.values(meals).filter(Boolean).length === 0) {
        alert('Please select at least one meal type (Breakfast, Lunch, or Dinner)');
        return;
      }
      setActiveStep(3);
      window.scrollTo(0, 0);
    } else if (activeStep === 3) {
      if (!validateAddressForm()) return;
      setActiveStep(4);
      window.scrollTo(0, 0);
    } else if (activeStep === 4) {
      setActiveStep(5);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    setActiveStep(prev => Math.max(1, prev - 1));
    window.scrollTo(0, 0);
  };

  // Address validation
  const validateAddressForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Full Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,12}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.houseFlat.trim()) newErrors.houseFlat = 'House / Flat Details are required';
    if (!form.street.trim()) newErrors.street = 'Street Name is required';
    if (!form.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(form.pincode.trim())) {
      newErrors.pincode = 'Enter a valid 6-digit pin code';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Payment validation
  const validatePaymentForm = () => {
    const newErrors: Record<string, string> = {};
    if (paymentMethod === 'card') {
      if (!paymentForm.cardNum.trim()) newErrors.cardNum = 'Card number is required';
      else if (!/^[0-9]{16}$/.test(paymentForm.cardNum.replace(/\s+/g, ''))) newErrors.cardNum = 'Enter a valid 16-digit card number';
      
      if (!paymentForm.cardExpiry.trim()) newErrors.cardExpiry = 'Expiry Date is required';
      else if (!/^[0-9]{2}\/[0-9]{2}$/.test(paymentForm.cardExpiry)) newErrors.cardExpiry = 'Format must be MM/YY';
      
      if (!paymentForm.cardCvv.trim()) newErrors.cardCvv = 'CVV is required';
      else if (!/^[0-9]{3}$/.test(paymentForm.cardCvv)) newErrors.cardCvv = 'Must be 3 digits';
    } else if (paymentMethod === 'upi') {
      if (!paymentForm.upiId.trim()) newErrors.upiId = 'UPI ID is required';
      else if (!/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(paymentForm.upiId)) newErrors.upiId = 'Enter a valid UPI ID (e.g. user@okhdfcbank)';
    }
    setPaymentErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Place payment
  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePaymentForm()) return;

    setPaymentState('processing');

    // Simulated stepper payment stages
    setTimeout(() => {
      setPaymentState('verifying');
      
      setTimeout(() => {
        const orderId = `ALKP-${Math.floor(100000 + Math.random() * 900000)}-KC`;
        const transactionId = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}-KC`;
        const invoiceNum = `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

        const delivery = new Date();
        delivery.setDate(delivery.getDate() + (delivery.getHours() >= 18 ? 2 : 1));
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        
        setOrderInfo({
          orderId,
          transactionId,
          invoiceNum,
          deliveryDate: delivery.toLocaleDateString('en-US', options)
        });
        setPaymentState('success');
        setActiveStep(6);
        window.scrollTo(0, 0);
      }, 1500);
    }, 1500);
  };

  // Invoice print view
  const printInvoiceWindow = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Alakapuri Subscription Invoice - ${orderInfo.orderId}</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 45px; line-height: 1.5; }
            .invoice-box { max-width: 800px; margin: auto; padding: 30px; border: 1px solid #eee; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,.04); position: relative; }
            .demo-watermark { position: absolute; top: 120px; left: 50px; transform: rotate(-15deg); font-size: 40px; font-weight: 900; color: rgba(16, 185, 129, 0.15); border: 4px solid rgba(16, 185, 129, 0.15); padding: 10px 20px; border-radius: 8px; text-transform: uppercase; letter-spacing: 2px; }
            .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #10b981; padding-bottom: 20px; }
            .logo { font-size: 24px; font-weight: bold; color: #047857; }
            .badge { background: #d1fae5; color: #065f46; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 40px 0; }
            .section-title { font-weight: bold; color: #047857; border-bottom: 1px solid #eee; padding-bottom: 8px; margin-bottom: 12px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th { background: #f9fafb; text-align: left; padding: 12px; border-bottom: 2px solid #eee; }
            td { padding: 12px; border-bottom: 1px solid #eee; }
            .totals { float: right; width: 300px; margin-top: 30px; }
            .totals table td { border: none; padding: 6px 12px; }
            .grand-total { font-weight: bold; color: #047857; font-size: 18px; }
            .demo-banner { background: #fffbeb; border: 1px solid #fef3c7; color: #92400e; padding: 12px; border-radius: 8px; font-size: 11px; margin-bottom: 25px; text-align: center; }
            .footer-note { text-align: center; color: #6b7280; font-size: 11px; margin-top: 80px; border-top: 1px dashed #ccc; padding-top: 20px; }
            @media print {
              body { padding: 0; }
              .invoice-box { border: none; box-shadow: none; }
            }
          </style>
        </head>
        <body onload="window.print()">
          <div class="invoice-box">
            <div class="demo-watermark">Demo Order</div>
            
            <div class="demo-banner">
              <strong>DEMONSTRATION ONLY</strong><br/>
              This is a simulated order invoice. No financial transaction occurred, and no meals will be delivered.
            </div>

            <div class="header">
              <div>
                <div class="logo">ALAKAPURI HEALTHY MEALS</div>
                <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">Kochi Healthy Diet Subscription Drops</div>
              </div>
              <div class="badge">${paymentMethod === 'cod' ? 'PAY ON DELIVERY' : 'PAID'}</div>
            </div>
            
            <div class="details">
              <div>
                <div class="section-title">Delivery Coordinates:</div>
                <strong>${form.name}</strong><br/>
                ${form.houseFlat}, ${form.street}<br/>
                ${form.area}, ${form.city} - ${form.pincode}<br/>
                ${form.landmark ? `Landmark: ${form.landmark}<br/>` : ''}
                Tel: ${form.phone}<br/>
                Email: ${form.email}
              </div>
              <div>
                <div class="section-title">Order Info:</div>
                Invoice No: <strong>${orderInfo.invoiceNum}</strong><br/>
                Order ID: ${orderInfo.orderId}<br/>
                Transaction ID: ${paymentMethod === 'cod' ? 'COD-CHECKOUT' : orderInfo.transactionId}<br/>
                Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br/>
                Estimated Delivery Start: <strong>${orderInfo.deliveryDate}</strong>
              </div>
            </div>

            <div class="section-title">Subscription Description</div>
            <table>
              <thead>
                <tr>
                  <th>Meal Plan Details</th>
                  <th>Duration</th>
                  <th style="text-align: center;">Qty</th>
                  <th style="text-align: right;">Base Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>${activePlanObj.title}</strong><br/>
                    <span style="font-size: 11px; color:#6b7280;">Diet: ${dietType.toUpperCase()} (${proteinPref} protein), Time: ${deliverySlot}, Day: ${deliveryDays === 'weekdays' ? 'Weekdays' : 'All Days'}</span>
                  </td>
                  <td>${duration === 'one-time' ? 'One Day Trial' : duration === 'weekly' ? 'Weekly subscription (7 Days)' : 'Monthly subscription (30 Days)'}</td>
                  <td style="text-align: center;">${quantity}</td>
                  <td style="text-align: right;">₹${pricePerMeal} / meal</td>
                </tr>
              </tbody>
            </table>

            <div class="totals">
              <table>
                <tr>
                  <td>Subtotal (${totalMeals} meals):</td>
                  <td style="text-align: right;">₹${rawSubtotal}</td>
                </tr>
                ${discountAmount > 0 ? `
                <tr>
                  <td style="color: #047857;">Discount (${activeDiscountPct}%):</td>
                  <td style="text-align: right; color: #047857;">-₹${discountAmount}</td>
                </tr>` : ''}
                <tr>
                  <td>Delivery Fee:</td>
                  <td style="text-align: right;">${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</td>
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
              Thank you for choosing Alakapuri Healthy Meals. This invoice represents a simulation test.<br/>
              Support Helpline: ${CONTACT_DETAILS.phone} | Email: ${CONTACT_DETAILS.email}
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Breadcrumbs helper
  const getBreadcrumbLabel = () => {
    switch(activeStep) {
      case 1: return '1. Plan Details';
      case 2: return '2. Customizations';
      case 3: return '3. Address Details';
      case 4: return '4. Review Order';
      case 5: return '5. Secure Payment';
      case 6: return '6. Confirmed';
      default: return '';
    }
  };

  // Steps indicators
  const stepsList = [
    { label: 'Choose', step: 1 },
    { label: 'Customize', step: 2 },
    { label: 'Address', step: 3 },
    { label: 'Review', step: 4 },
    { label: 'Pay', step: 5 },
    { label: 'Confirm', step: 6 }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 min-h-[600px] animate-fade-in">
      
      {/* 1. Progress stepper header */}
      <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
        
        {/* Navigation Breadcrumb & Back */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-bold">{getBreadcrumbLabel()}</span>
          </div>

          {activeStep > 1 && activeStep < 6 && (
            <button
              onClick={handlePrevStep}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none self-start"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
              <span>Back to Step {activeStep - 1}</span>
            </button>
          )}
        </div>

        {/* Stepper bubbles & Progress Bar */}
        <div className="pt-2">
          {/* Progress Bar background */}
          <div className="relative h-1.5 w-full bg-muted rounded-full overflow-hidden mb-6">
            <div 
              className="absolute left-0 top-0 h-full bg-primary transition-all duration-500 rounded-full"
              style={{ width: `${((activeStep - 1) / (stepsList.length - 1)) * 100}%` }}
            />
          </div>

          <div className="flex justify-between text-center select-none">
            {stepsList.map(s => (
              <div 
                key={s.step} 
                className={`flex-1 space-y-2 flex flex-col items-center ${activeStep >= s.step ? 'text-primary' : 'text-muted-foreground/60'}`}
              >
                <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-black border transition-all ${
                  activeStep === s.step 
                    ? 'border-primary bg-primary text-primary-foreground scale-110 shadow-sm'
                    : activeStep > s.step 
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background'
                }`}>
                  {activeStep > s.step ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : s.step}
                </div>
                <span className="hidden sm:block text-[10px] uppercase font-bold tracking-widest leading-none">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Step switch router */}
      {/* STEP 1: CHOOSE PLAN DETAILS */}
      {activeStep === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Plan Detail Info card */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="space-y-1.5">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[9px] font-black uppercase text-primary tracking-widest border border-primary/20">
                  {activePlanObj.badge}
                </span>
                <Typography variant="h1" className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
                  {activePlanObj.title}
                </Typography>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold max-w-xl">
                  {activePlanObj.description}
                </p>
              </div>

              <div className="text-left sm:text-right border-l sm:border-l-0 sm:border-r border-border/60 pl-4 sm:pl-0 sm:pr-4">
                <span className="block text-[10px] text-muted-foreground font-black uppercase tracking-widest">Base Rate</span>
                <span className="text-2xl font-black text-primary">₹{activePlanObj.pricePerMeal}</span>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider"> / Meal</span>
              </div>
            </div>

            {/* Nutrition Highlights grid */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground flex items-center gap-2">
                <Flame className="h-4.5 w-4.5 text-primary" />
                <span>Nutrition Highlights (Per Box Portion)</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-bold">
                <div className="p-4 rounded-2xl border border-border bg-muted/30 space-y-1">
                  <span className="block text-muted-foreground text-[9px] uppercase tracking-widest">Energy</span>
                  <span className="block text-foreground text-sm font-black tracking-tight">{activePlanObj.calories}</span>
                </div>
                <div className="p-4 rounded-2xl border border-border bg-muted/30 space-y-1">
                  <span className="block text-muted-foreground text-[9px] uppercase tracking-widest">Protein</span>
                  <span className="block text-foreground text-sm font-black tracking-tight">{activePlanObj.protein}</span>
                </div>
                <div className="p-4 rounded-2xl border border-border bg-muted/30 space-y-1">
                  <span className="block text-muted-foreground text-[9px] uppercase tracking-widest">Carbohydrates</span>
                  <span className="block text-foreground text-sm font-black tracking-tight">{activePlanObj.carbs}</span>
                </div>
                <div className="p-4 rounded-2xl border border-border bg-muted/30 space-y-1">
                  <span className="block text-muted-foreground text-[9px] uppercase tracking-widest">Lipids/Fat</span>
                  <span className="block text-foreground text-sm font-black tracking-tight">{activePlanObj.fat}</span>
                </div>
              </div>
            </div>

            {/* Core benefits checklist */}
            <div className="space-y-4 pt-4 border-t border-border/60">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-primary" />
                <span>Pillars of Clean Energy</span>
              </h3>

              <ul className="space-y-3.5 text-xs font-semibold text-foreground/90">
                {activePlanObj.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 leading-normal">
                    <div className="h-4.5 w-4.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/10">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery availability details */}
            <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 text-xs font-semibold text-muted-foreground space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kochi Hub Delivery SLA</span>
              </div>
              <p className="leading-relaxed pl-6">
                Active in: <strong className="font-extrabold text-foreground">{activePlanObj.deliveryAvailability}</strong>. Morning drop starts at 6:30 AM; Lunch slot starts at 11:30 AM.
              </p>
            </div>

            {/* Customer reviews block */}
            <div className="space-y-4 pt-4 border-t border-border/60">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground flex items-center gap-2">
                <Star className="h-4.5 w-4.5 text-primary fill-primary" />
                <span>Verified Local Reviews</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activePlanObj.reviews.map((r, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-border bg-card shadow-sm space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-foreground">{r.author}</span>
                      <div className="flex gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-normal font-medium italic">
                      "{r.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Quick Action card */}
          <div className="lg:col-span-4 bg-card border border-border rounded-3xl p-6 shadow-sm text-center space-y-6">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground pb-3 border-b border-border flex items-center justify-center gap-2">
              <ShoppingBag className="h-4.5 w-4.5 text-primary" />
              <span>Select Meal Program</span>
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-primary bg-primary/[0.01] text-left">
                <span className="text-[10px] text-primary uppercase font-black tracking-widest">Pre-Selected Program</span>
                <span className="block text-base font-black text-foreground mt-1">{activePlanObj.title}</span>
                <span className="block text-xs font-bold text-muted-foreground mt-0.5">₹{activePlanObj.pricePerMeal} base price per meal box</span>
              </div>
            </div>

            <button
              onClick={handleNextStep}
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:scale-98"
            >
              <span>Continue to Customize</span>
              <ChevronRight className="h-4.5 w-4.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: CUSTOMIZE MEAL PLAN */}
      {activeStep === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Customizations forms */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            
            {/* Title */}
            <div>
              <h2 className="text-lg font-black text-foreground tracking-tight">
                2. Customize Plan Configurations
              </h2>
              <p className="text-[10px] text-muted-foreground uppercase font-black tracking-wider mt-0.5">
                Set plan duration, meal slots, and preferences
              </p>
            </div>

            {/* Duration select */}
            <div className="space-y-3 pt-4 border-t border-border">
              <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                Subscription Plan Cycle
              </label>
              
              {activePlanObj.isFlagship ? (
                // Flagship box is locked to One-Time Purchase default, but can pick standard weekly as well
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DURATION_OPTIONS.map(d => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDuration(d.id)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between h-24 transition-all ${duration === d.id ? 'border-primary bg-primary/[0.01]' : 'border-border bg-background/50 hover:bg-secondary/40'}`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xs font-black text-foreground leading-tight">{d.title}</span>
                        {duration === d.id && <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center"><Check className="h-2.5 w-2.5 text-white" /></div>}
                      </div>
                      <span className="text-[10px] text-muted-foreground font-semibold leading-snug mt-1">{d.labelBadge}</span>
                    </button>
                  ))}
                </div>
              ) : (
                // Other plans
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DURATION_OPTIONS.filter(d => d.id !== 'one-time').map(d => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDuration(d.id)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between h-24 transition-all ${duration === d.id ? 'border-primary bg-primary/[0.01]' : 'border-border bg-background/50 hover:bg-secondary/40'}`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xs font-black text-foreground leading-tight">{d.title}</span>
                        {duration === d.id && <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center"><Check className="h-2.5 w-2.5 text-white" /></div>}
                      </div>
                      <span className="text-[10px] text-muted-foreground font-semibold leading-snug mt-1">{d.labelBadge}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Diet preferences & protein */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                  Diet Preference
                </label>
                <div className="flex rounded-xl border border-border overflow-hidden p-1 bg-muted/30">
                  {['veg', 'non-veg'].map(d => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDietType(d)}
                      className={`flex-1 py-2 rounded-lg text-xs font-black uppercase transition-all ${dietType === d ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-transparent text-muted-foreground hover:text-foreground'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                  Protein Density
                </label>
                <div className="flex rounded-xl border border-border overflow-hidden p-1 bg-muted/30">
                  {['normal', 'high-protein'].map(p => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setProteinPref(p)}
                      className={`flex-1 py-2 rounded-lg text-xs font-black uppercase transition-all ${proteinPref === p ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-transparent text-muted-foreground hover:text-foreground'}`}
                    >
                      {p.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity & Dispatch Schedules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                  Box Quantity per Drop
                </label>
                <div className="flex items-center gap-3 bg-muted/30 border border-border rounded-xl p-1.5 w-full justify-between">
                  <span className="text-xs text-muted-foreground font-bold pl-3">Boxes:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="h-8 w-8 rounded-lg bg-background border border-border flex items-center justify-center font-bold text-foreground hover:bg-secondary select-none"
                    >
                      -
                    </button>
                    <span className="text-xs font-black text-foreground w-8 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => Math.min(10, prev + 1))}
                      className="h-8 w-8 rounded-lg bg-background border border-border flex items-center justify-center font-bold text-foreground hover:bg-secondary select-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                  Delivery Time Slot
                </label>
                <select
                  value={deliverySlot}
                  onChange={e => setDeliverySlot(e.target.value)}
                  className="w-full h-11 rounded-xl border border-border bg-background px-3 text-xs font-semibold focus:outline-none"
                >
                  <option value="morning">Breakfast Slot (6:30 AM - 9:00 AM)</option>
                  <option value="afternoon">Lunch Slot (11:30 AM - 1:30 PM)</option>
                  <option value="evening">Dinner Slot (6:30 PM - 8:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Meal Time checkboxes (Disabled for flagship value box lunch drops) */}
            {!activePlanObj.isFlagship && (
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                  Subscribe Meal Slots (Daily Deliveries)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['breakfast', 'lunch', 'dinner'].map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMeals(prev => ({ ...prev, [m]: !prev[m] }))}
                      className={`p-4 rounded-xl border text-center flex flex-col justify-between items-center transition-all ${meals[m] ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-background/50 text-muted-foreground'}`}
                    >
                      <span className="text-xs font-black capitalize">{m}</span>
                      {meals[m] && <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center mt-2"><Check className="h-2.5 w-2.5 text-white" /></div>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery days selection */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                Exclude Weekends? (Delivery Days)
              </label>
              <div className="flex rounded-xl border border-border overflow-hidden p-1 bg-muted/30 max-w-sm">
                <button
                  type="button"
                  onClick={() => setDeliveryDays('all')}
                  className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${deliveryDays === 'all' ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-transparent text-muted-foreground'}`}
                >
                  Mon – Sun (All Days)
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryDays('weekdays')}
                  className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${deliveryDays === 'weekdays' ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-transparent text-muted-foreground'}`}
                >
                  Mon – Fri (Weekdays Only)
                </button>
              </div>
            </div>

            {/* Special notes */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">
                Allergies & Kitchen Notes (Optional)
              </label>
              <textarea
                value={specialNotes}
                onChange={e => setSpecialNotes(e.target.value)}
                placeholder="e.g. Nut allergies, low salt, call prior to dropping at front desk"
                rows={2}
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

          </div>

          {/* Right bill preview */}
          <div className="lg:col-span-4 bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground pb-3 border-b border-border flex items-center justify-center gap-2">
              <ShoppingBag className="h-4.5 w-4.5 text-primary" />
              <span>Calculated Totals</span>
            </h3>

            <div className="space-y-3.5 text-xs font-semibold">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Base Meal Cost</span>
                <span className="text-foreground font-bold">₹{pricePerMeal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Meals Calculated ({totalMeals} meals)</span>
                <span className="text-foreground font-bold">{totalMeals} Total</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Kochi Delivery Drops</span>
                <span className="text-foreground font-bold">₹{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between items-center text-emerald-600">
                  <span>Cycle Promo Discount ({activeDiscountPct}%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between items-center border-t border-border/40 pt-3 text-sm font-black">
                <span className="text-foreground uppercase tracking-widest text-xs">Estimated Grand Total</span>
                <span className="text-primary text-base">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleNextStep}
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all cursor-pointer hover:-translate-y-0.5 active:scale-98"
            >
              <span>Set Delivery Address</span>
              <ChevronRight className="h-4.5 w-4.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CUSTOMER DETAILS ADDRESS */}
      {activeStep === 3 && (
        <form 
          onSubmit={e => { e.preventDefault(); handleNextStep(); }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Form */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-black text-foreground tracking-tight">
                3. Address & Delivery Coordinates
              </h2>
              <p className="text-[10px] text-muted-foreground uppercase font-black tracking-wider mt-0.5">
                Set recipient credentials and delivery drop zone
              </p>
            </div>

            {/* Grid */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Recipient Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="e.g. Risal"
                      className={`w-full h-11 rounded-xl border bg-background/50 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.name ? 'border-destructive' : 'border-border'}`}
                    />
                    <User className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground/60" />
                  </div>
                  {errors.name && <p className="text-[10px] text-destructive font-bold">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Phone number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="e.g. 9876543210"
                      className={`w-full h-11 rounded-xl border bg-background/50 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.phone ? 'border-destructive' : 'border-border'}`}
                    />
                    <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground/60" />
                  </div>
                  {errors.phone && <p className="text-[10px] text-destructive font-bold">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="e.g. risal@example.com"
                    className={`w-full h-11 rounded-xl border bg-background/50 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.email ? 'border-destructive' : 'border-border'}`}
                  />
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground/60" />
                </div>
                {errors.email && <p className="text-[10px] text-destructive font-bold">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">House / Flat Details</label>
                  <input
                    type="text"
                    name="houseFlat"
                    value={form.houseFlat}
                    onChange={e => setForm({...form, houseFlat: e.target.value})}
                    placeholder="e.g. Flat 3B, Emerald Heights"
                    className={`w-full h-11 rounded-xl border bg-background/50 px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.houseFlat ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.houseFlat && <p className="text-[10px] text-destructive font-bold">{errors.houseFlat}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Street Name</label>
                  <input
                    type="text"
                    name="street"
                    value={form.street}
                    onChange={e => setForm({...form, street: e.target.value})}
                    placeholder="e.g. 2nd Cross, Seaport-Airport Road"
                    className={`w-full h-11 rounded-xl border bg-background/50 px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.street ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.street && <p className="text-[10px] text-destructive font-bold">{errors.street}</p>}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Locality Area</label>
                  <select
                    value={form.area}
                    onChange={e => setForm({...form, area: e.target.value})}
                    className="w-full h-11 rounded-xl border border-border bg-background px-3 text-xs font-semibold focus:outline-none"
                  >
                    {KOCHI_AREAS.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">City</label>
                  <input
                    type="text"
                    value="Kochi"
                    disabled
                    className="w-full h-11 rounded-xl border border-border/80 bg-muted/65 px-4 text-xs font-bold text-muted-foreground cursor-not-allowed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onChange={e => setForm({...form, pincode: e.target.value})}
                    placeholder="682030"
                    className={`w-full h-11 rounded-xl border bg-background/50 px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.pincode ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.pincode && <p className="text-[10px] text-destructive font-bold">{errors.pincode}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Nearby Landmark (Optional)</label>
                  <input
                    type="text"
                    value={form.landmark}
                    onChange={e => setForm({...form, landmark: e.target.value})}
                    placeholder="e.g. Opposite Infopark Expressway Gate"
                    className="w-full h-11 rounded-xl border border-border bg-background/50 px-4 text-xs font-semibold focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Drop Instructions</label>
                  <input
                    type="text"
                    value={form.deliveryInstructions}
                    onChange={e => setForm({...form, deliveryInstructions: e.target.value})}
                    placeholder="e.g. Drop at security post, ring bell"
                    className="w-full h-11 rounded-xl border border-border bg-background/50 px-4 text-xs font-semibold focus:outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground pb-3 border-b border-border flex items-center justify-center gap-2">
              <ShoppingBag className="h-4.5 w-4.5 text-primary" />
              <span>Checkout details</span>
            </h3>

            <div className="rounded-2xl border border-border bg-muted/40 p-4 space-y-3.5 text-xs font-semibold">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="text-muted-foreground">Plan Product</span>
                <span className="text-foreground font-black">{activePlanObj.title}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="text-muted-foreground">Diet Preference</span>
                <span className="text-foreground font-black uppercase">{dietType} ({proteinPref})</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="text-muted-foreground">Subscribed Cycle</span>
                <span className="text-foreground font-black">{duration === 'one-time' ? 'One Day Trial' : duration === 'weekly' ? 'Weekly' : 'Monthly'}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-black">
                <span className="text-foreground uppercase tracking-widest text-xs">Total Amount</span>
                <span className="text-primary text-base">₹{grandTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all cursor-pointer hover:-translate-y-0.5 active:scale-98"
            >
              <span>Continue to Review</span>
              <ChevronRight className="h-4.5 w-4.5 stroke-[2.5]" />
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: ORDER REVIEW */}
      {activeStep === 4 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Summary reviews */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Summary card */}
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <div>
                  <h2 className="text-lg font-black text-foreground tracking-tight">
                    4. Review Your Daily Meal Subscription
                  </h2>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-wider mt-0.5">
                    Confirm all configurations before secure payment
                  </p>
                </div>
                
                <button
                  onClick={() => setActiveStep(2)}
                  className="flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline cursor-pointer select-none"
                >
                  <Edit className="h-3.5 w-3.5" />
                  <span>Edit Plan</span>
                </button>
              </div>

              {/* Product Info Display */}
              <div className="flex items-start gap-4 bg-muted/30 border border-border rounded-2xl p-5">
                {/* Image Placeholder */}
                <div className="h-16 w-20 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 border border-border flex items-center justify-center shrink-0">
                  <Utensils className="h-5 w-5 text-muted-foreground/60" />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-black uppercase text-primary tracking-wider">
                    {activePlanObj.badge}
                  </span>
                  <h4 className="text-sm font-black text-foreground">{activePlanObj.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-snug">{activePlanObj.description}</p>
                </div>
              </div>

              {/* Customizations configurations breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold">
                <div className="space-y-1 p-3.5 rounded-xl border border-border">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Plan Tier</span>
                  <span className="block text-foreground font-black capitalize">{duration === 'one-time' ? 'One Day Trial' : duration === 'weekly' ? 'Weekly Subscription' : 'Monthly Subscription'}</span>
                </div>
                <div className="space-y-1 p-3.5 rounded-xl border border-border">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Quantity</span>
                  <span className="block text-foreground font-black">{quantity} Box{quantity > 1 ? 'es' : ''} Per Drop</span>
                </div>
                <div className="space-y-1 p-3.5 rounded-xl border border-border">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Diet Type</span>
                  <span className="block text-foreground font-black capitalize">{dietType.toUpperCase()} ({proteinPref})</span>
                </div>
                <div className="space-y-1 p-3.5 rounded-xl border border-border">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Meal Slots</span>
                  <span className="block text-foreground font-black capitalize">{Object.keys(meals).filter(k => meals[k]).join(', ')}</span>
                </div>
                <div className="space-y-1 p-3.5 rounded-xl border border-border">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Time Slot</span>
                  <span className="block text-foreground font-black capitalize">{deliverySlot} slot</span>
                </div>
                <div className="space-y-1 p-3.5 rounded-xl border border-border">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Schedule Cycle</span>
                  <span className="block text-foreground font-black capitalize">{deliveryDays === 'weekdays' ? 'Mon-Fri' : 'Mon-Sun'}</span>
                </div>
              </div>

              {specialNotes && (
                <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs">
                  <strong className="text-amber-800 dark:text-amber-300 font-extrabold block mb-0.5">Kitchen instructions:</strong>
                  <p className="text-muted-foreground leading-normal font-medium italic">"{specialNotes}"</p>
                </div>
              )}
            </div>

            {/* Address Display card */}
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground flex items-center gap-2">
                  <MapPin className="h-4.5 w-4.5 text-primary" />
                  <span>Delivery Address Details</span>
                </h3>
                
                <button
                  onClick={() => setActiveStep(3)}
                  className="flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline cursor-pointer select-none"
                >
                  <Edit className="h-3.5 w-3.5" />
                  <span>Edit Address</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-semibold leading-relaxed">
                <div className="space-y-1.5">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Recipient</span>
                  <strong className="text-foreground text-sm font-black">{form.name}</strong>
                  <span className="block text-muted-foreground/80 font-medium">{form.phone}</span>
                  <span className="block text-muted-foreground/80 font-medium">{form.email}</span>
                </div>
                
                <div className="space-y-1">
                  <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Address</span>
                  <p className="text-foreground font-bold">
                    {form.houseFlat}, {form.street}<br/>
                    {form.area}, {form.city} - {form.pincode}
                  </p>
                  {form.landmark && <span className="block text-muted-foreground/90 font-medium">Landmark: {form.landmark}</span>}
                  {form.deliveryInstructions && <span className="block text-primary/95 font-bold">Note: {form.deliveryInstructions}</span>}
                </div>
              </div>
            </div>

          </div>

          {/* Right billing summary */}
          <div className="lg:col-span-4 bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground pb-3 border-b border-border flex items-center justify-center gap-2">
              <ShoppingBag className="h-4.5 w-4.5 text-primary" />
              <span>Bill Invoice Summary</span>
            </h3>

            <div className="space-y-3.5 text-xs font-semibold pb-4 border-b border-border/60">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Plan Base Charge</span>
                <span className="text-foreground">₹{rawSubtotal}</span>
              </div>
              
              {discountAmount > 0 && (
                <div className="flex justify-between items-center text-emerald-600">
                  <span>Cycle discount ({activeDiscountPct}%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Kochi Drops Delivery charge</span>
                <span className="text-foreground">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">GST (5%)</span>
                <span className="text-foreground">₹{gstAmount}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm font-black">
              <span className="text-foreground uppercase tracking-widest text-xs">Total Amount</span>
              <span className="text-primary text-base">₹{grandTotal}</span>
            </div>

            <button
              onClick={handleNextStep}
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all cursor-pointer hover:-translate-y-0.5 active:scale-98"
            >
              <span>Continue to Payment</span>
              <ChevronRight className="h-4.5 w-4.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: SECURE PAYMENT GATEWAY SIMULATION */}
      {activeStep === 5 && (
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="pb-4 border-b border-border text-center">
            <h2 className="text-lg font-black text-foreground tracking-tight">
              Secure Sandbox Payment Gateway
            </h2>
            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-wider mt-0.5">
              Simulate e-commerce card/upi transaction validations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left side: payment method selectors */}
            <div className="md:col-span-4 space-y-2 border-r border-border/60 pr-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${paymentMethod === 'upi' ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-background hover:bg-secondary/40 text-muted-foreground hover:text-foreground'}`}
              >
                <span className="text-xs font-black">UPI Gateway</span>
                <Check className={`h-4 w-4 stroke-[3] ${paymentMethod === 'upi' ? 'opacity-100' : 'opacity-0'}`} />
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-background hover:bg-secondary/40 text-muted-foreground hover:text-foreground'}`}
              >
                <span className="text-xs font-black">Credit/Debit Card</span>
                <Check className={`h-4 w-4 stroke-[3] ${paymentMethod === 'card' ? 'opacity-100' : 'opacity-0'}`} />
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('netbank')}
                className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${paymentMethod === 'netbank' ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-background hover:bg-secondary/40 text-muted-foreground hover:text-foreground'}`}
              >
                <span className="text-xs font-black">Net Banking</span>
                <Check className={`h-4 w-4 stroke-[3] ${paymentMethod === 'netbank' ? 'opacity-100' : 'opacity-0'}`} />
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('wallet')}
                className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${paymentMethod === 'wallet' ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-background hover:bg-secondary/40 text-muted-foreground hover:text-foreground'}`}
              >
                <span className="text-xs font-black">E-Wallets</span>
                <Check className={`h-4 w-4 stroke-[3] ${paymentMethod === 'wallet' ? 'opacity-100' : 'opacity-0'}`} />
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-background hover:bg-secondary/40 text-muted-foreground hover:text-foreground'}`}
              >
                <span className="text-xs font-black">Cash on Delivery</span>
                <Check className={`h-4 w-4 stroke-[3] ${paymentMethod === 'cod' ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            </div>

            {/* Right side: dynamic forms */}
            <div className="md:col-span-8">
              {paymentState === 'processing' && (
                <div className="h-full flex flex-col justify-center items-center py-10 space-y-4">
                  <Loader2 className="h-10 w-10 text-primary animate-spin" />
                  <p className="text-xs text-foreground font-black uppercase tracking-widest animate-pulse">
                    Processing Payment...
                  </p>
                  <p className="text-[10px] text-muted-foreground font-semibold">Contacting simulated checkout nodes</p>
                </div>
              )}

              {paymentState === 'verifying' && (
                <div className="h-full flex flex-col justify-center items-center py-10 space-y-4">
                  <ShieldCheck className="h-12 w-12 text-emerald-500 animate-bounce" />
                  <p className="text-xs text-foreground font-black uppercase tracking-widest animate-pulse">
                    Verifying Transaction...
                  </p>
                  <p className="text-[10px] text-muted-foreground font-semibold">Validating security signatures</p>
                </div>
              )}

              {paymentState === 'idle' && (
                <form onSubmit={handlePayNow} className="space-y-4">
                  {/* UPI */}
                  {paymentMethod === 'upi' && (
                    <div className="space-y-3">
                      <Typography variant="h3" className="text-xs font-bold text-foreground">UPI ID Verification</Typography>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">UPI Address</label>
                        <input
                          type="text"
                          placeholder="e.g. risal@okhdfcbank"
                          value={paymentForm.upiId}
                          onChange={e => setPaymentForm({...paymentForm, upiId: e.target.value})}
                          className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${paymentErrors.upiId ? 'border-destructive' : 'border-border'}`}
                        />
                        {paymentErrors.upiId && <p className="text-[10px] text-destructive font-bold">{paymentErrors.upiId}</p>}
                      </div>
                    </div>
                  )}

                  {/* CARD */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-3">
                      <Typography variant="h3" className="text-xs font-bold text-foreground">Debit / Credit Card Gateway</Typography>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Card Number</label>
                        <input
                          type="text"
                          maxLength={16}
                          placeholder="4321 8765 0928 1729"
                          value={paymentForm.cardNum}
                          onChange={e => setPaymentForm({...paymentForm, cardNum: e.target.value.replace(/\D/g, '')})}
                          className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${paymentErrors.cardNum ? 'border-destructive' : 'border-border'}`}
                        />
                        {paymentErrors.cardNum && <p className="text-[10px] text-destructive font-bold">{paymentErrors.cardNum}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Expiry Date</label>
                          <input
                            type="text"
                            maxLength={5}
                            placeholder="MM/YY"
                            value={paymentForm.cardExpiry}
                            onChange={e => setPaymentForm({...paymentForm, cardExpiry: e.target.value})}
                            className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${paymentErrors.cardExpiry ? 'border-destructive' : 'border-border'}`}
                          />
                          {paymentErrors.cardExpiry && <p className="text-[10px] text-destructive font-bold">{paymentErrors.cardExpiry}</p>}
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">CVV</label>
                          <input
                            type="password"
                            maxLength={3}
                            placeholder="***"
                            value={paymentForm.cardCvv}
                            onChange={e => setPaymentForm({...paymentForm, cardCvv: e.target.value.replace(/\D/g, '')})}
                            className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${paymentErrors.cardCvv ? 'border-destructive' : 'border-border'}`}
                          />
                          {paymentErrors.cardCvv && <p className="text-[10px] text-destructive font-bold">{paymentErrors.cardCvv}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* NET BANKING */}
                  {paymentMethod === 'netbank' && (
                    <div className="space-y-3">
                      <Typography variant="h3" className="text-xs font-bold text-foreground">Select Net Banking Bank</Typography>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Bank Node</label>
                        <select
                          value={paymentForm.netBank}
                          onChange={e => setPaymentForm({...paymentForm, netBank: e.target.value})}
                          className="w-full h-11 rounded-xl border border-border bg-background px-3 text-xs font-semibold focus:outline-none"
                        >
                          <option value="SBI">State Bank of India</option>
                          <option value="HDFC">HDFC Bank</option>
                          <option value="ICICI">ICICI Bank</option>
                          <option value="Axis">Axis Bank</option>
                          <option value="Federal">Federal Bank</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* WALLETS */}
                  {paymentMethod === 'wallet' && (
                    <div className="space-y-3">
                      <Typography variant="h3" className="text-xs font-bold text-foreground">Choose Wallet App</Typography>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Wallet provider</label>
                        <select
                          value={paymentForm.walletType}
                          onChange={e => setPaymentForm({...paymentForm, walletType: e.target.value})}
                          className="w-full h-11 rounded-xl border border-border bg-background px-3 text-xs font-semibold focus:outline-none"
                        >
                          <option value="Paytm">Paytm Wallet</option>
                          <option value="PhonePe">PhonePe Wallet</option>
                          <option value="Amazon">Amazon Pay Wallet</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* COD */}
                  {paymentMethod === 'cod' && (
                    <div className="space-y-2 p-4 bg-muted/40 border border-border rounded-2xl">
                      <Typography variant="h3" className="text-xs font-bold text-foreground">Cash On Delivery Confirmation</Typography>
                      <p className="text-[10px] text-muted-foreground font-semibold leading-relaxed">
                        Pay in cash or UPI QR code at your door when the delivery drop-shipper hands over the meal box. A verification OTP will be sent to your phone {form.phone}.
                      </p>
                    </div>
                  )}

                  {/* Total price info */}
                  <div className="p-4 rounded-xl border border-border/80 space-y-1 text-xs font-semibold">
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span>Total Amount:</span>
                      <span>₹{grandTotal}</span>
                    </div>
                    <div className="flex justify-between items-center text-foreground font-black text-sm pt-1 border-t border-border/40 mt-1">
                      <span>Grand Total:</span>
                      <span>₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all cursor-pointer hover:-translate-y-0.5 active:scale-98"
                  >
                    <span>Secure Pay (₹{grandTotal})</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: ORDER CONFIRMATION INVOICE */}
      {activeStep === 6 && (
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-16">
          {/* Confirmed message card */}
          <div className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 shadow-sm">
            <div className="mx-auto h-20 w-20 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center border border-emerald-500/10 shadow-inner">
              <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-[9px] font-black text-emerald-600 uppercase tracking-widest border border-emerald-500/20">
                Payment Successful
              </span>
              <Typography variant="h1" className="text-2xl font-black text-foreground tracking-tight">
                Thank You! Your Order Has Been Confirmed.
              </Typography>
              <p className="text-xs leading-relaxed text-muted-foreground max-w-md mx-auto font-medium">
                We have registered your daily diet plan under order ID <strong className="text-foreground">{orderInfo.orderId}</strong>.
              </p>
            </div>
          </div>

          {/* Active timeline tracker */}
          <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-4">
            <Typography variant="h3" className="text-xs font-extrabold uppercase tracking-widest text-foreground pb-2 border-b border-border">
              Subscription Dispatch Tracker
            </Typography>

            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2 font-bold select-none text-[10px] uppercase tracking-wider">
              <div className="flex-1 flex items-center gap-3 text-primary">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center"><Check className="h-3.5 w-3.5 stroke-[3.5]" /></div>
                <span>Ordered (Verified)</span>
              </div>
              <div className="flex-1 flex items-center gap-3 text-primary">
                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20"><Loader2 className="h-3.5 w-3.5 animate-spin" /></div>
                <span>Preparing in Kitchen</span>
              </div>
              <div className="flex-1 flex items-center gap-3 text-muted-foreground/60">
                <div className="h-6 w-6 rounded-full bg-muted text-muted-foreground/30 flex items-center justify-center border border-border">3</div>
                <span>Out for Delivery</span>
              </div>
              <div className="flex-1 flex items-center gap-3 text-muted-foreground/60">
                <div className="h-6 w-6 rounded-full bg-muted text-muted-foreground/30 flex items-center justify-center border border-border">4</div>
                <span>Dropped / Delivered</span>
              </div>
            </div>
          </div>

          {/* Order Details & Invoice preview */}
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            
            {/* Warning banner */}
            <div className="bg-emerald-500/5 border border-primary/10 rounded-2xl p-4 flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed font-semibold text-emerald-800 dark:text-emerald-300">
                <strong className="font-extrabold block">Demo Invoice Check:</strong>
                This invoice serves as a structural presentation representation only. No actual funds have been transferred.
              </div>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-border">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground">
                Simulated Invoice Preview
              </h3>

              <button
                onClick={printInvoiceWindow}
                className="flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs px-4 py-2 hover:bg-primary/95 transition-all shadow-sm cursor-pointer hover:shadow"
              >
                <Download className="h-4 w-4" />
                <span>Print Invoice</span>
              </button>
            </div>

            {/* Bill Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-semibold leading-relaxed">
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Invoice Coordinates</span>
                <strong className="text-foreground text-sm font-black block">{form.name}</strong>
                <span className="block text-muted-foreground/80 font-medium">{form.houseFlat}, {form.street}</span>
                <span className="block text-muted-foreground/80 font-medium">{form.area}, {form.city} - {form.pincode}</span>
                <span className="block text-muted-foreground/80 font-medium">Tel: {form.phone}</span>
              </div>

              <div className="space-y-1 text-left sm:text-right">
                <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Meta Data</span>
                <span className="block text-foreground font-bold">Invoice No: {orderInfo.invoiceNum}</span>
                <span className="block text-muted-foreground/80 font-medium">Transaction ID: {paymentMethod === 'cod' ? 'COD-GATEWAY' : orderInfo.transactionId}</span>
                <span className="block text-muted-foreground/80 font-medium">Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="block text-emerald-800 dark:text-emerald-300 font-extrabold">Estimated Delivery: {orderInfo.deliveryDate}</span>
              </div>
            </div>

            {/* Subscribed items list table representation */}
            <div className="pt-4 border-t border-border/60">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="grid grid-cols-12 bg-muted/40 p-3 text-[10px] uppercase font-black text-muted-foreground border-b border-border tracking-wider text-center">
                  <div className="col-span-6 text-left pl-3">Subscribed Plan Description</div>
                  <div className="col-span-2">Meals</div>
                  <div className="col-span-2">Qty</div>
                  <div className="col-span-2 text-right pr-3">Rate</div>
                </div>
                
                <div className="grid grid-cols-12 p-4 text-xs font-semibold items-center text-center">
                  <div className="col-span-6 text-left space-y-1 pl-1">
                    <strong className="text-foreground font-black">{activePlanObj.title}</strong>
                    <span className="block text-[10px] text-muted-foreground/80 font-bold leading-none capitalize">Diet: {dietType} ({proteinPref} protein), Slot: {deliverySlot}</span>
                  </div>
                  <div className="col-span-2 font-bold text-foreground">{totalMeals} Total</div>
                  <div className="col-span-2 font-bold text-foreground">{quantity} Box{quantity > 1 ? 'es' : ''}</div>
                  <div className="col-span-2 text-right pr-3 font-bold text-foreground">₹{pricePerMeal} / meal</div>
                </div>
              </div>
            </div>

            {/* Billing totals */}
            <div className="border-t border-border/60 pt-4 flex flex-col items-end text-xs font-semibold space-y-2">
              <div className="w-64 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="text-foreground">₹{rawSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount ({activeDiscountPct}%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kochi Drops Delivery:</span>
                  <span className="text-foreground">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST Taxes (5%):</span>
                  <span className="text-foreground">₹{gstAmount}</span>
                </div>
                <div className="flex justify-between text-foreground font-black text-sm pt-2 border-t border-border/40">
                  <span className="uppercase tracking-widest text-[11px]">Grand Total</span>
                  <span className="text-primary">₹{grandTotal}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs px-8 uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all hover:shadow-lg cursor-pointer"
            >
              <Home className="h-4 w-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Section bg="muted" className="relative min-h-screen py-12 flex items-center">
      <Container>
        <Suspense fallback={
          <div className="max-w-md mx-auto text-center space-y-4 py-20">
            <Loader2 className="h-8 w-8 text-primary animate-spin mx-auto" />
            <p className="text-xs text-muted-foreground font-semibold">Loading Alakapuri Checkout Stepper...</p>
          </div>
        }>
          <CheckoutContent />
        </Suspense>
      </Container>
    </Section>
  );
}

function Section({ bg, className, children }: { bg?: string; className?: string; children: React.ReactNode }) {
  const bgClass = bg === 'muted' ? 'bg-muted/40 dark:bg-muted/10' : 'bg-background';
  return (
    <section className={`py-16 md:py-24 ${bgClass} ${className || ''}`}>
      {children}
    </section>
  );
}
