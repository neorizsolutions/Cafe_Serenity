'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronLeft, User, Phone, Mail, MapPin, Loader2, ShoppingBag, Utensils
} from 'lucide-react';
import Container from '@/components/common/Container';
import Typography from '@/components/common/Typography';
import { 
  PaymentMethodCard, PaymentForm, OrderSuccessCard, InvoicePreview, InvoiceActions, Logos 
} from '@/components/checkout/CheckoutComponents';

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
    imageSrc: '/images/hero_meal_box.png'
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
    imageSrc: '/images/category_weight_loss.png'
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
    imageSrc: '/images/category_high_protein.png'
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
    imageSrc: '/images/category_diabetic.png'
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
    imageSrc: '/images/category_corporate.png'
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
    imageSrc: '/images/category_family.png'
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
    imageSrc: '/images/category_balanced.png'
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
    imageSrc: '/images/category_kids.png'
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
    imageSrc: '/images/category_custom.png'
  }
];

const KOCHI_AREAS = [
  'Kakkanad', 'Infopark', 'Edappally', 'Vyttila', 'Kaloor', 
  'Thrikkakara', 'Kadavanthra', 'Panampilly Nagar', 'Marine Drive', 'Palarivattom'
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryPlan = searchParams.get('plan') || 'value-box';

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

  // Screen state routing: 'checkout' | 'payment' | 'success'
  const [screen, setScreen] = useState<'checkout' | 'payment' | 'success'>('checkout');

  // Customer Form details
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: 'Kakkanad',
    pincode: '682030',
    deliveryNotes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Payment Form details
  const [paymentMethod, setPaymentMethod] = useState('gpay');
  const [paymentForm, setPaymentForm] = useState({
    cardName: '',
    cardNum: '',
    cardExpiry: '',
    cardCvv: '',
    upiId: '',
    netBank: 'SBI',
    walletType: 'Paytm'
  });
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({});
  const [paymentState, setPaymentState] = useState<'idle' | 'processing' | 'verifying'>('idle');
  
  // Successful order variables
  const [orderInfo, setOrderInfo] = useState({
    orderId: '',
    transactionId: '',
    invoiceNum: '',
    timestamp: '',
    deliveryDate: ''
  });

  // Invoice calculations
  const pricePerMeal = activePlanObj.pricePerMeal;
  const rawSubtotal = pricePerMeal * quantity;
  const deliveryFee = rawSubtotal > 300 ? 0 : 30; // Free delivery above ₹300
  const gstAmount = Math.round(rawSubtotal * 0.05);
  const grandTotal = rawSubtotal + deliveryFee + gstAmount;

  // Validation
  const validateCheckoutForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Full Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Mobile Number is required';
    } else if (!/^\+?[0-9]{10,12}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.address.trim()) newErrors.address = 'Delivery Address is required';
    if (!form.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(form.pincode.trim())) {
      newErrors.pincode = 'Enter a valid 6-digit pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePaymentForm = () => {
    const newErrors: Record<string, string> = {};
    const upiMethods = ['gpay', 'phonepe', 'paytm', 'bhim'];
    const cardMethods = ['visa', 'mastercard', 'rupay', 'amex'];

    if (upiMethods.includes(paymentMethod)) {
      if (!paymentForm.upiId.trim()) {
        newErrors.upiId = 'UPI ID is required';
      } else if (!/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(paymentForm.upiId)) {
        newErrors.upiId = 'Enter a valid UPI ID (e.g. user@okaxis)';
      }
    } else if (cardMethods.includes(paymentMethod)) {
      if (!paymentForm.cardNum.trim()) newErrors.cardNum = 'Card number is required';
      else if (!/^[0-9]{16}$/.test(paymentForm.cardNum.replace(/\s+/g, ''))) newErrors.cardNum = 'Enter a valid 16-digit card number';
      
      if (!paymentForm.cardExpiry.trim()) newErrors.cardExpiry = 'Expiry Date is required';
      else if (!/^[0-9]{2}\/[0-9]{2}$/.test(paymentForm.cardExpiry)) newErrors.cardExpiry = 'Format must be MM/YY';
      
      if (!paymentForm.cardCvv.trim()) newErrors.cardCvv = 'CVV is required';
      else if (!/^[0-9]{3}$/.test(paymentForm.cardCvv)) newErrors.cardCvv = 'Must be 3 digits';
    }

    setPaymentErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigations
  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCheckoutForm()) return;
    setScreen('payment');
    window.scrollTo(0, 0);
  };

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePaymentForm()) return;

    setPaymentState('processing');

    // Simulate transaction delays
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
          timestamp: new Date().toLocaleString(),
          deliveryDate: delivery.toLocaleDateString('en-US', options)
        });
        setScreen('success');
        window.scrollTo(0, 0);
      }, 1500);
    }, 1500);
  };

  // SCREEN 1: CHECKOUT FORM & SUMMARY
  if (screen === 'checkout') {
    return (
      <form onSubmit={handleContinueToPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Coordinates */}
        <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <h2 className="text-lg font-black text-foreground tracking-tight">
                Delivery Coordinates
              </h2>
              <p className="text-[10px] text-muted-foreground uppercase font-black tracking-wider mt-0.5">
                Set recipient credentials and drop destination
              </p>
            </div>
            
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none">
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
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
                <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Mobile Number</label>
                <div className="relative">
                  <input
                    type="tel"
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
              <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Email Address (Optional)</label>
              <div className="relative">
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="e.g. risal@example.com"
                  className={`w-full h-11 rounded-xl border bg-background/50 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.email ? 'border-destructive' : 'border-border'}`}
                />
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground/60" />
              </div>
              {errors.email && <p className="text-[10px] text-destructive font-bold">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Delivery Address (House/Flat, Street)</label>
              <div className="relative">
                <input
                  type="text"
                  value={form.address}
                  onChange={e => setForm({...form, address: e.target.value})}
                  placeholder="e.g. Flat 3B, Emerald Heights, Seaport-Airport Road"
                  className={`w-full h-11 rounded-xl border bg-background/50 pl-10 pr-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.address ? 'border-destructive' : 'border-border'}`}
                />
                <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground/60" />
              </div>
              {errors.address && <p className="text-[10px] text-destructive font-bold">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Area / Location</label>
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
                <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Pincode</label>
                <input
                  type="text"
                  maxLength={6}
                  value={form.pincode}
                  onChange={e => setForm({...form, pincode: e.target.value.replace(/\D/g, '')})}
                  placeholder="682030"
                  className={`w-full h-11 rounded-xl border bg-background/50 px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.pincode ? 'border-destructive' : 'border-border'}`}
                />
                {errors.pincode && <p className="text-[10px] text-destructive font-bold">{errors.pincode}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Delivery Notes (Optional)</label>
              <input
                type="text"
                value={form.deliveryNotes}
                onChange={e => setForm({...form, deliveryNotes: e.target.value})}
                placeholder="e.g. Ring bell, leave with security"
                className="w-full h-11 rounded-xl border border-border bg-background/50 px-4 text-xs font-semibold focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4 bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6 animate-fade-in">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground pb-3 border-b border-border flex items-center justify-center gap-2">
            <ShoppingBag className="h-4.5 w-4.5 text-primary" />
            <span>Order Summary</span>
          </h3>

          <div className="flex items-start gap-4 pb-4 border-b border-border">
            <div className="h-14 w-16 rounded-xl border border-border overflow-hidden relative shrink-0">
              <Image
                src={activePlanObj.imageSrc || '/images/hero_meal_box.png'}
                alt={activePlanObj.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-black uppercase text-primary tracking-wider">
                {activePlanObj.badge}
              </span>
              <h4 className="text-xs font-black text-foreground">{activePlanObj.title}</h4>
              <p className="text-[10px] text-muted-foreground font-semibold leading-normal line-clamp-2">{activePlanObj.description}</p>
              <span className="block text-xs font-extrabold text-primary">₹{pricePerMeal}</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-border/60">
            <span className="text-xs text-muted-foreground font-bold">Quantity</span>
            <div className="flex items-center gap-2">
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

          <div className="space-y-3.5 text-xs font-semibold pb-4 border-b border-border/60">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">₹{rawSubtotal}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Delivery Charge</span>
              <span className="text-foreground">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">GST (5%)</span>
              <span className="text-foreground">₹{gstAmount}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm font-black pb-2">
            <span className="text-foreground uppercase tracking-widest text-[10px]">Grand Total</span>
            <span className="text-primary text-base">₹{grandTotal}</span>
          </div>

          <button
            type="submit"
            className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all cursor-pointer hover:-translate-y-0.5 active:scale-98"
          >
            <span>Continue to Payment</span>
          </button>
        </div>
      </form>
    );
  }

  // SCREEN 2: PAYMENT SCREEN
  if (screen === 'payment') {
    return (
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6 animate-fade-in">
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div>
            <h2 className="text-lg font-black text-foreground tracking-tight">
              Secure Sandbox Payment
            </h2>
            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-wider mt-0.5">
              Select one authentic payment channel below
            </p>
          </div>
          
          <button
            type="button"
            disabled={paymentState !== 'idle'}
            onClick={() => setScreen('checkout')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Display selected meal & cost summary */}
        <div className="p-4 rounded-2xl bg-muted/40 border border-border flex justify-between items-center text-xs font-bold">
          <div>
            <span className="text-muted-foreground">Plan Selected:</span>
            <h4 className="text-foreground font-black">{activePlanObj.title} (x{quantity})</h4>
          </div>
          <div className="text-right">
            <span className="text-muted-foreground">Payable Amount:</span>
            <h4 className="text-primary text-base font-black">₹{grandTotal}</h4>
          </div>
        </div>

        {/* Reusable PaymentMethodCard Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          <PaymentMethodCard 
            methodId="gpay" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('gpay')} 
            logo={<Logos.GPay />} 
            label="Google Pay" 
          />
          <PaymentMethodCard 
            methodId="phonepe" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('phonepe')} 
            logo={<Logos.PhonePe />} 
            label="PhonePe" 
          />
          <PaymentMethodCard 
            methodId="paytm" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('paytm')} 
            logo={<Logos.Paytm />} 
            label="Paytm" 
          />
          <PaymentMethodCard 
            methodId="bhim" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('bhim')} 
            logo={<Logos.BHIM />} 
            label="BHIM UPI" 
          />
          <PaymentMethodCard 
            methodId="visa" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('visa')} 
            logo={<Logos.Visa />} 
            label="Visa" 
          />
          <PaymentMethodCard 
            methodId="mastercard" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('mastercard')} 
            logo={<Logos.Mastercard />} 
            label="Mastercard" 
          />
          <PaymentMethodCard 
            methodId="rupay" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('rupay')} 
            logo={<Logos.RuPay />} 
            label="RuPay" 
          />
          <PaymentMethodCard 
            methodId="amex" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('amex')} 
            logo={<Logos.Amex />} 
            label="Amex" 
          />
          <PaymentMethodCard 
            methodId="netbank" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('netbank')} 
            logo={<Logos.NetBank />} 
            label="Net Banking" 
          />
          <PaymentMethodCard 
            methodId="cod" 
            activeMethod={paymentMethod} 
            onClick={() => setPaymentMethod('cod')} 
            logo={<Logos.COD />} 
            label="COD" 
          />
        </div>

        {/* Reusable PaymentForm */}
        <PaymentForm 
          paymentMethod={paymentMethod} 
          paymentForm={paymentForm} 
          onChange={(fields) => setPaymentForm({ ...paymentForm, ...fields })} 
          errors={paymentErrors} 
          grandTotal={grandTotal} 
          paymentState={paymentState} 
          onSubmit={handlePayNow} 
        />
      </div>
    );
  }

  // SCREEN 3: SUCCESS & INVOICE
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-16">
      
      {/* Reusable OrderSuccessCard */}
      <OrderSuccessCard 
        form={form} 
        orderInfo={orderInfo} 
        activePlanObj={activePlanObj} 
        quantity={quantity} 
        grandTotal={grandTotal} 
        paymentMethod={paymentMethod} 
      />

      {/* Reusable InvoicePreview */}
      <InvoicePreview 
        form={form} 
        orderInfo={orderInfo} 
        activePlanObj={activePlanObj} 
        quantity={quantity} 
        rawSubtotal={rawSubtotal} 
        deliveryFee={deliveryFee} 
        gstAmount={gstAmount} 
        grandTotal={grandTotal} 
        paymentMethod={paymentMethod} 
      />

      {/* Reusable InvoiceActions */}
      <InvoiceActions 
        onPrint={() => window.print()}
        onDownload={() => window.print()}
        onBackToHome={() => router.push('/')}
        onContinueShopping={() => router.push('/meal-plans')}
      />

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
            <p className="text-xs text-muted-foreground font-semibold">Loading Alakapuri Checkout...</p>
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
