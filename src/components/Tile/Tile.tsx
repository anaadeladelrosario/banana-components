import React from 'react';
import { Button } from '../Button/Button';
import './tile.css';

interface TileProps {
  image?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  buttonText?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Tile({ image, title, description, onClick, buttonText = 'Learn More', style, children, }: TileProps) {
  return (
    <div className="tile" style={style} onClick={onClick}>
      {image && <img src={image} alt={title} />}
      <h3 >{title}</h3>
      <p >{description}</p>
      {buttonText && <Button onClick={()=>onClick}>{buttonText}</Button>}
      {children}
    </div>
  );
}