import React, { ReactNode } from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'label';
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const renderTypography = () => {
    const classNames = `typography ${className || ''}`;

    switch (variant) {
      case 'h1':
        return <h1 className={`font-black text-center leading-tight text-[2.35rem] sm:text-[2.5rem] md:text-6xl ${className}`}>{children}</h1>;
      case 'h2':
        return <h2 className={`font-bold text-center leading-8 text-[1.75rem] sm:text-[2rem] md:text-5xl ${className}`}>{children}</h2>;
      case 'h3':
        return <h3 className={`font-extrabold text-center text-2xl leading-normal  ${className}`}>{children}</h3>;
      case 'h4':
        return <h4 className={`${className}`}>{children}</h4>;
      case 'h5':
        return <h5 className={`${className}`}>{children}</h5>;
      case 'h6':
        return <h6 className={`${className}`}>{children}</h6>;
      case 'p':
        return <p className={`${className}`}>{children}</p>;
      case 'span':
        return <span className={`${className}`}>{children}</span>;
      case 'label':
        return <span className={`text-2xl font-extrabold text-center  leading-normal ${className}`}>{children}</span>;
      case 'strong':
        return <strong className={`${className}`}>{children}</strong>;
      default:
        return <p className={`${className}`}>{children}</p>;
    }
  };

  return renderTypography();
};

export default Typography;