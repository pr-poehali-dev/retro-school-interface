import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b-4 border-primary/30 bg-card shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Code2" size={28} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">CodeSchool</h1>
              <p className="text-xs text-muted-foreground">Vintage Edition</p>
            </div>
          </Link>
          
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className={`text-lg font-semibold transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary underline decoration-4' : 'text-foreground'
              }`}
            >
              Главная
            </Link>
            <Link 
              to="/schedule" 
              className={`text-lg font-semibold transition-colors hover:text-primary ${
                isActive('/schedule') ? 'text-primary underline decoration-4' : 'text-foreground'
              }`}
            >
              Расписание
            </Link>
            <Link 
              to="/contacts" 
              className={`text-lg font-semibold transition-colors hover:text-primary ${
                isActive('/contacts') ? 'text-primary underline decoration-4' : 'text-foreground'
              }`}
            >
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
