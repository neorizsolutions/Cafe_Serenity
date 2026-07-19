'use client';

import React from 'react';
import { 
  CreditCard, Check, Utensils, CheckCircle2, Download, Printer, Home, ShoppingBag, Eye,
  Loader2, ShieldCheck
} from 'lucide-react';
import Typography from '@/components/common/Typography';
import { CONTACT_DETAILS } from '@/constants';

// SVG Logos for Payment Methods
export const Logos = {
  GPay: () => (
    <svg className="h-6 w-12" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 15.5H8.2V24.8H5.9V15.5H1.6V13.6H12.5V15.5Z" fill="#EA4335" />
      <path d="M22.2 18.2C22.2 20.1 21.5 21.6 20.2 22.8C18.9 24 17.2 24.6 15.2 24.6C13.2 24.6 11.5 24 10.2 22.8C8.9 21.6 8.2 20.1 8.2 18.2C8.2 16.3 8.9 14.8 10.2 13.6C11.5 12.4 13.2 11.8 15.2 11.8C17.2 11.8 18.9 12.4 20.2 13.6C21.5 14.8 22.2 16.3 22.2 18.2ZM19.9 18.2C19.9 16.9 19.5 15.8 18.7 15C17.9 14.2 16.7 13.7 15.2 13.7C13.7 13.7 12.5 14.2 11.7 15C10.9 15.8 10.5 16.9 10.5 18.2C10.5 19.5 10.9 20.6 11.7 21.4C12.5 22.2 13.7 22.7 15.2 22.7C16.7 22.7 17.9 22.2 18.7 21.4C19.5 20.6 19.9 19.5 19.9 18.2Z" fill="#FBBC05" />
      <path d="M27.5 15.5H23.2V24.8H20.9V15.5H16.6V13.6H27.5V15.5Z" fill="#34A853" />
      <path d="M37.2 18.2C37.2 20.1 36.5 21.6 35.2 22.8C33.9 24 32.2 24.6 30.2 24.6C28.2 24.6 26.5 24 25.2 22.8C23.9 21.6 23.2 20.1 23.2 18.2C23.2 16.3 23.9 14.8 25.2 13.6C26.5 12.4 28.2 11.8 30.2 11.8C32.2 11.8 33.9 12.4 35.2 13.6C36.5 14.8 37.2 16.3 37.2 18.2ZM34.9 18.2C34.9 16.9 34.5 15.8 33.7 15C32.9 14.2 31.7 13.7 30.2 13.7C28.7 13.7 27.5 14.2 26.7 15C25.9 15.8 25.5 16.9 25.5 18.2C25.5 19.5 25.9 20.6 26.7 21.4C27.5 22.2 28.7 22.7 30.2 22.7C31.7 22.7 32.9 22.2 33.7 21.4C34.5 20.6 34.9 19.5 34.9 18.2Z" fill="#4285F4" />
    </svg>
  ),
  PhonePe: () => (
    <svg className="h-6 w-14" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="6" fill="#5F259F" />
      <path d="M25 10H35C38 10 40 12 40 15C40 18 38 20 35 20H29V30H25V10ZM29 16H34C35 16 36 15 36 15C36 14 35 14 34 14H29V16Z" fill="white" />
      <path d="M42 10H46V18C46 19 47 20 48 20C49 20 50 19 50 18V10H54V18C54 22 51 24 48 24C45 24 42 22 42 18V10Z" fill="white" />
      <path d="M57 10H61V18C61 19 62 20 63 20C64 20 65 19 65 18V10H69V30H65V24C64 25 63 26 61 26C58 26 57 24 57 20V10Z" fill="white" />
      <path d="M72 10H82C85 10 87 12 87 15C87 18 85 20 82 20H76V30H72V10ZM76 16H81C82 16 83 15 83 15C83 14 82 14 81 14H76V16Z" fill="white" />
    </svg>
  ),
  Paytm: () => (
    <svg className="h-6 w-14" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 4.5H4.2V19.8H1.6V4.5H0.1V2.5H12.5V4.5Z" fill="#00BAF2" />
      <path d="M22.2 9.2C22.2 12.1 21.5 14.6 20.2 16.8C18.9 19 17.2 20.1 15.2 20.1C13.2 20.1 11.5 19 10.2 16.8C8.9 14.6 8.2 12.1 8.2 9.2C8.2 6.3 8.9 3.8 10.2 1.6C11.5 -0.6 13.2 -1.7 15.2 -1.7C17.2 -1.7 18.9 -0.6 20.2 1.6C21.5 3.8 22.2 6.3 22.2 9.2ZM19.9 9.2C19.9 7.2 19.5 5.5 18.7 4.2C17.9 2.9 16.7 2.1 15.2 2.1C13.7 2.1 12.5 2.9 11.7 4.2C10.9 5.5 10.5 7.2 10.5 9.2C10.5 11.2 10.9 12.9 11.7 14.2C12.5 15.5 13.7 16.3 15.2 16.3C16.7 16.3 17.9 15.5 18.7 14.2C19.5 12.9 19.9 11.2 19.9 9.2Z" fill="#002E6E" />
      <path d="M35 2.5H32.5L28.2 12.5L23.9 2.5H21.4L27.2 15.8V22.5H29.2V15.8L35 2.5Z" fill="#00BAF2" />
    </svg>
  ),
  BHIM: () => (
    <svg className="h-6 w-14" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 2H22L17 14H2L5 2Z" fill="#F47D20" />
      <path d="M12 16H29L24 28H7L12 16Z" fill="#097E3B" />
      <path d="M35 5H45C47 5 49 6 49 8C49 10 47 11 45 11H38V15H45C47 15 49 16 49 18C49 20 47 21 45 21H35V5ZM38 8H44C45 8 45 8 45 9C45 9 45 9 44 9H38V8ZM38 13H44C45 13 45 13 45 14C45 14 45 14 44 14H38V13Z" fill="#002E6E" />
      <path d="M53 5H57V21H53V5Z" fill="#002E6E" />
      <path d="M62 5H66L72 15L78 5H82V21H78V11L73 19H71L66 11V21H62V5Z" fill="#002E6E" />
    </svg>
  ),
  Visa: () => (
    <svg className="h-6 w-14" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 3L28 29H18L10 8L6 5V3H17L21 21L28 3H38Z" fill="#1A1F71" />
      <path d="M58 3L50 29H41L49 3H58Z" fill="#F7B600" />
      <path d="M78 3C73 3 70 5 68 9L60 29H69L71 23H82L83 29H92L85 3C84 3 81 3 78 3ZM73 18L77 7L80 18H73Z" fill="#1A1F71" />
    </svg>
  ),
  Mastercard: () => (
    <svg className="h-6 w-12" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="25" r="22" fill="#EB001B" fillOpacity="0.9" />
      <circle cx="52" cy="25" r="22" fill="#F79E1B" fillOpacity="0.9" />
      <path d="M40 9C42.8 13.5 44.5 19 44.5 25C44.5 31 42.8 36.5 40 41C37.2 36.5 35.5 31 35.5 25C35.5 19 37.2 13.5 40 9Z" fill="#FF5F00" />
    </svg>
  ),
  RuPay: () => (
    <svg className="h-6 w-14" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 2H25C29 2 32 4 32 8C32 12 29 14 25 14H12V24H5V2ZM12 8H23C24 8 25 8 25 9C25 10 24 10 23 10H12V8Z" fill="#0A5AA2" />
      <path d="M40 2H46V14C46 16 47 18 49 18C51 18 52 16 52 14V2H58V14C58 19 54 22 49 22C44 22 40 19 40 14V2Z" fill="#0A5AA2" />
      <path d="M64 2H76C80 2 83 4 83 8C83 12 80 14 76 14H70V24H64V2ZM70 8H75C76 8 77 8 77 9C77 10 76 10 75 10H70V8Z" fill="#F6821F" />
    </svg>
  ),
  Amex: () => (
    <svg className="h-6 w-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" rx="6" fill="#0070CD" />
      <text x="5" y="30" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">AMEX</text>
    </svg>
  ),
  NetBank: () => (
    <div className="flex flex-col items-center justify-center space-y-1">
      <span className="text-xl">🏦</span>
      <span className="text-[9px] uppercase font-black tracking-widest text-muted-foreground">Net Banking</span>
    </div>
  ),
  COD: () => (
    <div className="flex flex-col items-center justify-center space-y-1">
      <span className="text-xl">💵</span>
      <span className="text-[9px] uppercase font-black tracking-widest text-muted-foreground">Cash On Delivery</span>
    </div>
  )
};

