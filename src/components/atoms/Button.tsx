import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  className
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        clsx(
          "px-4 py-2 rounded-md font-bold text-white transition-colors",
          variant === 'primary' ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 hover:bg-gray-600",
          className
        )
      )}
    >
      {label}
    </motion.button>
  );
};