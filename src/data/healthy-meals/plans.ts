import { HealthyMealPlan } from '@/types';

export const HEALTHY_MEAL_PLANS: HealthyMealPlan[] = [
  {
    id: 'weight-loss',
    title: 'Weight Loss Deficit',
    description: 'Low carbohydrate deficit program mapped to clean fat loss goals. Formulated to burn fat and maintain muscle.',
    price: '₹199 / meal',
    calories: '350 kcal',
    protein: '24g Protein',
    color: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    path: '/healthy-meals/weight-loss',
    imageSrc: '/images/category_weight_loss.png',
    features: [
      '350-400 kcal target',
      '24g lean protein focus',
      'Low glycemic indexes',
      'Dietitian scaled menu'
    ]
  },
  {
    id: 'high-protein',
    title: 'High Protein & Gym',
    description: 'Muscle recovery and gym fuel cooked with cold-pressed coconut oils. High-protein boxes to support muscle growth and recovery.',
    price: '₹249 / meal',
    calories: '600 kcal',
    protein: '45g Protein',
    color: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    path: '/healthy-meals/high-protein',
    imageSrc: '/images/category_high_protein.png',
    popular: true,
    features: [
      '550-600 kcal target',
      '45g clean protein focus',
      'Complex carb loading',
      'Recovery diet verified'
    ]
  },
  {
    id: 'balanced',
    title: 'Balanced Diet Boxes',
    description: 'Everyday healthy box for stable energy, clean grains, and low sodium.',
    price: '₹169 / meal',
    calories: '450 kcal',
    protein: '30g Protein',
    color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    path: '/healthy-meals/balanced',
    imageSrc: '/images/category_balanced.png',
    features: [
      'Portion-scaled macros',
      'Regulated local oils',
      'Clean FSSAI standards',
      'No palm oil or MSG'
    ]
  },
  {
    id: 'diabetic',
    title: 'Diabetic Friendly',
    description: 'Glucose-safe diabetic care menus omitting simple sugars. Low-glycemic meals designed to prevent insulin spikes.',
    price: '₹219 / meal',
    calories: '400 kcal',
    protein: '26g Protein',
    color: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
    path: '/healthy-meals/diabetic',
    imageSrc: '/images/category_diabetic.png',
    features: [
      '400 kcal glycemic scale',
      'Insulin friendly grains',
      'Zero refined sugar',
      'Clinical fiber indexes'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate IT Lunches',
    description: 'On-time tech park drops at Infopark and SmartCity desks. Portion-regulated energy lunches delivered to your office desk.',
    price: '₹199 / meal',
    calories: '450 kcal',
    protein: '30g Protein',
    color: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
    path: '/healthy-meals/corporate',
    imageSrc: '/images/category_corporate.png',
    features: [
      'Portion-regulated macros',
      'Free desk delivery',
      'Sustainable hot box packaging',
      'No post-lunch fatigue seasoning'
    ]
  }
];