// Reusable 1: PaymentMethodCard
interface PaymentMethodCardProps {
  methodId: string;
  activeMethod: string;
  onClick: () => void;
  logo: React.ReactNode;
  label: string;
}

export function PaymentMethodCard({ methodId, activeMethod, onClick, logo, label }: PaymentMethodCardProps) {
  const isActive = activeMethod === methodId;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-center h-22 transition-all relative ${
        isActive 
          ? 'border-primary bg-primary/[0.03] scale-102 shadow-sm' 
          : 'border-border bg-background hover:bg-secondary/40'
      }`}
    >
      <div className="flex items-center justify-center shrink-0">{logo}</div>
      <span className="text-[9px] font-black uppercase text-foreground/80 mt-1 tracking-wider">{label}</span>
      {isActive && (
        <span className="absolute top-2 right-2 h-4 w-4 bg-primary rounded-full flex items-center justify-center text-white">
          <Check className="h-2.5 w-2.5 stroke-[3.5]" />
        </span>
      )}
    </button>
  );
}

// Reusable 2: PaymentForm
interface PaymentFormProps {
  paymentMethod: string;
  paymentForm: any;
  onChange: (fields: any) => void;
  errors: Record<string, string>;
  grandTotal: number;
  paymentState: 'idle' | 'processing' | 'verifying';
  onSubmit: (e: React.FormEvent) => void;
}

export function PaymentForm({ 
  paymentMethod, paymentForm, onChange, errors, grandTotal, paymentState, onSubmit 
}: PaymentFormProps) {
  return (
    <div className="bg-muted/20 border border-border rounded-3xl p-6 min-h-[200px] flex flex-col justify-center animate-fade-in">
      {paymentState === 'processing' && (
        <div className="flex flex-col justify-center items-center py-6 space-y-3">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <p className="text-xs text-foreground font-black uppercase tracking-widest animate-pulse">
            Processing Payment...
          </p>
          <span className="text-[10px] text-muted-foreground font-semibold">Initiating sandbox credentials checks</span>
        </div>
      )}

      {paymentState === 'verifying' && (
        <div className="flex flex-col justify-center items-center py-6 space-y-3">
          <ShieldCheck className="h-10 w-10 text-emerald-500 animate-bounce" />
          <p className="text-xs text-foreground font-black uppercase tracking-widest animate-pulse">
            Verifying Transaction...
          </p>
          <span className="text-[10px] text-muted-foreground font-semibold">Validating dummy security signature</span>
        </div>
      )}

      {paymentState === 'idle' && (
        <form onSubmit={onSubmit} className="space-y-4">
          {['gpay', 'phonepe', 'paytm', 'bhim'].includes(paymentMethod) && (
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">UPI Address ID</label>
              <input
                type="text"
                placeholder="e.g. name@okhdfcbank"
                value={paymentForm.upiId}
                onChange={e => onChange({ upiId: e.target.value })}
                className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.upiId ? 'border-destructive' : 'border-border'}`}
              />
              {errors.upiId ? (
                <p className="text-[10px] text-destructive font-bold">{errors.upiId}</p>
              ) : (
                <p className="text-[10px] text-muted-foreground font-semibold">Enter a valid UPI address handle to complete the simulated checkout.</p>
              )}
            </div>
          )}

          {['visa', 'mastercard', 'rupay', 'amex'].includes(paymentMethod) && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Card Holder Name</label>
                <input
                  type="text"
                  placeholder="e.g. RISAL"
                  value={paymentForm.cardName || ''}
                  onChange={e => onChange({ cardName: e.target.value })}
                  className="w-full h-11 rounded-xl border border-border bg-background px-4 text-xs font-semibold focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Card Number</label>
                <input
                  type="text"
                  maxLength={16}
                  placeholder="4321 8765 0928 1729"
                  value={paymentForm.cardNum}
                  onChange={e => onChange({ cardNum: e.target.value.replace(/\D/g, '') })}
                  className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.cardNum ? 'border-destructive' : 'border-border'}`}
                />
                {errors.cardNum && <p className="text-[10px] text-destructive font-bold">{errors.cardNum}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Expiry Date</label>
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="MM/YY"
                    value={paymentForm.cardExpiry}
                    onChange={e => onChange({ cardExpiry: e.target.value })}
                    className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.cardExpiry ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.cardExpiry && <p className="text-[10px] text-destructive font-bold">{errors.cardExpiry}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    placeholder="***"
                    value={paymentForm.cardCvv}
                    onChange={e => onChange({ cardCvv: e.target.value.replace(/\D/g, '') })}
                    className={`w-full h-11 rounded-xl border bg-background px-4 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary ${errors.cardCvv ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.cardCvv && <p className="text-[10px] text-destructive font-bold">{errors.cardCvv}</p>}
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'netbank' && (
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Net Banking Portal</label>
              
              {/* Popular Banks Row */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'SBI', label: 'State Bank' },
                  { id: 'HDFC', label: 'HDFC' },
                  { id: 'ICICI', label: 'ICICI' }
                ].map(b => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => onChange({ netBank: b.id })}
                    className={`p-2.5 text-center text-[10px] font-black border rounded-xl transition-all ${paymentForm.netBank === b.id ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-background'}`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>

              <select
                value={paymentForm.netBank}
                onChange={e => onChange({ netBank: e.target.value })}
                className="w-full h-11 rounded-xl border border-border bg-background px-3 text-xs font-semibold focus:outline-none"
              >
                <option value="SBI">State Bank of India</option>
                <option value="HDFC">HDFC Bank</option>
                <option value="ICICI">ICICI Bank</option>
                <option value="Axis">Axis Bank</option>
                <option value="Federal">Federal Bank</option>
              </select>
            </div>
          )}

          {paymentMethod === 'cod' && (
            <div className="space-y-1.5 p-4 bg-muted/40 border border-border rounded-xl text-center">
              <span className="text-lg block">💵</span>
              <h4 className="text-xs font-black text-foreground">Cash On Delivery Chosen</h4>
              <p className="text-[10px] text-muted-foreground font-semibold leading-relaxed max-w-sm mx-auto">
                No advanced credentials needed. Simply settle the amount of ₹{grandTotal} with our dispatcher at your doorstep.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex h-11 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest shadow-md hover:bg-primary/95 transition-all"
          >
            <span>Pay Now (₹{grandTotal})</span>
          </button>
        </form>
      )}
    </div>
  );
}

