'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [expandedId, setExpandedId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = expandedId === item.id;
        return (
          <div
            key={item.id}
            className="border border-slate-800 rounded-xl bg-slate-900/60 overflow-hidden transition-colors hover:border-slate-700"
          >
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200",
                  isOpen && "transform rotate-180 text-emerald-400"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 sm:p-5 pt-0 text-sm text-slate-300 border-t border-slate-800/50 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
