import User from './user';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <p className="header-user">
        Olá, <User />
      </p>
    </header>
  );
}

export default Header;