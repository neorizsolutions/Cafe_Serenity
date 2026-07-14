import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-4">
      <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="space-y-2">
        <Typography variant="h3" className="text-base font-bold text-foreground">
          {title}
        </Typography>
        <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground">
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const whatsappLink = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I'd like to check how your meal boxes compare to office catering. Please share menu details."
  )}`;

  return (
    <Section bg="muted" className="relative border-t border-border">
      <Container className="space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label">The Alakapuri Difference</Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Why Choose Alakapuri Healthy Meals?
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We are not a restaurant. We are a specialized wellness platform combining clinical dietary principles with fresh local ingredients.
          </Typography>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={
              <svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Portion-Weighed Macros"
            description="Every meal box has calories, protein, carbs, and fats printed directly on the box. No guesswork, just clean numbers."
          />
          <FeatureCard
            icon={
              <svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 006.1 1.908z" />
              </svg>
            }
            title="Cold-Pressed Oils Only"
            description="We cook exclusively using portion-regulated local coconut oil, olive oil, and sesame oil. We never reuse cooking oils."
          />
          <FeatureCard
            icon={
              <svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            }
            title="12-Hour Flexi-Freeze"
            description="Going out of town? Just alert us on WhatsApp 12 hours prior to freeze your delivery and rollover your subscription credits."
          />
          <FeatureCard
            icon={
              <svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            }
            title="FSSAI Hygienic Cooking"
            description="Our central kitchens enforce absolute glove-wearing policies, water-filtration systems, and clean metal packing standards."
          />
        </div>

        {/* Benefits Comparison Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground">
              Visual Platform Comparison
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground">
              How Alakapuri healthy subscriptions differ from typical restaurant takeaway delivery.
            </Typography>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-border bg-secondary/15 text-foreground font-extrabold uppercase tracking-wider text-[10px]">
                  <th scope="col" className="p-4 sm:p-5">Dietary Metric</th>
                  <th scope="col" className="p-4 sm:p-5">Typical Restaurant Delivery</th>
                  <th scope="col" className="p-4 sm:p-5 text-primary">Alakapuri Healthy Subscriptions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/80 font-medium">
                <tr>
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground">Oil & Fats Usage</td>
                  <td className="p-4 sm:p-5">Generous amount of palm or hydrogenated oil, reused deep-fry batches.</td>
                  <td className="p-4 sm:p-5 text-primary">Measured portion of cold-pressed local coconut, sesame, or olive oils.</td>
                </tr>
                <tr>
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground">Nutrition & Macros</td>
                  <td className="p-4 sm:p-5">High sodium, refined sugars, chemical thickeners, hidden MSG flavorings.</td>
                  <td className="p-4 sm:p-5 text-primary">Clean low-sodium recipes, zero MSG or colors, low-GI sweeteners.</td>
                </tr>
                <tr>
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground">Scheduling Flex</td>
                  <td className="p-4 sm:p-5">Order-on-demand pricing fluctuations, delivery rider delays.</td>
                  <td className="p-4 sm:p-5 text-primary">Pre-arranged daily transit hubs drop boxes off directly at Infopark/Technopark.</td>
                </tr>
                <tr>
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground">Consistency & Costs</td>
                  <td className="p-4 sm:p-5">Varied taste profiles daily, heavy wallet drains (₹200+ per order).</td>
                  <td className="p-4 sm:p-5 text-primary">Dietitian-reviewed menu rotations starting at just ₹69 / meal box.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Micro-Stats / Conversion Block */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-xl space-y-4">
            <Typography variant="badge-label">Start Your Journey</Typography>
            <Typography variant="h3" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ready to take control of your daily nutrition?
            </Typography>
            <Typography variant="body-regular" className="text-sm text-muted-foreground leading-relaxed">
              Join thousands of office employees, gym-goers, and healthy families in Kochi and Trivandrum subscribing to dietitian-designed meals.
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95 transition-colors"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/meal-plans"
              className="flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              See Pricing Plans
            </Link>
          </div>
        </div>

      </Container>
    </Section>
  );
}
