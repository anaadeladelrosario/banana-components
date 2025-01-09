import React from 'react';
import './tile.css';

interface TileProps {
  image?: string;
  title?: string;
  description?: string;
  onClick: () => void;
  buttonText?: string;
  onButtonClick?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Tile({ image, title, description, onClick,style, children, }: TileProps) {
  return (
    <div className="tile" style={style} onClick={onClick}>
      {image && <img src={image} alt={title} />}
      <h3 >{title}</h3>
      <p >{description}</p>
      {children}
    </div>
  );
}