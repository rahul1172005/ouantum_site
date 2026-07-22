import React from 'react';

interface WordHoverProps {
  children?: React.ReactNode;
  text?: string;
  style?: React.CSSProperties;
  color?: string;
  hoverColor?: string;
}

export const WordHover: React.FC<WordHoverProps> = ({
  children,
  text,
  style,
  color,
  hoverColor,
}) => {
  const baseColor = color ?? 'rgba(255, 255, 255, 0.65)';
  const onHoverColor = hoverColor ?? '#ffffff';

  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      const words = node.split(/(\s+)/);
      return words.map((word, index) => {
        if (/\s+/.test(word)) {
          return word;
        }
        return (
          <span
            key={index}
            style={{
              color: 'inherit',
              transition: 'color 0.3s ease',
              cursor: 'default',
              display: 'inline-block',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = onHoverColor;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'inherit';
            }}
          >
            {word}
          </span>
        );
      });
    }
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>;
      const childElements = processNode(element.props.children);
      return React.cloneElement(element, { ...element.props }, childElements);
    }
    if (Array.isArray(node)) {
      return node.map((child, idx) => <React.Fragment key={idx}>{processNode(child)}</React.Fragment>);
    }
    return node;
  };

  const content = children !== undefined ? children : text;

  return (
    <span
      style={{
        display: 'inline',
        color: baseColor,
        transition: 'color 0.3s ease',
        ...style,
      }}
    >
      {processNode(content)}
    </span>
  );
};
