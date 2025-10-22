import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground border-b-4 border-foreground/20 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Icon name="Monitor" size={40} className="text-secondary" />
              <h1 className="text-4xl font-bold tracking-tight">CodeSchool</h1>
            </Link>
          </div>
          
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className={`px-6 py-3 rounded-md border-2 transition-all font-bold ${
                isActive('/') 
                  ? 'bg-secondary text-secondary-foreground border-foreground/30 shadow-md' 
                  : 'bg-card text-card-foreground border-border hover:bg-secondary/50'
              }`}
            >
              Главная
            </Link>
            <Link 
              to="/schedule" 
              className={`px-6 py-3 rounded-md border-2 transition-all font-bold ${
                isActive('/schedule') 
                  ? 'bg-secondary text-secondary-foreground border-foreground/30 shadow-md' 
                  : 'bg-card text-card-foreground border-border hover:bg-secondary/50'
              }`}
            >
              Расписание
            </Link>
            <Link 
              to="/contacts" 
              className={`px-6 py-3 rounded-md border-2 transition-all font-bold ${
                isActive('/contacts') 
                  ? 'bg-secondary text-secondary-foreground border-foreground/30 shadow-md' 
                  : 'bg-card text-card-foreground border-border hover:bg-secondary/50'
              }`}
            >
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-card border-t-4 border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">© 2025 CodeSchool. Все права защищены.</p>
          <p className="text-sm text-muted-foreground mt-2">Обучаем программированию с душой</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
