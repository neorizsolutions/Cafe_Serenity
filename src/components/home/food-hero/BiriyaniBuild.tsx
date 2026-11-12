'use client';

import Image from 'next/image';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { biriyaniPose, type BiriyaniIngredient } from './biriyaniMotion';
import styles from './CircleHero.module.css';

function Ingredient({ progress, kind, index = 0 }: { progress: MotionValue<number>; kind: BiriyaniIngredient; index?: number }) {
  const x = useTransform(progress, p => `${biriyaniPose(p, kind, index).x}%`);
  const y = useTransform(progress, p => `${biriyaniPose(p, kind, index).y}%`);
  const rotate = useTransform(progress, p => biriyaniPose(p, kind, index).rotate);
  const scale = useTransform(progress, p => biriyaniPose(p, kind, index).scale);
  const opacity = useTransform(progress, p => biriyaniPose(p, kind, index).opacity);
  return <motion.div data-biriyani-ingredient={`${kind}-${index}`} className={`${styles.biriyaniLayer} ${styles[kind]}`} style={{ x, y, rotate, scale, opacity }}>
    <Image src={kind === 'rice' ? '/images/motion-study/biriyani-layer-masala-rice.webp' : kind === 'chicken' ? '/images/motion-study/biriyani-layer-dum-chicken.webp' : index === 0 ? '/images/motion-study/biriyani-side-pickle.webp' : '/images/motion-study/biriyani-side-raita.webp'} alt="" width={1254} height={1254} sizes={kind === 'rice' ? '(max-width:700px) 80vw, 50vw' : '(max-width:700px) 35vw, 22vw'} loading="eager" />
  </motion.div>;
}

export default function BiriyaniBuild({ progress, reduced }: { progress: MotionValue<number>; reduced: boolean }) {
  const x = useTransform(progress, [0, .65, .75, 1], ['70%', '70%', '0%', '0%']);
  const y = useTransform(progress, [0, .65, .75, 1], ['20%', '20%', '0%', '0%']);
  const rotate = useTransform(progress, [0, .65, .76, 1], [-18, -18, 0, 0]);
  const scale = useTransform(progress, [0, .65, .76, 1], [.8, .8, 1, 1]);
  const opacity = useTransform(progress, [0, .66, .74, 1], [0, 0, 1, 1]);
  const steamOpacity = useTransform(progress, [.95, .98, 1], [0, reduced ? 0 : .3, reduced ? 0 : .3]);
  const steamY = useTransform(progress, [.95, 1], [8, -8]);
  return <motion.div className={styles.biriyaniBuild} data-biriyani-build style={{ x, y, rotate, scale, opacity }}>
    <div className={styles.biriyaniMain}><div className={styles.biriyaniLayer}><Image src="/images/motion-study/biriyani-layer-bowl.webp" alt="" width={1254} height={1254} sizes="(max-width:700px) 85vw, 53vw" loading="eager" /></div>
    <Ingredient kind="rice" progress={progress} />
    {[0, 1].map(index => <Ingredient key={`chicken-${index}`} kind="chicken" index={index} progress={progress} />)}
    </div>
    {[0, 1].map(index => <Ingredient key={`sides-${index}`} kind="sides" index={index} progress={progress} />)}
    <motion.svg className={styles.biriyaniVapour} viewBox="0 0 100 100" fill="none" style={{ opacity: steamOpacity, y: steamY }} aria-hidden="true"><path d="M43 31 C38 25 47 22 43 16 M52 28 C47 22 56 19 52 12 M61 33 C56 27 65 24 61 18" stroke="#fff2d4" strokeWidth="1" strokeLinecap="round" /></motion.svg>
  </motion.div>;
}