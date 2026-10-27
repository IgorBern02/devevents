import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
