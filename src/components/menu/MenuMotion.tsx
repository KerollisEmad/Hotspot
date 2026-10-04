"use client";

import { ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

/** +1 = يدخل من اليمين (إنجليزي) | -1 = يدخل من الشمال (عربي) */
function useEnterSide() {
  const { language } = useLanguage();
  return language === "ar" ? -1 : 1;
}

export function MenuMotion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** دخول أقسام الصفحة (الهيدر والهيرو والناف والفوتر) من جنب حسب اللغة */
export function EntranceReveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const side = useEnterSide();

  return (
    <motion.div
      initial={{ opacity: 0, x: side * 56 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** حاوية الكروت: بتطلّعهم واحد ورا التاني */
export function StaggerList({
  children,
  className,
  dir,
}: {
  children: ReactNode;
  className?: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <motion.div
      className={className}
      dir={dir}
      variants={listVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

/** كل كارد: الكارد الكبير بيطلع بتكبير، والباقي بيدخل مرة من اليمين ومرة من الشمال */
export function StaggerItem({
  children,
  index = 0,
  featured = false,
}: {
  children: ReactNode;
  index?: number;
  featured?: boolean;
}) {
  const side = useEnterSide();
  const alternate = index % 2 === 0 ? 1 : -1;

  const variants: Variants = {
    hidden: featured
      ? { opacity: 0, scale: 0.9, y: 24 }
      : { opacity: 0, x: side * alternate * 48, scale: 0.96 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 24 },
    },
  };

  return <motion.div variants={variants}>{children}</motion.div>;
}
