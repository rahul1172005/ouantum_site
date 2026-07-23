import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './ScrollReveal.css';

interface ScrollRevealProps {
  children: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  textColor?: string;
  containerClassName?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  baseOpacity: number;
  enableBlur: boolean;
  textColor: string;
}

const Word: React.FC<WordProps> = ({
  word,
  index,
  total,
  progress,
  baseOpacity,
  enableBlur,
  textColor,
}) => {
  const start = index / total;
  const end = Math.min(1, start + (1 / total) * 1.5);

  const opacity = useTransform(progress, [start, end], [baseOpacity, 1]);
  const y = useTransform(progress, [start, end], [4, 0]);
  const blurVal = useTransform(progress, [start, end], [enableBlur ? 3 : 0, 0]);

  return (
    <motion.span
      className="sr-word"
      style={{
        opacity,
        y,
        filter: enableBlur ? useTransform(blurVal, (v) => `blur(${v}px)`) : undefined,
        display: 'inline-block',
        marginRight: '0.28em',
        color: textColor,
        willChange: 'opacity, transform',
      }}
    >
      {word}
    </motion.span>
  );
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  enableBlur = false,
  baseOpacity = 0.12,
  textColor,
  containerClassName = '',
  textClassName = '',
  style,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'end 0.35'],
  });

  const words = typeof children === 'string' ? children.trim().split(/\s+/) : [];
  const effectiveColor = textColor || (style?.color as string) || '#ffffff';

  return (
    <p
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`}
      style={{
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      <span className={`scroll-reveal-text ${textClassName}`} style={{ display: 'inline' }}>
        {words.map((word, i) => (
          <Word
            key={`${word}-${i}`}
            word={word}
            index={i}
            total={words.length}
            progress={scrollYProgress}
            baseOpacity={baseOpacity}
            enableBlur={enableBlur}
            textColor={effectiveColor}
          />
        ))}
      </span>
    </p>
  );
};

export default ScrollReveal;
