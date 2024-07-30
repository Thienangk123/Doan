import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <FontAwesomeIcon icon={faFileExport} className="icon" /> {/* Biểu tượng Font Awesome */}
          <h1>Task flow</h1>
        </Link>
      </div>
      <div className="user-info">
        <span>Username</span>
        <img src="profile.jpg" alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;
