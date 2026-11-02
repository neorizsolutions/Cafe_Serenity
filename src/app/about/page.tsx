import AboutSection from '@/components/home/AboutSection';
import { constructMetadata } from '@/utils/seo';
export const metadata = constructMetadata({title:'About Café Serenity | Kakkanad',description:'Biriyani, Kerala snacks and everyday café favourites in Kakkanad, Kochi.',path:'/about'});
export default function AboutPage(){ return <AboutSection standalone />; }


// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import { constructMetadata } from '@/utils/seo';
// 
// export const metadata = constructMetadata({
//   title: 'About Our Story & Kitchen Standards | Café Serenity Kakkanad',
//   description: 'Learn about Café Serenity standards: portion-conscious meals, cold-pressed local oils, and certified clean kitchen prep in Kochi.',
//   path: '/about',
// });
// 
// export default function AboutPage() {
//   return (
//     <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24 space-y-20">
//       {/* Introduction block */}
//       <div className="text-center max-w-3xl mx-auto space-y-4">
//         <span className="inline-flex rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
//           Our Story & Standards
//         </span>
//         <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
//           Good Food, Made Simple in Kerala
//         </h1>
//         <p className="text-lg text-muted-foreground leading-relaxed">
//           At Café Serenity, we believe eating well shouldn&apos;t be complicated. We combine culinary care with thoughtful nutrition to serve clean, portion-conscious meals that make you feel at home.
//         </p>
//       </div>
// 
//       {/* Standards Section */}
//       <div className="space-y-8">
//         <h2 className="text-2xl font-bold tracking-tight text-foreground text-center">The Café Serenity Standards</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="border border-border p-6 rounded-2xl bg-card space-y-3">
//             <span className="block text-3xl font-extrabold text-primary">0%</span>
//             <h4 className="text-base font-bold text-foreground">Zero Preservatives & MSG</h4>
//             <p className="text-xs text-muted-foreground leading-relaxed">
//               We never use food colorings, synthetic preservatives, artificial sweeteners, or hidden MSG. What you see is exactly what is inside your meal.
//             </p>
//           </div>
//           <div className="border border-border p-6 rounded-2xl bg-card space-y-3">
//             <span className="block text-3xl font-extrabold text-primary">100%</span>
//             <h4 className="text-base font-bold text-foreground">Cold-Pressed Local Oils</h4>
//             <p className="text-xs text-muted-foreground leading-relaxed">
//               We strictly avoid cheap palm oils or highly processed vegetable oils. We prepare our dishes using measured quantities of cold-pressed coconut oil, sesame oil, or olive oil.
//             </p>
//           </div>
//           <div className="border border-border p-6 rounded-2xl bg-card space-y-3">
//             <span className="block text-3xl font-extrabold text-primary">FSSAI</span>
//             <h4 className="text-base font-bold text-foreground">Clean Kitchen Practices</h4>
//             <p className="text-xs text-muted-foreground leading-relaxed">
//               Our meals are prepared in clean, well-maintained kitchens that operate under standard hygiene practices and water-filtration systems. FSSAI No. 21324005000123.
//             </p>
//           </div>
//         </div>
//       </div>
// 
//       {/* Culinary Backing */}
//       <div className="rounded-3xl border border-border bg-secondary/25 p-8 md:p-12 space-y-6 flex flex-col md:flex-row gap-8 items-center">
//         <div className="space-y-4 md:w-2/3">
//           <h3 className="text-2xl font-bold text-foreground">Thoughtfully Prepared, Chef-Crafted</h3>
//           <p className="text-sm text-muted-foreground leading-relaxed">
//             Every item on our menu is prepared with care. We use simple, high-quality ingredients and traditional spices to ensure our clean food remains appetizing, comforting, and full of familiar flavors.
//           </p>
//         </div>
//         <div className="border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8 space-y-4 md:w-1/3 text-sm">
//           <div>
//             <span className="block font-bold text-foreground">Our Kitchen Team</span>
//             <span className="text-xs text-muted-foreground">Dedicated to fresh, daily preparations</span>
//           </div>
//           <div>
//             <span className="block font-bold text-foreground">Chef Thomas Mathew</span>
//             <span className="text-xs text-muted-foreground">Culinary Director</span>
//           </div>
//         </div>
//       </div>
// 
//       {/* Mission & Vision */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
//         <div className="space-y-3">
//           <h3 className="text-xl font-bold text-foreground">Our Purpose</h3>
//           <p className="text-sm text-muted-foreground leading-relaxed">
//             To provide thoughtful, balanced, and delicious meals that make enjoying good food simple and affordable for our local community.
//           </p>
//         </div>
//         <div className="space-y-3">
//           <h3 className="text-xl font-bold text-foreground">Our Promise</h3>
//           <p className="text-sm text-muted-foreground leading-relaxed">
//             To remain a welcoming café where you can always find a comforting cup of tea, a warm breakfast, or a reliable everyday meal.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
