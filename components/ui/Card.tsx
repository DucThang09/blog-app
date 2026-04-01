import { clsx } from 'clsx';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className,
  padding = 'md',
}: CardProps) {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={clsx(
        'card bg-white border border-gray-100 shadow-sm rounded-xl transition-all hover:shadow-md',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
