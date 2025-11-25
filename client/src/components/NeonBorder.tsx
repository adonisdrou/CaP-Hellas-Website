import { ReactNode } from 'react';

interface NeonBorderProps {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'accent' | 'mixed';
}

export default function NeonBorder({ children, className = '', color = 'mixed' }: NeonBorderProps) {
  const colorClass = {
    primary: 'shadow-[0_0_20px_hsl(130_50%_28_/_0.8),_inset_0_0_20px_hsl(130_50%_28_/_0.3)]',
    accent: 'shadow-[0_0_20px_hsl(20_85%_55_/_0.8),_inset_0_0_20px_hsl(20_85%_55_/_0.3)]',
    mixed: 'shadow-[0_0_30px_hsl(130_50%_28_/_0.6),_0_0_60px_hsl(20_85%_55_/_0.4),_inset_0_0_20px_hsl(130_50%_28_/_0.2)]',
  };

  return (
    <div className={`${colorClass[color]} ${className} transition-shadow duration-300 hover:shadow-[0_0_40px_hsl(130_50%_28_/_1),_0_0_80px_hsl(20_85%_55_/_0.6)]`}>
      {children}
    </div>
  );
}
