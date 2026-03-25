"use client";

import React from 'react';
import styles from './ThemeToggle.module.css';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.toggleBtn} 
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
