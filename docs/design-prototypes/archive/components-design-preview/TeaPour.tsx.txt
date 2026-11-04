'use client';

import Image from 'next/image';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { teaPourPose } from './teaMotion';
import styles from './CircleHero.module.css';

export default function TeaPour({ progress, reduced }: { progress: MotionValue<number>; reduced: boolean }) {
  const x = useTransform(progress, [0, .27, .37, .61, .78, 1], ['75%', '75%', '0%', '0%', '-80%', '-80%']);
  const y = useTransform(progress, [0, .27, .37, .61, .78, 1], ['20%', '20%', '0%', '0%', '-18%', '-18%']);
  const rotate = useTransform(progress, [0, .27, .37, .61, .78, 1], [5, 5, 0, 0, -6, -6]);
  const opacity = useTransform(progress, [0, .27, .37, .63, .78, 1], [0, 0, 1, 1, 0, 0]);
  const clipPath = useTransform(progress, p => `inset(${teaPourPose(p).revealTop}% 0 0 0)`);
  const emptyOpacity = useTransform(progress, [0, .54, .57, 1], [.7, .7, 0, 0]);
  const fullOpacity = useTransform(progress, [.545, .565], [0, 1]);
  const surfaceY = useTransform(progress, p => teaPourPose(p).surfaceY);
  const radius = useTransform(progress, p => teaPourPose(p).surfaceWidth / 2);
  const streamPath = useTransform(progress, p => {
    const bottom = teaPourPose(p).surfaceY;
    const sway = Math.sin(p * 155) * .22;
    // A filled, tapering ribbon has a liquid silhouette instead of a uniform outlined tube.
    return `M 51.5 -8 C 50.8 5 ${48.8 + sway} 15 ${48.9 + sway} 25 Q 49.1 ${(25 + bottom) / 2} 48.4 ${bottom} Q 50 ${bottom + 1.1} 51.6 ${bottom} Q 50.8 ${(25 + bottom) / 2} ${51.1 + sway} 25 C ${51.3 + sway} 14 53.2 5 54.5 -8 Z`;
  });
  const streamHighlight = useTransform(progress, p => `M 52.4 -8 C 51.7 5 ${49.7 + Math.sin(p * 155) * .22} 15 49.9 25 L 49.9 ${teaPourPose(p).surfaceY}`);
  const streamOpacity = useTransform(progress, p => reduced ? 0 : teaPourPose(p).stream);
  const rippleOpacity = useTransform(progress, p => reduced ? 0 : teaPourPose(p).ripple);
  const steamOpacity = useTransform(progress, p => reduced ? 0 : teaPourPose(p).steam);
  const steamY = useTransform(progress, [.55, .67], [5, -8]);
  return <motion.div className={styles.teaScene} data-tea-pour style={{ x, y, rotate, opacity }}>
    <div className={styles.glassArtwork}>
      <motion.div className={styles.liquidLayer} style={{ opacity: emptyOpacity }}><Image className={styles.emptyGlass} src="/images/motion-study/hero-chaaya-empty.png" alt="" width={1118} height={1407} sizes="(max-width:700px) 65vw, 38vw" loading="eager" /></motion.div>
      <motion.div className={styles.liquidLayer} style={{ clipPath }}><Image src="/images/motion-study/hero-sculpted-chaaya.png" alt="" width={1220} height={1289} sizes="(max-width:700px) 65vw, 38vw" loading="eager" /></motion.div>
      <motion.div className={styles.liquidLayer} style={{ opacity: fullOpacity }}><Image src="/images/motion-study/hero-sculpted-chaaya.png" alt="" width={1220} height={1289} sizes="(max-width:700px) 65vw, 38vw" loading="eager" /></motion.div>
    </div>
    <svg className={styles.pourEffects} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs><linearGradient id="serenity-tea-stream" x1="0%" y1="0%" x2="100%" y2="0%"><stop stopColor="#a66732" /><stop offset=".4" stopColor="#dfaa65" /><stop offset=".7" stopColor="#d79a50" /><stop offset="1" stopColor="#ad6e34" /></linearGradient></defs>
      <motion.ellipse cx="50" cy={surfaceY} rx={radius} ry="2.2" fill="#c98c4c" style={{ opacity: streamOpacity }} />
      <motion.ellipse cx="50" cy={surfaceY} rx={radius} ry="2.2" stroke="#f4d49d" strokeWidth=".35" style={{ opacity: rippleOpacity }} />
      <motion.ellipse cx="50" cy={surfaceY} rx="4.2" ry=".8" stroke="#ffe1a5" strokeWidth=".3" style={{ opacity: rippleOpacity }} />
      <motion.ellipse cx="50" cy={surfaceY} rx="2.5" ry=".8" fill="#f3cc8d" style={{ opacity: rippleOpacity }} />
      <motion.path d={streamPath} fill="url(#serenity-tea-stream)" style={{ opacity: streamOpacity }} />
      <motion.path d={streamHighlight} stroke="#f5d093" strokeWidth=".32" strokeOpacity=".45" style={{ opacity: streamOpacity }} />
      <motion.g style={{ opacity: steamOpacity, y: steamY }} stroke="#fff2d4" strokeWidth=".6" strokeLinecap="round" className={styles.teaVapour}>
        <path d="M43 29 C38 24 47 21 43 16" /><path d="M50 27 C45 22 54 19 50 12" /><path d="M57 29 C52 25 61 22 57 17" />
      </motion.g>
    </svg>
  </motion.div>;
}