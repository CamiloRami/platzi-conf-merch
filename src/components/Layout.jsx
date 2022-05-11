import { Header } from './Header';
import { Fooder } from './Fooder';
import '../styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Fooder />
    </div>
  );
};

export { Layout };
