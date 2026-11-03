import Hero from '@/components/home/Hero';
import { MenuOrientation, PortionGuide, FAQPreview } from '@/components/home/RestaurantExtras';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
export default function Page() { return <><Hero /><MenuOrientation /><PortionGuide /><AboutSection /><FAQPreview /><ContactSection /></>; }

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import Hero from '@/components/home/Hero';
// import Offerings from '@/components/home/Offerings';
// import WhyChooseUs from '@/components/home/WhyChooseUs';
// import HowItWorks from '@/components/home/HowItWorks';
// import MealExperience from '@/components/healthy-choices/MealExperienceSection';
// import CafeMenu from '@/components/cafe-menu/CafeMenuSection';
// import TrustCenter from '@/components/home/TrustCenter';
// import VisitUs from '@/components/home/VisitUs';
// import FinalConversion from '@/components/home/FinalConversion';
// 
// export default function Page() {
//   return (
//     <>
//       {/* Homepage Hero Section */}
//       <Hero />
// 
//       {/* Offerings Selector Section */}
//       <Offerings />
// 
//       {/* Why Choose Us Benefits Section */}
//       <WhyChooseUs />
// 
//       {/* How It Works (Restaurant Journey) */}
//       <HowItWorks />
// 
//       {/* Healthy Choices Showcase */}
//       <MealExperience />
// 
//       {/* Café Menu Favourites Section */}
//       <CafeMenu />
// 
//       {/* Trust & Kitchen Safety Center */}
//       <TrustCenter />
// 
//       {/* Visit Us / Location Section */}
//       <VisitUs />
// 
//       {/* Final Conversion CTA & Location Section */}
//       <FinalConversion />
//     </>
//   );
// }
