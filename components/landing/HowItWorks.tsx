"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { steps } from "@/lib/constants";

export const HowItWorks = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          How To Earn 💸
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
          Get paid for contributing to open source in 4 simple steps
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            <div
              className={cn(
                "relative p-6 rounded-2xl border bg-gradient-to-br",
                step.color,
                step.borderColor,
                "hover:scale-105 transition-transform duration-300"
              )}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-bold text-white">
                {index + 1}
              </div>

              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
