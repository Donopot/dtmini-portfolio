"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 2, suffix: " ans", label: "chez ChangeNOW", prefix: "" },
  { value: 10000, suffix: "+", label: "contacts consolidés", prefix: "" },
  { value: 200, suffix: "", label: "fichiers standardisés", prefix: "~" },
  { value: 2023, suffix: "", label: "depuis ma reconversion tech", prefix: "" },
];

function AnimatedCounter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(value); // SSR: show real value immediately
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (animated) return;
    setAnimated(true);
    setCount(0); // Reset to animate from 0
  }, [animated]);

  useEffect(() => {
    if (!animated) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.ceil(value / (duration / 16)));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [animated, value]);

  return (
    <span className="text-3xl sm:text-4xl font-bold text-brand-700 dark:text-brand-400 tabular-nums">
      {prefix}{count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
