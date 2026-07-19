import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Diet & Healthy Subscription Meal Plans | Alakapuri',
  description: 'Explore dietician-designed subscription programs: weight loss deficit menus, gym high-protein plans, diabetic care, and tech park corporate lunch drops.',
});

export default function MealPlansPage() {
  const plans = [
    {
      title: 'Weight Loss deficit',
      path: '/meal-plans/weight-loss',
      desc: 'Low carbohydrate deficit program mapped to clean fat loss goals.',
      price: '₹199 / meal',
      calories: '350 kcal',
      color: 'bg-amber-500/10 text-amber-700 border-amber-500/20'
    },
    {
      title: 'High Protein & Gym',
      path: '/meal-plans/high-protein',
      desc: 'Muscle recovery and gym fuel cooked with cold-pressed coconut oils.',
      price: '₹249 / meal',
      calories: '600 kcal',
      color: 'bg-blue-500/10 text-blue-700 border-blue-500/20'
    },
    {
      title: 'Balanced Diet boxes',
      path: '/meal-plans/balanced',
      desc: 'Everyday healthy box for stable energy, clean grains, and low sodium.',
      price: '₹169 / meal',
      calories: '450 kcal',
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
    },
    {
      title: 'Diabetic Friendly',
      path: '/meal-plans/diabetic',
      desc: 'Glucose-safe diabetic care menus omitting simple sugars.',
      price: '₹219 / meal',
      calories: '400 kcal',
      color: 'bg-purple-500/10 text-purple-700 border-purple-500/20'
    },
    {
      title: 'Corporate IT Lunches',
      path: '/meal-plans/corporate',
      desc: 'On-time tech park drops at Infopark Kakkanad desks.',
      price: '₹199 / meal',
      calories: '450 kcal',
      color: 'bg-orange-500/10 text-orange-700 border-orange-500/20'
    }
  ];

  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label">Clinical Rotations</Typography>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Targeted Wellness Programs
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed">
            Choose a portion-regulated plan configured under guidelines from our in-house nutritionists.
          </Typography>
        </div>

        {/* Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${p.color}`}>
                  {p.calories} • {p.price}
                </span>
                <Typography variant="h3" className="text-lg font-bold text-foreground">
                  {p.title}
                </Typography>
                <Typography variant="body-regular" className="text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </Typography>
              </div>

              <div className="pt-6">
                <Link
                  href={p.path}
                  className="flex h-10 w-full items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                >
                  View Menu Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
