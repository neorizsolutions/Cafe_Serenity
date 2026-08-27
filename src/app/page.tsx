import Hero from '@/components/home/Hero';
import Offerings from '@/components/home/Offerings';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import MealExperience from '@/components/healthy-meals/MealExperienceSection';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/healthy-meals/PricingSection';
import CafeMenu from '@/components/cafe-menu/CafeMenuSection';
import DeliveryPartners from '@/components/home/DeliveryPartners';
import SocialProof from '@/components/home/SocialProof';
import TrustCenter from '@/components/home/TrustCenter';
import VisitUs from '@/components/home/VisitUs';
import FinalConversion from '@/components/home/FinalConversion';

export default function Page() {
  return (
    <>
      {/* Homepage Hero Section */}
      <Hero />

      {/* Offerings Selector Section */}
      <Offerings />

      {/* Why Choose Us Benefits Section */}
      <WhyChooseUs />

      {/* Meal Experience & Categories Section */}
      <MealExperience />

      {/* Subscription Timeline & Stepper Section */}
      <HowItWorks />

      {/* Subscriptions Pricing Section */}
      <Pricing />

      {/* Café Menu Favourites Section */}
      <CafeMenu />

      {/* Our Delivery Partners Section */}
      <DeliveryPartners />

      {/* Social Proof & Customer Reviews Section */}
      <SocialProof />

      {/* Trust & Safety Center (FAQ & Hygiene) */}
      <TrustCenter />

      {/* Visit Us / Location Section */}
      <VisitUs />

      {/* Final Conversion CTA & Location Section */}
      <FinalConversion />
    </>
  );
}