// Reusable 3: OrderSuccessCard
interface OrderSuccessCardProps {
  form: any;
  orderInfo: any;
  activePlanObj: any;
  quantity: number;
  grandTotal: number;
  paymentMethod: string;
}

export function OrderSuccessCard({ 
  form, orderInfo, activePlanObj, quantity, grandTotal, paymentMethod 
}: OrderSuccessCardProps) {
  return (
    <div className="bg-card border border-border rounded-3xl p-8 text-center space-y-6 shadow-sm animate-fade-in">
      <div className="mx-auto h-20 w-20 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center border border-emerald-500/10 shadow-inner">
        <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
      </div>

      <div className="space-y-2">
        <Typography variant="h1" className="text-2xl font-black text-foreground tracking-tight">
          ✅ Order Confirmed
        </Typography>
        <p className="text-xs leading-relaxed text-muted-foreground max-w-md mx-auto font-medium">
          Thank you for choosing Alakapuri Healthy Meals. Your subscription box order has been verified.
        </p>
      </div>

      {/* Structured Details Summary Grid */}
      <div className="grid grid-cols-2 gap-4 text-left border border-border rounded-2xl p-4 bg-muted/20 text-xs font-semibold">
        <div>
          <span className="text-muted-foreground text-[8px] uppercase tracking-wider block">Customer</span>
          <span className="text-foreground font-bold">{form.name}</span>
        </div>
        <div>
          <span className="text-muted-foreground text-[8px] uppercase tracking-wider block">Order ID</span>
          <span className="text-foreground font-bold">{orderInfo.orderId}</span>
        </div>
        <div>
          <span className="text-muted-foreground text-[8px] uppercase tracking-wider block">Plan Ordered</span>
          <span className="text-foreground font-bold">{activePlanObj.title} (x{quantity})</span>
        </div>
        <div>
          <span className="text-muted-foreground text-[8px] uppercase tracking-wider block">Total Paid</span>
          <span className="text-primary font-black">₹{grandTotal}</span>
        </div>
        <div>
          <span className="text-muted-foreground text-[8px] uppercase tracking-wider block">Payment Method</span>
          <span className="text-foreground font-bold uppercase">{paymentMethod}</span>
        </div>
        <div>
          <span className="text-muted-foreground text-[8px] uppercase tracking-wider block">Estimated Delivery</span>
          <span className="text-emerald-700 dark:text-emerald-300 font-extrabold">{orderInfo.deliveryDate}</span>
        </div>
      </div>
    </div>
  );
}

