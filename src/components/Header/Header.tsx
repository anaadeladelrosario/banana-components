import { useState } from 'react';
import './Header.css';


interface User {
  name: string;
  avatar?: string;
}

export interface HeaderProps {
  title: string;
  user?: User;
  onSearch?: (query: string) => void;
}

export const Header = ({ title, user, onSearch }: HeaderProps) => {
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
          <h1 className="header-title">{title}</h1>
        </div>

        {/* Center section */}
        <div className="header-center">
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
          </form>
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