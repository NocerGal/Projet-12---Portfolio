import { useState, useEffect } from 'react';

function Header({ logo, alt }) {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseOver = (index) => {
    setIsHovered(index);
  };

  const handleMouseOut = () => {
    setIsHovered(null);
  };
  return (
    <header>
      <div className="header--container">
        <img src={logo} alt={alt} />
        <div className="header__subjects">
          <ul>
            {['Présentation', 'Réalisations', 'Services', 'Contact'].map(
              (item, index) => (
                <li
                  key={index}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                  className={
                    isHovered === index
                      ? 'active'
                      : isHovered !== null
                      ? 'blurred'
                      : ''
                  }
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
