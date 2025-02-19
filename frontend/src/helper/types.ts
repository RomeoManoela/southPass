import React from 'react';

export interface errorType {
  message?: string;
  data?: string;
  error?: string;
  action?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
  loadingMessage?: string;
}

export interface formDataProps {
  username: string;
  password: string;
  actionType?: string;
}

export interface userState {
  username: string;
  id: null | number;
  passwords: passwordItem[];
}

export interface passwordItem {
  id: number;
  title: string;
  description: string;
  created_at: string;
  deleted: boolean;
  password: string;
}