// Reusable 4: InvoiceTable
interface InvoiceTableProps {
  title: string;
  description: string;
  quantity: number;
  pricePerMeal: number;
  rawSubtotal: number;
  deliveryFee: number;
  gstAmount: number;
  grandTotal: number;
}

export function InvoiceTable({
  title, description, quantity, pricePerMeal, rawSubtotal, deliveryFee, gstAmount, grandTotal
}: InvoiceTableProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border overflow-hidden">
        <table className="w-full border-collapse text-xs text-left">
          <thead>
            <tr className="bg-muted/40 border-b border-border text-[9px] uppercase font-black text-muted-foreground tracking-wider">
              <th className="p-3 pl-4">Product Details</th>
              <th className="p-3 text-center">Qty</th>
              <th className="p-3 text-right">Unit Price</th>
              <th className="p-3 text-right pr-4">Subtotal</th>
            </tr>
          </thead>
          <tbody className="font-semibold divide-y divide-border/60">
            <tr>
              <td className="p-3 pl-4 space-y-0.5">
                <strong className="text-foreground font-black text-xs">{title}</strong>
                <p className="text-[10px] text-muted-foreground/80 font-medium leading-tight max-w-sm">{description}</p>
              </td>
              <td className="p-3 text-center text-foreground font-bold">{quantity}</td>
              <td className="p-3 text-right text-foreground font-bold">₹{pricePerMeal}</td>
              <td className="p-3 text-right pr-4 text-foreground font-black">₹{rawSubtotal}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-end text-xs font-semibold space-y-2">
        <div className="w-64 space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="text-foreground">₹{rawSubtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Delivery Charge:</span>
            <span className="text-foreground">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">GST (5%):</span>
            <span className="text-foreground">₹{gstAmount}</span>
          </div>
          <div className="flex justify-between text-foreground font-black text-sm pt-2 border-t border-border/40">
            <span className="uppercase tracking-widest text-[10px]">Grand Total</span>
            <span className="text-primary text-base">₹{grandTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable 5: InvoicePreview
interface InvoicePreviewProps {
  form: any;
  orderInfo: any;
  activePlanObj: any;
  quantity: number;
  rawSubtotal: number;
  deliveryFee: number;
  gstAmount: number;
  grandTotal: number;
  paymentMethod: string;
}

export function InvoicePreview({
  form, orderInfo, activePlanObj, quantity, rawSubtotal, deliveryFee, gstAmount, grandTotal, paymentMethod
}: InvoicePreviewProps) {
  return (
    <div id="alakapuri-print-invoice" className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-xs text-foreground font-semibold leading-relaxed relative overflow-hidden print-invoice-sheet bg-white dark:bg-card">
      
      {/* Printable CSS Page Styles for browser print engine */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * {
            visibility: hidden;
            background: white !important;
            color: black !important;
          }
          #alakapuri-print-invoice, #alakapuri-print-invoice * {
            visibility: visible;
          }
          #alakapuri-print-invoice {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-hidden-button {
            display: none !important;
          }
        }
      `}} />

      {/* Watermark */}
      <div className="absolute top-1/3 left-1/4 -rotate-12 border-4 border-emerald-500/10 text-emerald-500/10 text-3xl font-black uppercase px-6 py-3 rounded-xl pointer-events-none select-none tracking-widest">
        Demo Order
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/80">
        <div>
          <span className="text-xs font-black tracking-widest text-primary block">ALAKAPURI HEALTHY MEALS</span>
          <span className="text-[10px] text-muted-foreground block font-bold mt-0.5">Central Kitchen Hub Kakkanad, Kochi</span>
        </div>
        <div className="text-left sm:text-right">
          <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-0.5 text-[8px] font-black text-emerald-600 uppercase tracking-widest border border-emerald-500/20">
            {paymentMethod === 'cod' ? 'COD - PENDING' : 'PAID'}
          </span>
          <span className="block text-[9px] text-muted-foreground font-bold mt-1">GSTIN: 32AABCA1234F1ZX (DUMMY)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-2">
        <div className="space-y-1">
          <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Billing Coordinates</span>
          <strong className="text-foreground text-sm font-black block">{form.name}</strong>
          <span className="block text-muted-foreground/80 font-medium">{form.address}</span>
          <span className="block text-muted-foreground/80 font-medium">{form.area}, Kochi - {form.pincode}</span>
          <span className="block text-muted-foreground/80 font-medium">Mob: {form.phone}</span>
          {form.email && <span className="block text-muted-foreground/80 font-medium">Email: {form.email}</span>}
        </div>

        <div className="space-y-1 text-left sm:text-right">
          <span className="block text-muted-foreground text-[8px] uppercase tracking-widest font-black">Meta Data</span>
          <span className="block text-foreground font-bold">Invoice No: {orderInfo.invoiceNum || 'INV-2026-001'}</span>
          <span className="block text-muted-foreground/80 font-medium">Invoice Date: {orderInfo.timestamp || new Date().toLocaleString()}</span>
          <span className="block text-muted-foreground/80 font-medium">Order Number: {orderInfo.orderId}</span>
          <span className="block text-muted-foreground/80 font-medium">Payment: {paymentMethod.toUpperCase()}</span>
          {paymentMethod !== 'cod' && <span className="block text-muted-foreground/80 font-medium">Txn ID: {orderInfo.transactionId}</span>}
        </div>
      </div>

      {/* Ordered Items Table */}
      <InvoiceTable 
        title={activePlanObj.title} 
        description={activePlanObj.description} 
        quantity={quantity} 
        pricePerMeal={activePlanObj.pricePerMeal} 
        rawSubtotal={rawSubtotal} 
        deliveryFee={deliveryFee} 
        gstAmount={gstAmount} 
        grandTotal={grandTotal} 
      />

      {/* Terms & Footer Note */}
      <div className="pt-4 border-t border-dashed border-border/80 text-[9px] text-muted-foreground/80 font-semibold space-y-1.5 text-center">
        <p>Thank you for choosing Alakapuri Healthy Meals.</p>
        <p className="text-amber-800 dark:text-amber-300 font-extrabold italic bg-amber-500/5 py-1 px-3 rounded-lg border border-amber-500/10">
          This invoice is generated for demonstration purposes only. No real shipment or delivery is initiated.
        </p>
      </div>

    </div>
  );
}

// Reusable 6: InvoiceActions
interface InvoiceActionsProps {
  onPrint: () => void;
  onDownload: () => void;
  onBackToHome: () => void;
  onContinueShopping: () => void;
}

export function InvoiceActions({
  onPrint, onDownload, onBackToHome, onContinueShopping
}: InvoiceActionsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center pt-2 print-hidden-button select-none">
      <button
        onClick={onPrint}
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-background text-foreground font-black text-xs px-5 uppercase tracking-widest hover:bg-secondary transition-all cursor-pointer shadow-sm"
      >
        <Printer className="h-4 w-4" />
        <span>Print Invoice</span>
      </button>

      <button
        onClick={onDownload}
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-background text-foreground font-black text-xs px-5 uppercase tracking-widest hover:bg-secondary transition-all cursor-pointer shadow-sm"
      >
        <Download className="h-4 w-4" />
        <span>Download PDF</span>
      </button>

      <button
        onClick={onBackToHome}
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-primary text-primary-foreground font-black text-xs px-6 uppercase tracking-widest hover:bg-primary/95 transition-all cursor-pointer shadow-sm"
      >
        <Home className="h-4 w-4" />
        <span>Back to Home</span>
      </button>

      <button
        onClick={onContinueShopping}
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-background text-foreground font-black text-xs px-5 uppercase tracking-widest hover:bg-secondary transition-all cursor-pointer shadow-sm"
      >
        <ShoppingBag className="h-4 w-4" />
        <span>Continue Shopping</span>
      </button>
    </div>
  );
}
