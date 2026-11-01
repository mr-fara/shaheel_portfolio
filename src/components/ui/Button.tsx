import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 font-medium tracking-[0.1em] uppercase text-xs transition-all duration-300 ease-out whitespace-nowrap cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[#B49A72] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizeClasses = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3.5 text-xs',
    lg: 'px-8 py-4 text-xs'
  };

  const variantClasses = {
    primary:
      'bg-[#B49A72] text-[#101010] hover:bg-[#C9B28D] active:scale-[0.98]',
    secondary:
      'bg-[#191919] text-[#F5F2EC] border border-[#2A2A2A] hover:border-[#B49A72] hover:bg-[#242424] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#F5F2EC] border border-[#898781]/40 hover:border-[#F5F2EC] hover:bg-[#FFFFFF]/5 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#F5F2EC] hover:text-[#B49A72] px-2 py-1'
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClasses}
      >
        <span>{children}</span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
