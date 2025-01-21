import React from 'react';
import '../../styles/tokens.css';
import styled from 'styled-components';

interface TileProps {
  title?: string;
  onClick: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Tile({ title, onClick,style, children, }: TileProps) {
  return (
    <TileStyled className="tile" style={style} onClick={onClick}>
      <h3 >{title}</h3>
      {children}
    </TileStyled>
  );
}

const TileStyled = styled.div<{className:string}>`
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin: 12px 0;
  font-size: var(--font-size-lg);
  margin: 0 auto;
  font-weight: 600;
  margin-bottom: 12px;
`;