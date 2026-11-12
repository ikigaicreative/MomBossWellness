import React from "react";

export interface AvatarProps {
  name?: string;
  src?: string | null;
  size?: number;
}

export interface BadgeProps {
  children: React.ReactNode;
  tone?: "evergreen" | "gold" | "plum" | "rose" | "soft";
}

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. primary = filled evergreen, secondary = filled plum, gold = filled crown gold, ghost = transparent with hairline border, outline = transparent with colored border */
  variant?: "primary" | "secondary" | "gold" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export interface CardProps {
  children: React.ReactNode;
  padding?: string;
  /** Use a heavier shadow for a card that should visually float above the page (e.g. a modal or featured card) */
  elevated?: boolean;
}

export interface AlertProps {
  tone?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export interface SelectProps {
  label?: string;
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SwitchProps {
  checked?: boolean;
  onChange?: () => void;
  label?: React.ReactNode;
}

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface FooterProps {
  /** Path to the workmark SVG, relative to the consuming page */
  logoSrc?: string;
}

export interface NavBarProps {
  links?: string[];
  activeLink?: string;
  onNav?: (link: string) => void;
  cta?: string;
  /** Path to the workmark SVG, relative to the consuming page */
  logoSrc?: string;
}

export interface TabsProps {
  items: string[];
  active: string;
  onChange: (item: string) => void;
}
