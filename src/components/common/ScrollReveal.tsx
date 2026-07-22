import './ScrollReveal.css';

interface ScrollRevealProps {
  children: string;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  style?: React.CSSProperties;
}

const ScrollReveal = ({
  children,
  containerClassName = '',
  textClassName = '',
  style,
}: ScrollRevealProps) => {
  return (
    <p
      className={`scroll-reveal ${containerClassName}`}
      style={style}
    >
      <span className={`scroll-reveal-text ${textClassName}`}>
        {children}
      </span>
    </p>
  );
};

export default ScrollReveal;

