import { useState } from 'react';
import './header.css';
import { Navigation } from '../Navigation/Navigation';


export interface User {
  name: string;
  avatar?: string;
}

export interface HeaderProps {
  title: string;
  logo?: string;
  user?: User;
  isSearch?:boolean;
  onSearch?: (query: string) => void;
  children?: React.ReactNode;
}

export const Header = ({ title, logo, user, isSearch, onSearch, children }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="responsive-header">
      <div className="header-container">
        {/* Left section */}
        <div className="header-left">
          <Navigation menuItems={[
     { label: "one"  },
     { label: "two" }, 
     { label: "three"}
   ]}/>
          {logo && (<img style={{width: '34px', height: '34px', padding: '10px'}} alt="logo" src={logo}/>)}
          {title && (<h1 className="header-title">{title}</h1>)}
        </div>

        {/* Center section */}
        <div className="header-center">
           {isSearch && (
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
              </button>
            </div>
          </form>)}
          {children}
        </div>

        {/* Right section */}
        <div className="header-right">
          {user && (
            <div className="user-profile">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="user-avatar" />
              ) : (
                <></>
              ) }<div className="user-avatar-placeholder">
                  {user.name.charAt(0).toUpperCase()}
                </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};